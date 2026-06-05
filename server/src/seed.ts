import type { Database } from "./types.js";

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
    sites: [
      {
        id: "demo-pixelmaster",
        neighborhoodId: "gaming-avenue",
        username: "PixelMaster99",
        title: "PixelMaster's Lair",
        tagline: "High scores & hot takes",
        gridX: 2,
        gridY: 1,
        buildingStyle: "tower",
        html: `<div class="lair">
  <h1>🕹️ PIXELMASTER99 🕹️</h1>
  <p>Professional button-masher since 1997</p>
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23ff0' width='80' height='80'/%3E%3Ctext x='40' y='45' text-anchor='middle' font-size='40'%3E👾%3C/text%3E%3C/svg%3E" alt="alien">
  <p><blink>NEW HIGH SCORE: 999999</blink></p>
</div>`,
        css: `.lair { text-align:center; color:#0f0; background:#111; padding:20px; font-family:monospace; }
h1 { color:#f0f; text-shadow:0 0 10px #0ff; }`,
        gifs: ["construction", "new", "email"],
        musicEnabled: true,
        musicUrl: "",
        visitorCount: 1337,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "demo-sakura",
        neighborhoodId: "anime-plaza",
        username: "SakuraDreams",
        title: "Sakura's Anime Shrine",
        tagline: "Fan art & feelings",
        gridX: 4,
        gridY: 2,
        buildingStyle: "cottage",
        html: `<div class="shrine">
  <h1>✨ Sakura's Shrine ✨</h1>
  <p>Currently crying over episode 24...</p>
  <marquee>★ fanfic updates every friday ★</marquee>
</div>`,
        css: `.shrine { background:linear-gradient(#ffc0cb,#fff); padding:16px; text-align:center; font-family:cursive; color:#c026d3; }`,
        gifs: ["heart", "sparkle", "new"],
        musicEnabled: false,
        musicUrl: "",
        visitorCount: 420,
        createdAt: now,
        updatedAt: now,
      },
    ],
    guestbook: [
      {
        id: "gb-1",
        siteId: "demo-pixelmaster",
        author: "RetroGamer_X",
        message: "yo dude your high score board is sick!! add me on ICQ",
        createdAt: now,
      },
      {
        id: "gb-2",
        siteId: "demo-pixelmaster",
        author: "MomsComputer",
        message: "Honey please take down the blink tag",
        createdAt: now,
      },
    ],
  };
}
