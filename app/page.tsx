import Link from "next/link";
import { getNeighborhoods } from "@/lib/api";
import { NeighborhoodCard } from "@/components/NeighborhoodCard";

export default async function Home() {
  let neighborhoods: Awaited<ReturnType<typeof getNeighborhoods>> = [];
  try {
    neighborhoods = await getNeighborhoods();
  } catch {
    neighborhoods = [];
  }

  return (
    <div className="home">
      <div className="starfield" aria-hidden="true" />

      <header className="home__header">
        <div className="home__banner">
          <h1 className="home__title">
            <span className="blink">★</span> GeoCities Neighborhood Builder{" "}
            <span className="blink">★</span>
          </h1>
          <p className="home__subtitle">
            Build your chaotic 90s personal website on a pixel neighborhood map
          </p>
        </div>

        <marquee className="home__marquee" scrollamount={5}>
          🚧 UNDER CONSTRUCTION BUT STILL RADICAL 🚧 Welcome webmasters! Pick a
          neighborhood, claim your lot, customize everything! 🚧
        </marquee>
      </header>

      <main className="home__main">
        <section className="home__intro">
          <h2>🏘️ Choose Your Neighborhood</h2>
          <p>
            Pick a themed street — Gaming Avenue, Anime Plaza, Music Street, or
            Sci-Fi Boulevard — and plant your digital house on the map. Customize
            with raw HTML/CSS, guestbooks, web rings, hit counters, and MIDI
            bangers.
          </p>
        </section>

        {neighborhoods.length === 0 ? (
          <div className="home__offline">
            <p>⚠️ API server offline. Start it with:</p>
            <code>cd server && npm run dev</code>
          </div>
        ) : (
          <div className="home__grid">
            {neighborhoods.map((n) => (
              <NeighborhoodCard key={n.id} neighborhood={n} />
            ))}
          </div>
        )}

        <section className="home__features">
          <h2>✨ Totally Radical Features</h2>
          <ul>
            <li>🗺️ Clickable pixel neighborhood maps</li>
            <li>✏️ Raw HTML/CSS editor with live preview</li>
            <li>📖 Guestbooks for every site</li>
            <li>🔗 Automatic neighborhood web rings</li>
            <li>🔢 Retro visitor hit counters</li>
            <li>🎞️ Animated GIF decoration library</li>
            <li>🎵 Background MIDI music toggle</li>
          </ul>
        </section>
      </main>

      <footer className="home__footer">
        <p>
          Best viewed in{" "}
          <span className="rainbow-text">Netscape Navigator 4.0</span> at
          800×600
        </p>
        <p>
          <Link href="https://www.archive.org/web/" target="_blank">
            Inspired by the real GeoCities
          </Link>
        </p>
        <VisitorBadge />
      </footer>
    </div>
  );
}

function VisitorBadge() {
  return (
    <div className="visitor-badge">
      <span>You are visitor #</span>
      <span className="visitor-badge__num">000042</span>
    </div>
  );
}
