"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BuildingStyle, Neighborhood, Site } from "@/lib/types";
import { createSite } from "@/lib/api";
import { PixelMap } from "./PixelMap";
import { PixelBuilding } from "./PixelBuilding";

const BUILDING_STYLES: { value: BuildingStyle; label: string }[] = [
  { value: "house", label: "Classic House" },
  { value: "shop", label: "Corner Shop" },
  { value: "tower", label: "Pixel Tower" },
  { value: "cottage", label: "Cozy Cottage" },
];

interface CreateSiteFormProps {
  neighborhood: Neighborhood;
  existingSites: Site[];
}

export function CreateSiteForm({
  neighborhood,
  existingSites,
}: CreateSiteFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [buildingStyle, setBuildingStyle] =
    useState<BuildingStyle>("house");
  const [gridX, setGridX] = useState<number | null>(null);
  const [gridY, setGridY] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (gridX === null || gridY === null) {
      setError("Pick an empty lot on the map!");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const site = await createSite({
        neighborhoodId: neighborhood.id,
        username,
        title,
        tagline,
        gridX,
        gridY,
        buildingStyle,
      });
      router.push(`/site/${site.id}/edit`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create site");
      setSubmitting(false);
    }
  }

  return (
    <div className="create-form">
      <PixelMap
        neighborhood={neighborhood}
        sites={existingSites}
        selectable
        selectedX={gridX ?? undefined}
        selectedY={gridY ?? undefined}
        onSelectSlot={(x, y) => {
          setGridX(x);
          setGridY(y);
          setError("");
        }}
      />

      <form className="create-form__panel" onSubmit={handleSubmit}>
        <h2>🏗️ Claim Your Lot</h2>

        <label className="create-form__field">
          <span>Username / Handle</span>
          <input
            type="text"
            className="retro-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            maxLength={30}
            pattern="[A-Za-z0-9_]+"
            placeholder="CoolWebmaster99"
          />
        </label>

        <label className="create-form__field">
          <span>Site Title</span>
          <input
            type="text"
            className="retro-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={60}
            placeholder="My Totally Rad Homepage"
          />
        </label>

        <label className="create-form__field">
          <span>Tagline (optional)</span>
          <input
            type="text"
            className="retro-input"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            maxLength={100}
            placeholder="Under construction since forever"
          />
        </label>

        <fieldset className="create-form__field">
          <legend>Building Style</legend>
          <div className="create-form__styles">
            {BUILDING_STYLES.map((s) => (
              <label key={s.value} className="create-form__style-option">
                <input
                  type="radio"
                  name="buildingStyle"
                  value={s.value}
                  checked={buildingStyle === s.value}
                  onChange={() => setBuildingStyle(s.value)}
                />
                <PixelBuilding
                  style={s.value}
                  primaryColor={neighborhood.theme.primaryColor}
                  secondaryColor={neighborhood.theme.secondaryColor}
                  accentColor={neighborhood.theme.accentColor}
                  size="sm"
                />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {gridX !== null && gridY !== null && (
          <p className="create-form__lot">
            📍 Selected lot: ({gridX}, {gridY})
          </p>
        )}

        {error && <p className="create-form__error">{error}</p>}

        <button type="submit" className="retro-btn retro-btn--large" disabled={submitting}>
          {submitting ? "Building..." : "🚀 Build My Site!"}
        </button>
      </form>
    </div>
  );
}
