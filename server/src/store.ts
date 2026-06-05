import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Database, GuestbookEntry, Neighborhood, Site } from "./types.js";
import { buildDemoGuestbook, buildDemoSites } from "./demo-sites.js";
import { createSeedData } from "./seed.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "..", "data");
const DB_PATH = path.join(DATA_DIR, "db.json");

function mergeDemoData(db: Database): Database {
  const now = new Date().toISOString();
  const demoSites = buildDemoSites(now);
  const demoGuestbook = buildDemoGuestbook(now);

  const existingSiteIds = new Set(db.sites.map((s) => s.id));
  const existingGuestbookIds = new Set(db.guestbook.map((g) => g.id));

  let changed = false;

  for (const site of demoSites) {
    if (!existingSiteIds.has(site.id)) {
      db.sites.push(site);
      changed = true;
    }
  }

  for (const entry of demoGuestbook) {
    if (!existingGuestbookIds.has(entry.id)) {
      db.guestbook.push(entry);
      changed = true;
    }
  }

  if (changed) saveDb(db);
  return db;
}

function ensureDb(): Database {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_PATH)) {
    const seed = createSeedData();
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2));
    return seed;
  }

  const raw = fs.readFileSync(DB_PATH, "utf-8");
  const db = JSON.parse(raw) as Database;
  return mergeDemoData(db);
}

function saveDb(db: Database): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

let db = ensureDb();

export function getNeighborhoods(): Neighborhood[] {
  return db.neighborhoods;
}

export function getNeighborhood(id: string): Neighborhood | undefined {
  return db.neighborhoods.find((n) => n.id === id);
}

export function getSitesByNeighborhood(neighborhoodId: string): Site[] {
  return db.sites.filter((s) => s.neighborhoodId === neighborhoodId);
}

export function getSite(id: string): Site | undefined {
  return db.sites.find((s) => s.id === id);
}

export function getSiteByUsername(username: string): Site | undefined {
  return db.sites.find(
    (s) => s.username.toLowerCase() === username.toLowerCase(),
  );
}

export function isGridSlotTaken(
  neighborhoodId: string,
  gridX: number,
  gridY: number,
  excludeSiteId?: string,
): boolean {
  return db.sites.some(
    (s) =>
      s.neighborhoodId === neighborhoodId &&
      s.gridX === gridX &&
      s.gridY === gridY &&
      s.id !== excludeSiteId,
  );
}

export function createSite(
  data: Omit<Site, "id" | "visitorCount" | "createdAt" | "updatedAt">,
): Site {
  const now = new Date().toISOString();
  const site: Site = {
    ...data,
    id: crypto.randomUUID(),
    visitorCount: 0,
    createdAt: now,
    updatedAt: now,
  };
  db.sites.push(site);
  saveDb(db);
  return site;
}

export function updateSite(
  id: string,
  updates: Partial<Omit<Site, "id" | "createdAt">>,
): Site | undefined {
  const index = db.sites.findIndex((s) => s.id === id);
  if (index === -1) return undefined;

  const existing = db.sites[index];
  if (!existing) return undefined;

  const updated: Site = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  db.sites[index] = updated;
  saveDb(db);
  return updated;
}

export function incrementVisitorCount(id: string): Site | undefined {
  const site = getSite(id);
  if (!site) return undefined;
  return updateSite(id, { visitorCount: site.visitorCount + 1 });
}

export function getGuestbook(siteId: string): GuestbookEntry[] {
  return db.guestbook
    .filter((e) => e.siteId === siteId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}

export function addGuestbookEntry(
  siteId: string,
  author: string,
  message: string,
): GuestbookEntry | undefined {
  if (!getSite(siteId)) return undefined;

  const entry: GuestbookEntry = {
    id: crypto.randomUUID(),
    siteId,
    author,
    message,
    createdAt: new Date().toISOString(),
  };
  db.guestbook.push(entry);
  saveDb(db);
  return entry;
}

export function getWebRing(siteId: string): {
  ringName: string;
  prev: { id: string; username: string; title: string } | null;
  next: { id: string; username: string; title: string } | null;
  members: { id: string; username: string; title: string }[];
} | null {
  const site = getSite(siteId);
  if (!site) return null;

  const members = getSitesByNeighborhood(site.neighborhoodId).sort((a, b) =>
    a.username.localeCompare(b.username),
  );

  const index = members.findIndex((m) => m.id === siteId);
  if (index === -1) return null;

  const prev = members[(index - 1 + members.length) % members.length];
  const next = members[(index + 1) % members.length];

  const neighborhood = getNeighborhood(site.neighborhoodId);

  return {
    ringName: `${neighborhood?.name ?? "Unknown"} Web Ring`,
    prev: prev ? { id: prev.id, username: prev.username, title: prev.title } : null,
    next: next ? { id: next.id, username: next.username, title: next.title } : null,
    members: members.map((m) => ({
      id: m.id,
      username: m.username,
      title: m.title,
    })),
  };
}
