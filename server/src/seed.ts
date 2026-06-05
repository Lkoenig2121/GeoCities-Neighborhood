import type { Database } from "./types.js";
import { buildDemoGuestbook, buildDemoSites } from "./demo-sites.js";

export const DEFAULT_HTML = `<div class="welcome">
  <h1>★ Welcome to My Homepage! ★</h1>
  <p><blink>UNDER CONSTRUCTION</blink></p>
  <hr>
  <p>Thanks for visiting my corner of the web!</p>
  <ul>
    <li>🎮 Favorite game: ???</li>
    <li>🎵 Now playing: dial-up noises</li>
    <li>💌 Email me: coolperson@geocities.net</li>
  </ul>
  <marquee>★ Thanks 4 visiting!! Sign my guestbook!! ★</marquee>
</div>`;

export const DEFAULT_CSS = `.welcome {
  text-align: center;
  font-family: "Comic Sans MS", cursive;
  color: #ff00ff;
}
h1 {
  color: #00ffff;
  text-shadow: 2px 2px #ff0000;
}
blink {
  color: #ffff00;
  font-weight: bold;
}
marquee {
  background: #000080;
  color: #00ff00;
  padding: 4px;
}`;

export function createSeedData(): Database {
  const now = new Date().toISOString();

  return {
    neighborhoods: [
      {
        id: "gaming-avenue",
        name: "Gaming Avenue",
        tagline: "Where pixels never sleep",
        emoji: "🎮",
        theme: {
          primaryColor: "#6b21a8",
          secondaryColor: "#9333ea",
          accentColor: "#facc15",
          skyColor: "#1e1b4b",
          groundColor: "#312e81",
        },
        gridWidth: 8,
        gridHeight: 6,
        musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        id: "anime-plaza",
        name: "Anime Plaza",
        tagline: "Kawaii chaos central",
        emoji: "🌸",
        theme: {
          primaryColor: "#db2777",
          secondaryColor: "#f472b6",
          accentColor: "#fef08a",
          skyColor: "#fce7f3",
          groundColor: "#fbcfe8",
        },
        gridWidth: 8,
        gridHeight: 6,
        musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      },
      {
        id: "music-street",
        name: "Music Street",
        tagline: "MIDI files at max volume",
        emoji: "🎵",
        theme: {
          primaryColor: "#0369a1",
          secondaryColor: "#0ea5e9",
          accentColor: "#f97316",
          skyColor: "#0c4a6e",
          groundColor: "#075985",
        },
        gridWidth: 8,
        gridHeight: 6,
        musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      },
      {
        id: "sci-fi-boulevard",
        name: "Sci-Fi Boulevard",
        tagline: "Beam me to the guestbook",
        emoji: "🚀",
        theme: {
          primaryColor: "#047857",
          secondaryColor: "#10b981",
          accentColor: "#a7f3d0",
          skyColor: "#022c22",
          groundColor: "#064e3b",
        },
        gridWidth: 8,
        gridHeight: 6,
        musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      },
    ],
    sites: buildDemoSites(now),
    guestbook: buildDemoGuestbook(now),
  };
}
