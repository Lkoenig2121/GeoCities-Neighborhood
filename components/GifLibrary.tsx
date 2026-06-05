"use client";

import { GIF_LIBRARY } from "@/lib/gifs";

interface GifLibraryProps {
  selected: string[];
  onToggle: (gifId: string) => void;
}

export function GifLibrary({ selected, onToggle }: GifLibraryProps) {
  return (
    <div className="gif-library">
      <h3 className="gif-library__title">🎞️ Animated GIF Library</h3>
      <p className="gif-library__hint">
        Click to add classic web decorations to your page
      </p>
      <div className="gif-library__grid">
        {GIF_LIBRARY.map((gif) => {
          const isSelected = selected.includes(gif.id);
          return (
            <button
              key={gif.id}
              type="button"
              className={`gif-library__item gif-${gif.animation} ${isSelected ? "gif-library__item--selected" : ""}`}
              onClick={() => onToggle(gif.id)}
              title={gif.name}
            >
              <span className="gif-library__emoji">{gif.emoji}</span>
              <span className="gif-library__name">{gif.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
