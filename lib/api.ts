import type {
  BuildingStyle,
  GuestbookEntry,
  Neighborhood,
  NeighborhoodWithSites,
  Site,
  WebRing,
} from "./types";

function getApiBase(): string {
  if (typeof window !== "undefined") return "/api";
  return process.env.API_URL ?? "http://localhost:3001/api";
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${getApiBase()}${path}`, {
    cache: "no-store",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? `Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export function getNeighborhoods() {
  return request<Neighborhood[]>("/neighborhoods");
}

export function getNeighborhood(id: string) {
  return request<NeighborhoodWithSites>(`/neighborhoods/${id}`);
}

export function getSite(id: string) {
  return request<Site>(`/sites/${id}`);
}

export function createSite(data: {
  neighborhoodId: string;
  username: string;
  title: string;
  tagline?: string;
  gridX: number;
  gridY: number;
  buildingStyle: BuildingStyle;
}) {
  return request<Site>("/sites", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateSite(
  id: string,
  data: Partial<
    Pick<
      Site,
      | "title"
      | "tagline"
      | "html"
      | "css"
      | "gifs"
      | "musicEnabled"
      | "musicUrl"
      | "buildingStyle"
      | "gridX"
      | "gridY"
    >
  >,
) {
  return request<Site>(`/sites/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function recordVisit(id: string) {
  return request<{ visitorCount: number }>(`/sites/${id}/visit`, {
    method: "POST",
  });
}

export function getGuestbook(siteId: string) {
  return request<GuestbookEntry[]>(`/sites/${siteId}/guestbook`);
}

export function addGuestbookEntry(
  siteId: string,
  author: string,
  message: string,
) {
  return request<GuestbookEntry>(`/sites/${siteId}/guestbook`, {
    method: "POST",
    body: JSON.stringify({ author, message }),
  });
}

export function getWebRing(siteId: string) {
  return request<WebRing>(`/sites/${siteId}/webring`);
}
