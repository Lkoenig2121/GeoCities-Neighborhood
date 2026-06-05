"use client";

import type { Neighborhood, Site } from "@/lib/types";
import { PixelBuilding } from "./PixelBuilding";

interface PixelMapProps {
  neighborhood: Neighborhood;
  sites: Site[];
  selectable?: boolean;
  selectedX?: number;
  selectedY?: number;
  onSelectSlot?: (x: number, y: number) => void;
  onSiteClick?: (site: Site) => void;
}

export function PixelMap({
  neighborhood,
  sites,
  selectable,
  selectedX,
  selectedY,
  onSelectSlot,
  onSiteClick,
}: PixelMapProps) {
  const { theme, gridWidth, gridHeight } = neighborhood;

  const siteAt = (x: number, y: number) =>
    sites.find((s) => s.gridX === x && s.gridY === y);

  const cells = [];
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      const site = siteAt(x, y);
      const isSelected = selectedX === x && selectedY === y;

      cells.push(
        <div
          key={`${x}-${y}`}
          className={`pixel-map__cell ${site ? "pixel-map__cell--occupied" : ""} ${isSelected ? "pixel-map__cell--selected" : ""}`}
        >
          {site ? (
            <PixelBuilding
              style={site.buildingStyle}
              primaryColor={theme.primaryColor}
              secondaryColor={theme.secondaryColor}
              accentColor={theme.accentColor}
              label={site.username}
              occupied
              onClick={
                onSiteClick ? () => onSiteClick(site) : undefined
              }
              size="md"
            />
          ) : selectable ? (
            <button
              type="button"
              className="pixel-map__empty-slot"
              onClick={() => onSelectSlot?.(x, y)}
              aria-label={`Empty lot at ${x}, ${y}`}
            >
              <span>+</span>
            </button>
          ) : (
            <div className="pixel-map__grass" />
          )}
        </div>,
      );
    }
  }

  return (
    <div
      className="pixel-map"
      style={
        {
          "--map-sky": theme.skyColor,
          "--map-ground": theme.groundColor,
          "--map-cols": gridWidth,
        } as React.CSSProperties
      }
    >
      <div className="pixel-map__sky">
        <div className="pixel-map__cloud pixel-map__cloud--1" />
        <div className="pixel-map__cloud pixel-map__cloud--2" />
        <div className="pixel-map__title">
          {neighborhood.emoji} {neighborhood.name}
        </div>
      </div>
      <div className="pixel-map__grid">{cells}</div>
      <div className="pixel-map__road">
        <marquee scrollamount="3">
          ★ Welcome to {neighborhood.name} — {neighborhood.tagline} ★
        </marquee>
      </div>
    </div>
  );
}
