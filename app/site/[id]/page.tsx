import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getGuestbook,
  getNeighborhood,
  getSite,
  getWebRing,
} from "@/lib/api";
import { SiteFrame } from "@/components/SiteFrame";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SitePage({ params }: PageProps) {
  const { id } = await params;

  let site;
  try {
    site = await getSite(id);
  } catch {
    notFound();
  }

  let neighborhood;
  try {
    neighborhood = await getNeighborhood(site.neighborhoodId);
  } catch {
    notFound();
  }

  const [guestbook, webring] = await Promise.all([
    getGuestbook(site.id).catch(() => []),
    getWebRing(site.id).catch(() => ({
      ringName: "Web Ring",
      prev: null,
      next: null,
      members: [],
    })),
  ]);

  return (
    <div className="site-page">
      <nav className="retro-nav">
        <Link href={`/neighborhood/${site.neighborhoodId}`}>
          ← {neighborhood.emoji} {neighborhood.name}
        </Link>
      </nav>

      <SiteFrame
        site={site}
        neighborhoodName={neighborhood.name}
        neighborhoodEmoji={neighborhood.emoji}
        guestbook={guestbook}
        webring={webring}
      />
    </div>
  );
}
