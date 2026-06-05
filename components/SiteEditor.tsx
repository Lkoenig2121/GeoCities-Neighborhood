"use client";

import { useState } from "react";
import Link from "next/link";
import type { Neighborhood, Site } from "@/lib/types";
import { updateSite } from "@/lib/api";
import { HtmlCssEditor } from "./HtmlCssEditor";
import { GifLibrary } from "./GifLibrary";
import { MusicToggle } from "./MusicToggle";

interface SiteEditorProps {
  site: Site;
  neighborhood: Neighborhood;
}

export function SiteEditor({ site, neighborhood }: SiteEditorProps) {
  const [title, setTitle] = useState(site.title);
  const [tagline, setTagline] = useState(site.tagline);
  const [html, setHtml] = useState(site.html);
  const [css, setCss] = useState(site.css);
  const [gifs, setGifs] = useState(site.gifs);
  const [musicEnabled, setMusicEnabled] = useState(site.musicEnabled);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function toggleGif(id: string) {
    setGifs((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id],
    );
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    setSaved(false);

    try {
      await updateSite(site.id, {
        title,
        tagline,
        html,
        css,
        gifs,
        musicEnabled,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="site-editor">
      <header className="site-editor__header">
        <div>
          <h1>✏️ Editing: {site.username}</h1>
          <p>{neighborhood.emoji} {neighborhood.name}</p>
        </div>
        <div className="site-editor__actions">
          <Link href={`/site/${site.id}`} className="retro-btn retro-btn--small">
            👁️ View Site
          </Link>
          <button
            type="button"
            className="retro-btn"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "💾 Save Changes"}
          </button>
        </div>
      </header>

      {saved && <p className="site-editor__success">✅ Saved! Your page is live.</p>}
      {error && <p className="site-editor__error">{error}</p>}

      <div className="site-editor__meta">
        <label>
          Title
          <input
            className="retro-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Tagline
          <input
            className="retro-input"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </label>
      </div>

      <HtmlCssEditor
        html={html}
        css={css}
        onHtmlChange={setHtml}
        onCssChange={setCss}
      />

      <GifLibrary selected={gifs} onToggle={toggleGif} />

      <div className="site-editor__music">
        <h3>🎵 Background Music</h3>
        <label className="site-editor__checkbox">
          <input
            type="checkbox"
            checked={musicEnabled}
            onChange={(e) => setMusicEnabled(e.target.checked)}
          />
          Enable MIDI background music for visitors
        </label>
        {musicEnabled && (
          <MusicToggle
            musicUrl={site.musicUrl || neighborhood.musicUrl}
            defaultEnabled={false}
            editable
          />
        )}
      </div>
    </div>
  );
}
