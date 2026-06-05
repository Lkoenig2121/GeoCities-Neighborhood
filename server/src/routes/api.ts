import { Router, type Request, type Response } from "express";
import { DEFAULT_CSS, DEFAULT_HTML } from "../seed.js";
import * as store from "../store.js";
import type { BuildingStyle } from "../types.js";

const router = Router();

router.get("/neighborhoods", (_req: Request, res: Response) => {
  const neighborhoods = store.getNeighborhoods().map((n) => ({
    ...n,
    siteCount: store.getSitesByNeighborhood(n.id).length,
  }));
  res.json(neighborhoods);
});

router.get("/neighborhoods/:id", (req: Request, res: Response) => {
  const neighborhood = store.getNeighborhood(req.params.id);
  if (!neighborhood) {
    res.status(404).json({ error: "Neighborhood not found" });
    return;
  }

  const sites = store.getSitesByNeighborhood(neighborhood.id);
  res.json({ ...neighborhood, sites });
});

router.get("/sites/:id", (req: Request, res: Response) => {
  const site = store.getSite(req.params.id);
  if (!site) {
    res.status(404).json({ error: "Site not found" });
    return;
  }
  res.json(site);
});

router.get("/sites/by-username/:username", (req: Request, res: Response) => {
  const site = store.getSiteByUsername(req.params.username);
  if (!site) {
    res.status(404).json({ error: "Site not found" });
    return;
  }
  res.json(site);
});

router.post("/sites", (req: Request, res: Response) => {
  const {
    neighborhoodId,
    username,
    title,
    tagline,
    gridX,
    gridY,
    buildingStyle,
  } = req.body as {
    neighborhoodId?: string;
    username?: string;
    title?: string;
    tagline?: string;
    gridX?: number;
    gridY?: number;
    buildingStyle?: BuildingStyle;
  };

  if (
    !neighborhoodId ||
    !username ||
    !title ||
    gridX === undefined ||
    gridY === undefined ||
    !buildingStyle
  ) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  if (!store.getNeighborhood(neighborhoodId)) {
    res.status(400).json({ error: "Invalid neighborhood" });
    return;
  }

  if (store.getSiteByUsername(username)) {
    res.status(409).json({ error: "Username already taken" });
    return;
  }

  if (store.isGridSlotTaken(neighborhoodId, gridX, gridY)) {
    res.status(409).json({ error: "Grid slot already occupied" });
    return;
  }

  const neighborhood = store.getNeighborhood(neighborhoodId)!;

  const site = store.createSite({
    neighborhoodId,
    username: username.trim(),
    title: title.trim(),
    tagline: (tagline ?? "").trim(),
    gridX,
    gridY,
    buildingStyle,
    html: DEFAULT_HTML,
    css: DEFAULT_CSS,
    gifs: [],
    musicEnabled: true,
    musicUrl: neighborhood.musicUrl,
    visitorCount: 0,
  });

  res.status(201).json(site);
});

router.put("/sites/:id", (req: Request, res: Response) => {
  const site = store.getSite(req.params.id);
  if (!site) {
    res.status(404).json({ error: "Site not found" });
    return;
  }

  const {
    title,
    tagline,
    html,
    css,
    gifs,
    musicEnabled,
    musicUrl,
    buildingStyle,
    gridX,
    gridY,
  } = req.body as Partial<{
    title: string;
    tagline: string;
    html: string;
    css: string;
    gifs: string[];
    musicEnabled: boolean;
    musicUrl: string;
    buildingStyle: BuildingStyle;
    gridX: number;
    gridY: number;
  }>;

  if (gridX !== undefined && gridY !== undefined) {
    if (
      store.isGridSlotTaken(site.neighborhoodId, gridX, gridY, site.id)
    ) {
      res.status(409).json({ error: "Grid slot already occupied" });
      return;
    }
  }

  const updated = store.updateSite(site.id, {
    ...(title !== undefined && { title: title.trim() }),
    ...(tagline !== undefined && { tagline: tagline.trim() }),
    ...(html !== undefined && { html }),
    ...(css !== undefined && { css }),
    ...(gifs !== undefined && { gifs }),
    ...(musicEnabled !== undefined && { musicEnabled }),
    ...(musicUrl !== undefined && { musicUrl }),
    ...(buildingStyle !== undefined && { buildingStyle }),
    ...(gridX !== undefined && { gridX }),
    ...(gridY !== undefined && { gridY }),
  });

  res.json(updated);
});

router.post("/sites/:id/visit", (req: Request, res: Response) => {
  const updated = store.incrementVisitorCount(req.params.id);
  if (!updated) {
    res.status(404).json({ error: "Site not found" });
    return;
  }
  res.json({ visitorCount: updated.visitorCount });
});

router.get("/sites/:id/guestbook", (req: Request, res: Response) => {
  const site = store.getSite(req.params.id);
  if (!site) {
    res.status(404).json({ error: "Site not found" });
    return;
  }
  res.json(store.getGuestbook(site.id));
});

router.post("/sites/:id/guestbook", (req: Request, res: Response) => {
  const site = store.getSite(req.params.id);
  if (!site) {
    res.status(404).json({ error: "Site not found" });
    return;
  }

  const { author, message } = req.body as { author?: string; message?: string };
  if (!author?.trim() || !message?.trim()) {
    res.status(400).json({ error: "Author and message required" });
    return;
  }

  const entry = store.addGuestbookEntry(
    site.id,
    author.trim(),
    message.trim(),
  );
  res.status(201).json(entry);
});

router.get("/sites/:id/webring", (req: Request, res: Response) => {
  const ring = store.getWebRing(req.params.id);
  if (!ring) {
    res.status(404).json({ error: "Site not found" });
    return;
  }
  res.json(ring);
});

export default router;
