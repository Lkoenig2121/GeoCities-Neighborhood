export type BuildingStyle = "house" | "shop" | "tower" | "cottage";

export interface NeighborhoodTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  skyColor: string;
  groundColor: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  tagline: string;
  emoji: string;
  theme: NeighborhoodTheme;
  gridWidth: number;
  gridHeight: number;
  musicUrl: string;
  siteCount?: number;
}

export interface Site {
  id: string;
  neighborhoodId: string;
  username: string;
  title: string;
  tagline: string;
  gridX: number;
  gridY: number;
  buildingStyle: BuildingStyle;
  html: string;
  css: string;
  gifs: string[];
  musicEnabled: boolean;
  musicUrl: string;
  visitorCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface GuestbookEntry {
  id: string;
  siteId: string;
  author: string;
  message: string;
  createdAt: string;
}

export interface WebRing {
  ringName: string;
  prev: { id: string; username: string; title: string } | null;
  next: { id: string; username: string; title: string } | null;
  members: { id: string; username: string; title: string }[];
}

export interface NeighborhoodWithSites extends Neighborhood {
  sites: Site[];
}
