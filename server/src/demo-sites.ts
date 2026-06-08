import type { BuildingStyle, GuestbookEntry, Site } from "./types.js";

interface DemoSiteInput {
  id: string;
  neighborhoodId: string;
  username: string;
  title: string;
  tagline: string;
  gridX: number;
  gridY: number;
  buildingStyle: BuildingStyle;
  html: string;
  css: string;
  gifs: string[];
  musicEnabled: boolean;
  visitorCount: number;
}

export function buildDemoSites(now: string): Site[] {
  const demos: DemoSiteInput[] = [
    // ── Gaming Avenue ──────────────────────────────────────────
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
  <p>Current obsession: Tony Hawk's Pro Skater 2</p>
</div>`,
      css: `.lair { text-align:center; color:#0f0; background:#111; padding:20px; font-family:monospace; }
h1 { color:#f0f; text-shadow:0 0 10px #0ff; }`,
      gifs: ["construction", "new", "email"],
      musicEnabled: true,
      visitorCount: 1337,
    },
    {
      id: "demo-buttonmash",
      neighborhoodId: "gaming-avenue",
      username: "ButtonMashQueen",
      title: "Queen of Combos",
      tagline: "Frame-perfect or bust",
      gridX: 1,
      gridY: 0,
      buildingStyle: "house",
      html: `<div class="combo">
  <h1>👊 BUTTON MASH QUEEN 👊</h1>
  <p>Fighting game tier lists updated weekly!</p>
  <table border="1" cellpadding="4">
    <tr><th>Game</th><th>Main</th><th>Rank</th></tr>
    <tr><td>Street Fighter II</td><td>Chun-Li</td><td>S</td></tr>
    <tr><td>Tekken 3</td><td>Nina</td><td>A+</td></tr>
    <tr><td>MK4</td><td>Sonya</td><td>B</td></tr>
  </table>
  <marquee>★ challenge me at the arcade on saturday ★</marquee>
</div>`,
      css: `.combo { background:#200020; color:#ff69b4; text-align:center; padding:16px; font-family:Arial; }
h1 { color:#ff0; } table { margin:10px auto; border-color:#f0f; }`,
      gifs: ["fire", "alien", "new"],
      musicEnabled: true,
      visitorCount: 892,
    },
    {
      id: "demo-rpgman",
      neighborhoodId: "gaming-avenue",
      username: "RPG_Man2000",
      title: "RPG Walkthrough HQ",
      tagline: "Spoilers inside (sorry)",
      gridX: 3,
      gridY: 0,
      buildingStyle: "cottage",
      html: `<div class="rpg">
  <h1>⚔️ RPG MAN 2000 ⚔️</h1>
  <p><blink>WALKTHROUGH UPDATE: FF7 disc 3!</blink></p>
  <ul>
    <li>🗡️ Secret boss guides</li>
    <li>💎 Item location maps</li>
    <li>📜 Fan theories about Aerith</li>
  </ul>
  <p>Email tips to: rpgman@geocities.net</p>
</div>`,
      css: `.rpg { background:#001a00; color:#9f9; padding:20px; font-family:"Times New Roman",serif; }
h1 { color:#ffd700; text-align:center; }`,
      gifs: ["star", "construction", "guestbook"],
      musicEnabled: false,
      visitorCount: 2104,
    },
    {
      id: "demo-lanparty",
      neighborhoodId: "gaming-avenue",
      username: "LANPartyDude",
      title: "LAN Party Central",
      tagline: "Bring your own CAT5 cable",
      gridX: 4,
      gridY: 0,
      buildingStyle: "shop",
      html: `<div class="lan">
  <h1>🖥️ LAN PARTY DUDE 🖥️</h1>
  <p>Next party: <blink>June 12th @ Dave's basement</blink></p>
  <p>Games on the roster:</p>
  <ol>
    <li>Unreal Tournament</li>
    <li>Counter-Strike beta</li>
    <li>Age of Empires II</li>
    <li>StarCraft Brood War</li>
  </ol>
  <p>Pizza fund: $47.50 / $60.00</p>
</div>`,
      css: `.lan { background:#1a1a3e; color:#0ff; padding:16px; }
h1 { text-align:center; color:#ff6600; }`,
      gifs: ["email", "fire", "counter"],
      musicEnabled: true,
      visitorCount: 567,
    },
    {
      id: "demo-speedrun",
      neighborhoodId: "gaming-avenue",
      username: "SpeedrunnerX",
      title: "WR Attempts Live",
      tagline: "Any% no glitches",
      gridX: 5,
      gridY: 1,
      buildingStyle: "tower",
      html: `<div class="speed">
  <h1>⏱️ SPEEDRUNNER X ⏱️</h1>
  <p>Personal bests:</p>
  <pre>
Super Mario 64 70★ : 1:38:22
Ocarina of Time   : 3:02:11
Sonic 2           : 0:18:44
  </pre>
  <p><blink>STREAMING FRIDAY 8PM EST</blink></p>
</div>`,
      css: `.speed { background:#000; color:#0f0; font-family:monospace; padding:16px; text-align:center; }
h1 { color:#f00; } pre { text-align:left; display:inline-block; }`,
      gifs: ["new", "counter", "alien"],
      musicEnabled: false,
      visitorCount: 3401,
    },
    {
      id: "demo-crtkyle",
      neighborhoodId: "gaming-avenue",
      username: "CRT_Kyle",
      title: "CRT Collector's Corner",
      tagline: "PVM or nothing",
      gridX: 0,
      gridY: 2,
      buildingStyle: "house",
      html: `<div class="crt">
  <h1>📺 CRT KYLE'S CORNER</h1>
  <p>I collect CRTs. No I will not give you one.</p>
  <p>Current setup: Sony PVM-20M4U + RGB SCART</p>
  <p>Hot take: scanlines &gt; LCD filters</p>
  <marquee>★ trading BVMs DM me on AIM ★</marquee>
</div>`,
      css: `.crt { background:#222; color:#ccc; padding:16px; font-family:monospace; text-align:center; }
h1 { color:#0ff; }`,
      gifs: ["construction", "star", "email"],
      musicEnabled: true,
      visitorCount: 743,
    },
    {
      id: "demo-doomgal",
      neighborhoodId: "gaming-avenue",
      username: "DoomGal98",
      title: "Doom Gal's Hell Portal",
      tagline: "Rip and tear (& knit)",
      gridX: 6,
      gridY: 2,
      buildingStyle: "tower",
      html: `<div class="doom">
  <h1>🔥 DOOM GAL 98 🔥</h1>
  <p>Custom WADs | Fan fiction | Demon fan art</p>
  <p>Favorite level: E1M1 (obviously)</p>
  <p><blink>NEW WAD: "Hell's Kitchen" DOWNLOAD NOW</blink></p>
</div>`,
      css: `.doom { background:#400000; color:#ff4444; padding:20px; text-align:center; font-family:Impact,sans-serif; }
h1 { color:#ff0; text-shadow:2px 2px #000; }`,
      gifs: ["fire", "skull", "new"],
      musicEnabled: true,
      visitorCount: 1566,
    },
    {
      id: "demo-emulator",
      neighborhoodId: "gaming-avenue",
      username: "EmulatorZone",
      title: "The Emulator Zone",
      tagline: "Preservation not piracy (wink)",
      gridX: 1,
      gridY: 3,
      buildingStyle: "shop",
      html: `<div class="emu">
  <h1>💾 EMULATOR ZONE 💾</h1>
  <p>Your #1 source for emulator news & compatibility lists!</p>
  <ul>
    <li>SNES9x setup guide</li>
    <li>NESticle nostalgia thread</li>
    <li>Why MAME matters</li>
  </ul>
</div>`,
      css: `.emu { background:#003300; color:#0f0; padding:16px; font-family:Arial; }
h1 { text-align:center; color:#ff0; }`,
      gifs: ["alien", "construction", "counter"],
      musicEnabled: false,
      visitorCount: 4892,
    },
    {
      id: "demo-quakeclan",
      neighborhoodId: "gaming-avenue",
      username: "QuakeClan777",
      title: "Clan [777] Fortress",
      tagline: "We frag on Tuesdays",
      gridX: 7,
      gridY: 3,
      buildingStyle: "house",
      html: `<div class="clan">
  <h1>☠️ CLAN [777] ☠️</h1>
  <p>Quake II deathmatch champions of the basement</p>
  <p>Roster: DeaTHLord, xXSniperXx, lag_king, mom_go_away</p>
  <p><blink>RECRUITING: must have 56k modem</blink></p>
</div>`,
      css: `.clan { background:#111; color:#777; padding:16px; text-align:center; font-family:monospace; }
h1 { color:#f00; }`,
      gifs: ["skull", "fire", "email"],
      musicEnabled: true,
      visitorCount: 777,
    },

    // ── Anime Plaza ────────────────────────────────────────────
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
  <p>Moodboard: cherry blossoms, friendship, betrayal</p>
</div>`,
      css: `.shrine { background:linear-gradient(#ffc0cb,#fff); padding:16px; text-align:center; font-family:cursive; color:#c026d3; }`,
      gifs: ["heart", "sparkle", "new"],
      musicEnabled: false,
      visitorCount: 420,
    },
    {
      id: "demo-narutokid",
      neighborhoodId: "anime-plaza",
      username: "NarutoKid2003",
      title: "Believe It!!!",
      tagline: "Shadow clone jutsu fan page",
      gridX: 0,
      gridY: 0,
      buildingStyle: "tower",
      html: `<div class="ninja">
  <h1>🍥 NARUTO KID 2003 🍥</h1>
  <p><blink>BELIEVE IT!!! BELIEVE IT!!!</blink></p>
  <p>My ninja way: never skip the filler (jk I skip all of it)</p>
  <p>Sasuke vs Naruto fanfic chapter 47 coming soon!!</p>
</div>`,
      css: `.ninja { background:#ff6600; color:#000080; padding:16px; text-align:center; font-weight:bold; }`,
      gifs: ["fire", "new", "sparkle"],
      musicEnabled: true,
      visitorCount: 1999,
    },
    {
      id: "demo-sailormoon",
      neighborhoodId: "anime-plaza",
      username: "SailorMoonFan",
      title: "Moon Prism Power!",
      tagline: "In the name of the moon I will punish you",
      gridX: 1,
      gridY: 1,
      buildingStyle: "cottage",
      html: `<div class="moon">
  <h1>🌙 SAILOR MOON FAN 🌙</h1>
  <p>Fighting evil by moonlight! Winning love by daylight!</p>
  <p>Favorite scout: Sailor Jupiter (obviously)</p>
  <p>Download my MIDI collection: 47 files!</p>
</div>`,
      css: `.moon { background:linear-gradient(#000080,#ff69b4); color:#fff; padding:20px; text-align:center; }
h1 { color:#ffd700; }`,
      gifs: ["heart", "sparkle", "music"],
      musicEnabled: true,
      visitorCount: 2888,
    },
    {
      id: "demo-mechaotaku",
      neighborhoodId: "anime-plaza",
      username: "MechaOtaku",
      title: "Giant Robot Database",
      tagline: "It's not a Gundam it's a lifestyle",
      gridX: 2,
      gridY: 0,
      buildingStyle: "tower",
      html: `<div class="mecha">
  <h1>🤖 MECHA OTAKU 🤖</h1>
  <p>Complete Gundam timeline (it's fine, I have a chart)</p>
  <p>Model kit build log: MG Wing Zero Custom</p>
  <p><blink>NEW: Evangelion episode analysis essays</blink></p>
</div>`,
      css: `.mecha { background:#1a1a2e; color:#0ff; padding:16px; font-family:monospace; }
h1 { text-align:center; color:#f0f; }`,
      gifs: ["alien", "construction", "star"],
      musicEnabled: false,
      visitorCount: 1750,
    },
    {
      id: "demo-fanficqueen",
      neighborhoodId: "anime-plaza",
      username: "FanficQueen",
      title: "The Fanfic Archive",
      tagline: "Rated PG-13 (mostly)",
      gridX: 0,
      gridY: 3,
      buildingStyle: "house",
      html: `<div class="fic">
  <h1>📚 FANFIC QUEEN 📚</h1>
  <p>12,000 words of slow-burn romance and mecha battles</p>
  <p>Currently accepting beta readers!!</p>
  <marquee>★ disclaimer: I don't own these characters ★</marquee>
</div>`,
      css: `.fic { background:#fff0f5; color:#800080; padding:16px; font-family:Georgia,serif; }
h1 { text-align:center; }`,
      gifs: ["heart", "guestbook", "new"],
      musicEnabled: false,
      visitorCount: 934,
    },
    {
      id: "demo-cosplay",
      neighborhoodId: "anime-plaza",
      username: "CosplayChaos",
      title: "Cosplay Chaos Studio",
      tagline: "Hot glue burns are battle scars",
      gridX: 3,
      gridY: 3,
      buildingStyle: "shop",
      html: `<div class="cosplay">
  <h1>🎭 COSPLAY CHAOS 🎭</h1>
  <p>Convention photo gallery (Con pics '99-'02)</p>
  <p>Tutorial: making armor from craft foam</p>
  <p>Next con: Anime Expo — who's going?!</p>
</div>`,
      css: `.cosplay { background:#ff1493; color:#fff; padding:16px; text-align:center; }
h1 { color:#ff0; }`,
      gifs: ["sparkle", "star", "email"],
      musicEnabled: true,
      visitorCount: 1203,
    },
    {
      id: "demo-otakucafe",
      neighborhoodId: "anime-plaza",
      username: "OtakuCafe",
      title: "Otaku Café",
      tagline: "Virtual coffee & anime reviews",
      gridX: 6,
      gridY: 1,
      buildingStyle: "cottage",
      html: `<div class="cafe">
  <h1>☕ OTAKU CAFÉ ☕</h1>
  <p>Today's special: discussing why the manga is better</p>
  <p>Review score: Cowboy Bebop — 11/10</p>
  <p>Join our book club (we read manga)</p>
</div>`,
      css: `.cafe { background:#8B4513; color:#ffe4b5; padding:16px; text-align:center; font-family:cursive; }`,
      gifs: ["heart", "music", "guestbook"],
      musicEnabled: true,
      visitorCount: 678,
    },
    {
      id: "demo-mangamania",
      neighborhoodId: "anime-plaza",
      username: "MangaMania",
      title: "Manga Mania Imports",
      tagline: "Right-to-left reading since day one",
      gridX: 7,
      gridY: 0,
      buildingStyle: "shop",
      html: `<div class="manga">
  <h1>📖 MANGA MANIA 📖</h1>
  <p>Import guide: how to order from Japan (pre-PayPal era)</p>
  <p>Wishlist: complete Ranma 1/2, Fist of the North Star</p>
  <p><blink>SPOILER FREE ZONE (please)</blink></p>
</div>`,
      css: `.manga { background:#000; color:#fff; padding:16px; }
h1 { color:#f00; text-align:center; }`,
      gifs: ["new", "construction", "counter"],
      musicEnabled: false,
      visitorCount: 2456,
    },
    {
      id: "demo-kawaiikat",
      neighborhoodId: "anime-plaza",
      username: "KawaiiKat",
      title: "Kawaii Kat's Page",
      tagline: "Everything is kawaii desu~",
      gridX: 1,
      gridY: 4,
      buildingStyle: "cottage",
      html: `<div class="kawaii">
  <h1>🐱 KAWAII KAT 🐱</h1>
  <p>desu desu desu~ ★ uwu ★</p>
  <p>Sticker collection: 342 and counting!</p>
  <p>My neopet is my pride and joy</p>
</div>`,
      css: `.kawaii { background:#ffb6c1; color:#ff1493; padding:20px; text-align:center; font-size:1.1em; }`,
      gifs: ["heart", "sparkle", "star"],
      musicEnabled: true,
      visitorCount: 3333,
    },
    {
      id: "demo-subvsdub",
      neighborhoodId: "anime-plaza",
      username: "SubVsDub",
      title: "The Great Debate",
      tagline: "There will be no peace",
      gridX: 5,
      gridY: 4,
      buildingStyle: "house",
      html: `<div class="debate">
  <h1>⚔️ SUB VS DUB ⚔️</h1>
  <p>The most important argument on the internet</p>
  <p>Current poll: Sub wins 67% (fight me)</p>
  <p>Flame war rules: no personal attacks (jk go wild)</p>
</div>`,
      css: `.debate { background:#400040; color:#ff0; padding:16px; text-align:center; }
h1 { color:#0ff; }`,
      gifs: ["fire", "skull", "guestbook"],
      musicEnabled: false,
      visitorCount: 5001,
    },

    // ── Music Street ───────────────────────────────────────────
    {
      id: "demo-midimaniac",
      neighborhoodId: "music-street",
      username: "MidiManiac",
      title: "MIDI Maniac's Lab",
      tagline: "All General MIDI, all the time",
      gridX: 0,
      gridY: 0,
      buildingStyle: "shop",
      html: `<div class="midi">
  <h1>🎹 MIDI MANIAC 🎹</h1>
  <p>Download my MIDI renditions of Top 40 hits!</p>
  <p>Soundcard: Sound Blaster AWE64 (the good one)</p>
  <p><blink>NEW: Smash Mouth All Star.mid</blink></p>
</div>`,
      css: `.midi { background:#000040; color:#0ff; padding:16px; text-align:center; font-family:monospace; }`,
      gifs: ["music", "new", "counter"],
      musicEnabled: true,
      visitorCount: 1876,
    },
    {
      id: "demo-punkrocker",
      neighborhoodId: "music-street",
      username: "PunkRocker88",
      title: "Punk Rocker '88",
      tagline: "Anarchy in the guestbook",
      gridX: 2,
      gridY: 0,
      buildingStyle: "house",
      html: `<div class="punk">
  <h1>🤘 PUNK ROCKER 88 🤘</h1>
  <p>If it's louder than your parents like, it's good</p>
  <p>Show review: basement show last friday WAS INSANE</p>
  <p>Zines for trade — mail me a SASE</p>
</div>`,
      css: `.punk { background:#000; color:#f00; padding:20px; text-align:center; font-family:Impact; }
h1 { color:#ff0; }`,
      gifs: ["fire", "skull", "email"],
      musicEnabled: true,
      visitorCount: 999,
    },
    {
      id: "demo-cdripper",
      neighborhoodId: "music-street",
      username: "CD_Ripper_99",
      title: "CD Ripper's Vault",
      tagline: "128kbps MP3s for days",
      gridX: 4,
      gridY: 1,
      buildingStyle: "tower",
      html: `<div class="rip">
  <h1>💿 CD RIPPER 99 💿</h1>
  <p>Ripping CDs since Napster taught us how</p>
  <p>Encoding guide: LAME mp3 settings explained</p>
  <p>My collection: 4,200 songs (all legally owned!!!)</p>
</div>`,
      css: `.rip { background:#1a1a1a; color:#0f0; padding:16px; font-family:monospace; }
h1 { color:#f0f; text-align:center; }`,
      gifs: ["music", "construction", "counter"],
      musicEnabled: false,
      visitorCount: 3141,
    },
    {
      id: "demo-ravequeen",
      neighborhoodId: "music-street",
      username: "RaveQueen",
      title: "Rave Queen's Paradise",
      tagline: "PLUR since '95",
      gridX: 1,
      gridY: 2,
      buildingStyle: "cottage",
      html: `<div class="rave">
  <h1>💃 RAVE QUEEN 💃</h1>
  <p>Glow sticks | Kandi bracelets | 140 BPM</p>
  <p>Next rave: warehouse district (location TBA)</p>
  <marquee>★ peace love unity respect ★</marquee>
</div>`,
      css: `.rave { background:linear-gradient(#ff00ff,#00ffff,#ff00ff); color:#fff; padding:20px; text-align:center; }
h1 { text-shadow:2px 2px #000; }`,
      gifs: ["sparkle", "fire", "music"],
      musicEnabled: true,
      visitorCount: 2222,
    },
    {
      id: "demo-guitargod",
      neighborhoodId: "music-street",
      username: "GuitarGod_97",
      title: "Guitar God '97",
      tagline: "Shredding through the dial-up",
      gridX: 6,
      gridY: 0,
      buildingStyle: "tower",
      html: `<div class="guitar">
  <h1>🎸 GUITAR GOD 97 🎸</h1>
  <p>Tab archive: Metallica, Nirvana, Green Day</p>
  <p>Gear: Squier Strat + Peavey amp (dreaming of a Les Paul)</p>
  <p>MP3 demos of my band (we need a drummer)</p>
</div>`,
      css: `.guitar { background:#2d1b00; color:#ffd700; padding:16px; text-align:center; }`,
      gifs: ["fire", "star", "new"],
      musicEnabled: true,
      visitorCount: 1488,
    },
    {
      id: "demo-mixtape",
      neighborhoodId: "music-street",
      username: "MixTapeMaster",
      title: "Mix Tape Master",
      tagline: "Side A: bangers. Side B: feelings.",
      gridX: 0,
      gridY: 3,
      buildingStyle: "shop",
      html: `<div class="tape">
  <h1>📼 MIX TAPE MASTER 📼</h1>
  <p>How to make the perfect mix tape for your crush</p>
  <p>Rule #1: open with something cool, close with something deep</p>
  <p>Currently accepting track requests!</p>
</div>`,
      css: `.tape { background:#8B0000; color:#ffe4e1; padding:16px; font-family:cursive; text-align:center; }`,
      gifs: ["heart", "music", "guestbook"],
      musicEnabled: true,
      visitorCount: 776,
    },
    {
      id: "demo-lyrics",
      neighborhoodId: "music-street",
      username: "LyricsArchive",
      title: "Lyrics Archive Project",
      tagline: "Misheard lyrics welcome",
      gridX: 3,
      gridY: 4,
      buildingStyle: "house",
      html: `<div class="lyrics">
  <h1>📝 LYRICS ARCHIVE 📝</h1>
  <p>Transcribing lyrics one dial-up hour at a time</p>
  <p>Most requested: anything by Radiohead</p>
  <p>Submit corrections via guestbook!</p>
</div>`,
      css: `.lyrics { background:#f5f5dc; color:#333; padding:16px; font-family:Georgia,serif; }
h1 { color:#800000; text-align:center; }`,
      gifs: ["guestbook", "construction", "email"],
      musicEnabled: false,
      visitorCount: 4096,
    },
    {
      id: "demo-vinyl",
      neighborhoodId: "music-street",
      username: "VinylJunkie",
      title: "Vinyl Junkie's Crate",
      tagline: "Warm sound, warm heart",
      gridX: 5,
      gridY: 2,
      buildingStyle: "cottage",
      html: `<div class="vinyl">
  <h1>🎵 VINYL JUNKIE 🎵</h1>
  <p>Record store finds & thrift shop scores</p>
  <p>Grail hunt: original pressing Dark Side of the Moon</p>
  <p>Hot take: vinyl sounds better (science pending)</p>
</div>`,
      css: `.vinyl { background:#1a0a00; color:#deb887; padding:16px; text-align:center; }`,
      gifs: ["star", "music", "counter"],
      musicEnabled: true,
      visitorCount: 654,
    },
    {
      id: "demo-boyband",
      neighborhoodId: "music-street",
      username: "BoyBandFanClub",
      title: "Boy Band Fan Club HQ",
      tagline: "Who's your favorite? (wrong answers only)",
      gridX: 7,
      gridY: 3,
      buildingStyle: "shop",
      html: `<div class="boyband">
  <h1>💕 BOY BAND FAN CLUB 💕</h1>
  <p>*NSYNC vs Backstreet Boys: the eternal war</p>
  <p>Wallpaper downloads! Poster scans! Tears!</p>
  <p><blink>CONCERT COUNTDOWN: 47 DAYS</blink></p>
</div>`,
      css: `.boyband { background:#ff69b4; color:#fff; padding:16px; text-align:center; }
h1 { color:#ff0; }`,
      gifs: ["heart", "sparkle", "new"],
      musicEnabled: true,
      visitorCount: 5555,
    },
    {
      id: "demo-napsterkid",
      neighborhoodId: "music-street",
      username: "NapsterKid",
      title: "Napster Kid's Lair",
      tagline: "You wouldn't steal a car...",
      gridX: 2,
      gridY: 5,
      buildingStyle: "house",
      html: `<div class="napster">
  <h1>🐱 NAPSTER KID 🐱</h1>
  <p>Sharing is caring (RIAA disagrees)</p>
  <p>Currently downloading: entire discography (56k speed)</p>
  <p>ETA: 3 days, 14 hours</p>
</div>`,
      css: `.napster { background:#000; color:#0f0; padding:16px; font-family:monospace; text-align:center; }`,
      gifs: ["alien", "fire", "counter"],
      musicEnabled: false,
      visitorCount: 8888,
    },

    // ── Sci-Fi Boulevard ───────────────────────────────────────
    {
      id: "demo-startrek",
      neighborhoodId: "sci-fi-boulevard",
      username: "StarTrekNerd",
      title: "Star Trek Nerd's Bridge",
      tagline: "Live long and sign my guestbook",
      gridX: 0,
      gridY: 0,
      buildingStyle: "tower",
      html: `<div class="trek">
  <h1>🖖 STAR TREK NERD 🖖</h1>
  <p>Captain's log: still debating TOS vs TNG</p>
  <p>Episode guide: all 726 episodes ranked</p>
  <p>Make it so. Engage. Tea, Earl Grey, hot.</p>
</div>`,
      css: `.trek { background:#000040; color:#0ff; padding:16px; text-align:center; font-family:Arial; }`,
      gifs: ["star", "new", "guestbook"],
      musicEnabled: true,
      visitorCount: 1701,
    },
    {
      id: "demo-xfiles",
      neighborhoodId: "sci-fi-boulevard",
      username: "XFilesFanatic",
      title: "The X-Files Basement",
      tagline: "The truth is out there (in my fanfic)",
      gridX: 3,
      gridY: 0,
      buildingStyle: "house",
      html: `<div class="xfiles">
  <h1>👽 X-FILES FANATIC 👽</h1>
  <p>I want to believe (in good season finales)</p>
  <p>Conspiracy board: red string not included</p>
  <p>Mulder/Scully slow burn fic: 89 chapters</p>
</div>`,
      css: `.xfiles { background:#0a0a0a; color:#888; padding:16px; text-align:center; }
h1 { color:#0f0; }`,
      gifs: ["alien", "construction", "email"],
      musicEnabled: false,
      visitorCount: 1993,
    },
    {
      id: "demo-alienhunter",
      neighborhoodId: "sci-fi-boulevard",
      username: "AlienHunter",
      title: "Alien Hunter's Den",
      tagline: "Area 51 road trip planner",
      gridX: 1,
      gridY: 1,
      buildingStyle: "cottage",
      html: `<div class="alien">
  <h1>🛸 ALIEN HUNTER 🛸</h1>
  <p>UFO sighting reports from my backyard</p>
  <p>Abduction stories: fact or fiction? (yes)</p>
  <p>Join my MUFON chapter!</p>
</div>`,
      css: `.alien { background:#001100; color:#0f0; padding:16px; text-align:center; }`,
      gifs: ["alien", "sparkle", "counter"],
      musicEnabled: true,
      visitorCount: 451,
    },
    {
      id: "demo-robotwars",
      neighborhoodId: "sci-fi-boulevard",
      username: "RobotWars99",
      title: "Robot Wars '99",
      tagline: "Sir Killalot fan club",
      gridX: 5,
      gridY: 0,
      buildingStyle: "shop",
      html: `<div class="robot">
  <h1>🤖 ROBOT WARS 99 🤖</h1>
  <p>Battle bot schematics & fight predictions</p>
  <p>Champion: Chaos 2 (fight me)</p>
  <p>Building my own bot: "Dial-Up Destroyer"</p>
</div>`,
      css: `.robot { background:#333; color:#ff0; padding:16px; text-align:center; font-family:monospace; }`,
      gifs: ["fire", "skull", "new"],
      musicEnabled: true,
      visitorCount: 842,
    },
    {
      id: "demo-timetravel",
      neighborhoodId: "sci-fi-boulevard",
      username: "TimeTraveler_X",
      title: "Time Traveler's Journal",
      tagline: "Posting from the year 2000",
      gridX: 0,
      gridY: 2,
      buildingStyle: "tower",
      html: `<div class="time">
  <h1>⏳ TIME TRAVELER X ⏳</h1>
  <p>If you're reading this, the timeline is intact</p>
  <p>Paradox prevention tips & bootstrap theory</p>
  <p><blink>WARNING: do not interact with past self</blink></p>
</div>`,
      css: `.time { background:linear-gradient(#000,#004); color:#0ff; padding:16px; text-align:center; }
h1 { color:#f0f; }`,
      gifs: ["star", "alien", "counter"],
      musicEnabled: false,
      visitorCount: 2000,
    },
    {
      id: "demo-marscolonist",
      neighborhoodId: "sci-fi-boulevard",
      username: "MarsColonist",
      title: "Mars Colony Planning",
      tagline: "Red planet or bust",
      gridX: 4,
      gridY: 2,
      buildingStyle: "house",
      html: `<div class="mars">
  <h1>🔴 MARS COLONIST 🔴</h1>
  <p>Countdown to human Mars landing (optimistic edition)</p>
  <p>Terraforming FAQ | Habitat designs | Space food reviews</p>
  <p>Would you go? (yes/YES)</p>
</div>`,
      css: `.mars { background:#4a0000; color:#ffcccc; padding:16px; text-align:center; }`,
      gifs: ["fire", "star", "construction"],
      musicEnabled: true,
      visitorCount: 3030,
    },
    {
      id: "demo-cyberpunk",
      neighborhoodId: "sci-fi-boulevard",
      username: "CyberPunkJo",
      title: "Cyber Punk Jo's Grid",
      tagline: "High tech, low life, high MIDI",
      gridX: 6,
      gridY: 1,
      buildingStyle: "tower",
      html: `<div class="cyber">
  <h1>🌃 CYBER PUNK JO 🌃</h1>
  <p>Neuromancer book club meets every Tuesday</p>
  <p>Blade Runner: which cut is canon? (all of them)</p>
  <p>My aesthetic: neon rain and chrome everything</p>
</div>`,
      css: `.cyber { background:#0a0020; color:#ff00ff; padding:16px; text-align:center; font-family:monospace; }
h1 { color:#0ff; text-shadow:0 0 8px #f0f; }`,
      gifs: ["alien", "fire", "music"],
      musicEnabled: true,
      visitorCount: 2077,
    },
    {
      id: "demo-uforesearch",
      neighborhoodId: "sci-fi-boulevard",
      username: "UFOResearch",
      title: "UFO Research Institute",
      tagline: "Peer-reviewed conspiracy",
      gridX: 2,
      gridY: 4,
      buildingStyle: "cottage",
      html: `<div class="ufo">
  <h1>🔭 UFO RESEARCH 🔭</h1>
  <p>Declassified documents & blurry photos since 1998</p>
  <p>Project Blue Book reading list</p>
  <p>Submit your sighting reports!</p>
</div>`,
      css: `.ufo { background:#001a33; color:#add8e6; padding:16px; text-align:center; }`,
      gifs: ["alien", "guestbook", "email"],
      musicEnabled: false,
      visitorCount: 1122,
    },
    {
      id: "demo-holodeck",
      neighborhoodId: "sci-fi-boulevard",
      username: "HolodeckDreams",
      title: "Holodeck Dreams Inc.",
      tagline: "Simulating the perfect webpage",
      gridX: 7,
      gridY: 4,
      buildingStyle: "shop",
      html: `<div class="holo">
  <h1>✨ HOLODECK DREAMS ✨</h1>
  <p>What would YOU simulate? (be honest)</p>
  <p>VR before VR: the Star Trek way</p>
  <p>Safety protocols: OFF (for fun)</p>
</div>`,
      css: `.holo { background:linear-gradient(#004,#808); color:#fff; padding:16px; text-align:center; }`,
      gifs: ["sparkle", "star", "new"],
      musicEnabled: true,
      visitorCount: 2368,
    },
    {
      id: "demo-spacecadet",
      neighborhoodId: "sci-fi-boulevard",
      username: "SpaceCadet42",
      title: "Space Cadet's Bunk",
      tagline: "Don't panic. Carry a towel.",
      gridX: 1,
      gridY: 5,
      buildingStyle: "house",
      html: `<div class="space">
  <h1>🚀 SPACE CADET 42 🚀</h1>
  <p>Hitchhiker's Guide quotes for every occasion</p>
  <p>Answer to life, universe, everything: <blink>42</blink></p>
  <p>Mostly harmless.</p>
</div>`,
      css: `.space { background:#000; color:#0f0; padding:16px; text-align:center; font-family:monospace; }
h1 { color:#ff0; }`,
      gifs: ["alien", "star", "guestbook"],
      musicEnabled: true,
      visitorCount: 4242,
    },
  ];

  return demos.map((d) => ({
    ...d,
    musicUrl: "",
    createdAt: now,
    updatedAt: now,
  }));
}

export function buildDemoGuestbook(now: string): GuestbookEntry[] {
  return [
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
    {
      id: "gb-3",
      siteId: "demo-buttonmash",
      author: "FightMe_Irl",
      message: "Chun-Li is mid tier and you know it",
      createdAt: now,
    },
    {
      id: "gb-4",
      siteId: "demo-rpgman",
      author: "CloudFan2000",
      message: "your FF7 guide saved my playthrough ty!!",
      createdAt: now,
    },
    {
      id: "gb-5",
      siteId: "demo-sakura",
      author: "AnimeLover88",
      message: "your fanfic made me cry at school",
      createdAt: now,
    },
    {
      id: "gb-6",
      siteId: "demo-narutokid",
      author: "Sasuke4Life",
      message: "BELIEVE IT!!! best naruto page on the web",
      createdAt: now,
    },
    {
      id: "gb-7",
      siteId: "demo-midimaniac",
      author: "SoundBlasterPro",
      message: "your all star midi goes HARD on AWE64",
      createdAt: now,
    },
    {
      id: "gb-8",
      siteId: "demo-startrek",
      author: "BonesMcCoy",
      message: "I'm a doctor not a guestbook signer... fine hi",
      createdAt: now,
    },
    {
      id: "gb-9",
      siteId: "demo-spacecadet",
      author: "ArthurDent",
      message: "mostly harmless page 10/10 would hitchhike again",
      createdAt: now,
    },
    {
      id: "gb-10",
      siteId: "demo-subvsdub",
      author: "DubSupremacist",
      message: "dub is superior and I will die on this hill",
      createdAt: now,
    },
    {
      id: "gb-11",
      siteId: "demo-napsterkid",
      author: "RIAA_Lawyer",
      message: "please cease and desist immediately",
      createdAt: now,
    },
    {
      id: "gb-12",
      siteId: "demo-doomgal",
      author: "idSoftwareFan",
      message: "your hell's kitchen WAD is legendary",
      createdAt: now,
    },
  ];
}
