export interface GifAsset {
  id: string;
  name: string;
  emoji: string;
  animation: string;
}

export const GIF_LIBRARY: GifAsset[] = [
  {
    id: "construction",
    name: "Under Construction",
    emoji: "🚧",
    animation: "bounce",
  },
  {
    id: "new",
    name: "NEW!",
    emoji: "🆕",
    animation: "blink",
  },
  {
    id: "email",
    name: "Email Me",
    emoji: "📧",
    animation: "wiggle",
  },
  {
    id: "heart",
    name: "Beating Heart",
    emoji: "💖",
    animation: "pulse",
  },
  {
    id: "sparkle",
    name: "Sparkles",
    emoji: "✨",
    animation: "spin",
  },
  {
    id: "fire",
    name: "On Fire",
    emoji: "🔥",
    animation: "flicker",
  },
  {
    id: "alien",
    name: "Alien",
    emoji: "👾",
    animation: "bounce",
  },
  {
    id: "skull",
    name: "Cool Skull",
    emoji: "💀",
    animation: "wiggle",
  },
  {
    id: "star",
    name: "Gold Star",
    emoji: "⭐",
    animation: "spin",
  },
  {
    id: "music",
    name: "Now Playing",
    emoji: "🎵",
    animation: "pulse",
  },
  {
    id: "guestbook",
    name: "Sign Guestbook",
    emoji: "📝",
    animation: "blink",
  },
  {
    id: "counter",
    name: "Hit Counter",
    emoji: "🔢",
    animation: "flicker",
  },
];

export function getGifById(id: string): GifAsset | undefined {
  return GIF_LIBRARY.find((g) => g.id === id);
}

export function gifToHtml(id: string): string {
  const gif = getGifById(id);
  if (!gif) return "";
  return `<span class="gif-asset gif-${gif.animation}" title="${gif.name}">${gif.emoji}</span>`;
}
