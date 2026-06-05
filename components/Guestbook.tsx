"use client";

import { useState } from "react";
import type { GuestbookEntry } from "@/lib/types";
import { addGuestbookEntry } from "@/lib/api";

interface GuestbookProps {
  siteId: string;
  initialEntries: GuestbookEntry[];
}

export function Guestbook({ siteId, initialEntries }: GuestbookProps) {
  const [entries, setEntries] = useState(initialEntries);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    setSubmitting(true);
    setError("");
    try {
      const entry = await addGuestbookEntry(siteId, author, message);
      setEntries((prev) => [entry, ...prev]);
      setAuthor("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign guestbook");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="guestbook">
      <h3 className="guestbook__title">📖 Sign My Guestbook!</h3>

      <form className="guestbook__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name / handle"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          maxLength={40}
          className="retro-input"
        />
        <textarea
          placeholder="Leave a message for the webmaster..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          className="retro-input"
        />
        {error && <p className="guestbook__error">{error}</p>}
        <button type="submit" className="retro-btn" disabled={submitting}>
          {submitting ? "Signing..." : "✍️ Sign Guestbook"}
        </button>
      </form>

      <div className="guestbook__entries">
        {entries.length === 0 ? (
          <p className="guestbook__empty">Be the first to sign!</p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="guestbook__entry">
              <div className="guestbook__entry-header">
                <strong>{entry.author}</strong>
                <time dateTime={entry.createdAt}>
                  {new Date(entry.createdAt).toLocaleDateString()}
                </time>
              </div>
              <p>{entry.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
