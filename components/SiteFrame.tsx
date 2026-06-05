"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GIF_LIBRARY } from "@/lib/gifs";
import { recordVisit } from "@/lib/api";
import type { GuestbookEntry, Site, WebRing as WebRingType } from "@/lib/types";
import { Guestbook } from "./Guestbook";
import { MusicToggle } from "./MusicToggle";
import { VisitorCounter } from "./VisitorCounter";
import { WebRing } from "./WebRing";

interface SiteFrameProps {
  site: Site;
  neighborhoodName: string;
  neighborhoodEmoji: string;
  guestbook: GuestbookEntry[];
  webring: WebRingType;
}

export function SiteFrame({
  site,
  neighborhoodName,
  neighborhoodEmoji,
  guestbook,
  webring,
}: SiteFrameProps) {
  const [visitorCount, setVisitorCount] = useState(site.visitorCount);

  useEffect(() => {
    recordVisit(site.id)
      .then((res) => setVisitorCount(res.visitorCount))
      .catch(() => {});
  }, [site.id]);

  const gifBar = site.gifs
    .map((id) => GIF_LIBRARY.find((g) => g.id === id))
    .filter(Boolean);

  const previewDoc = `<!DOCTYPE html><html><head><style>
    body { margin: 0; padding: 16px; }
    blink { animation: blink 1s step-end infinite; }
    @keyframes blink { 50% { opacity: 0; } }
    .gif-asset { font-size: 2rem; display: inline-block; margin: 4px; }
    .gif-bounce { animation: bounce 0.6s ease infinite; }
    .gif-blink { animation: blink 0.8s step-end infinite; }
    .gif-wiggle { animation: wiggle 0.3s ease infinite; }
    .gif-pulse { animation: pulse 1s ease infinite; }
    .gif-spin { animation: spin 2s linear infinite; }
    .gif-flicker { animation: flicker 0.15s step-end infinite; }
    @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    @keyframes wiggle { 0%,100%{transform:rotate(0)} 25%{transform:rotate(-8deg)} 75%{transform:rotate(8deg)} }
    @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.2)} }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes flicker { 50% { opacity: 0.4; } }
    ${site.css}
  </style></head><body>
    ${gifBar.map((g) => `<span class="gif-asset gif-${g!.animation}">${g!.emoji}</span>`).join("")}
    ${site.html}
  </body></html>`;

  return (
    <div className="site-frame">
      <div className="site-frame__browser-bar">
        <span className="site-frame__dot site-frame__dot--red" />
        <span className="site-frame__dot site-frame__dot--yellow" />
        <span className="site-frame__dot site-frame__dot--green" />
        <span className="site-frame__url">
          http://www.geocities.com/{neighborhoodName.toLowerCase().replace(/\s+/g, "")}/{site.username}
        </span>
      </div>

      <header className="site-frame__header">
        <h1>
          {neighborhoodEmoji} {site.title}
        </h1>
        {site.tagline && <p className="site-frame__tagline">{site.tagline}</p>}
        <div className="site-frame__toolbar">
          <VisitorCounter count={visitorCount} />
          {site.musicEnabled && site.musicUrl && (
            <MusicToggle musicUrl={site.musicUrl} defaultEnabled={false} />
          )}
          <Link href={`/site/${site.id}/edit`} className="retro-btn retro-btn--small">
            ✏️ Edit Page
          </Link>
        </div>
      </header>

      <div className="site-frame__content">
        <iframe
          className="site-frame__page"
          srcDoc={previewDoc}
          title={site.title}
          sandbox="allow-same-origin"
        />
      </div>

      <div className="site-frame__sidebar">
        <WebRing ring={webring} />
        <Guestbook siteId={site.id} initialEntries={guestbook} />
      </div>

      <footer className="site-frame__footer">
        <marquee scrollamount={4}>
          ★ Best viewed in Netscape Navigator 4.0 at 800×600 ★ Made with ❤️ and HTML tables ★
        </marquee>
      </footer>
    </div>
  );
}
