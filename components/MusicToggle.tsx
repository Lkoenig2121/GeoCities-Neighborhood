"use client";

import { useEffect, useRef, useState } from "react";

interface MusicToggleProps {
  musicUrl: string;
  defaultEnabled?: boolean;
  editable?: boolean;
  onToggle?: (enabled: boolean) => void;
}

export function MusicToggle({
  musicUrl,
  defaultEnabled = false,
  editable,
  onToggle,
}: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [enabled, setEnabled] = useState(defaultEnabled);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (enabled && musicUrl) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [enabled, musicUrl]);

  function toggle() {
    const next = !enabled;
    setEnabled(next);
    onToggle?.(next);
  }

  return (
    <div className="music-toggle">
      <audio ref={audioRef} src={musicUrl} loop preload="none" />
      <button
        type="button"
        className={`music-toggle__btn ${enabled ? "music-toggle__btn--on" : ""}`}
        onClick={toggle}
      >
        {enabled ? "🔊 MIDI ON" : "🔇 MIDI OFF"}
      </button>
      {editable && (
        <p className="music-toggle__hint">
          Visitors can toggle background music on your page
        </p>
      )}
    </div>
  );
}
