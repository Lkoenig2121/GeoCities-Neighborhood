import { notFound } from "next/navigation";
import Link from "next/link";
import { getNeighborhood, getSite } from "@/lib/api";
import { SiteEditor } from "@/components/SiteEditor";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditSitePage({ params }: PageProps) {
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

  return (
    <div className="edit-page">
      <nav className="retro-nav">
        <Link href={`/site/${site.id}`}>← View Site</Link>
        <Link href={`/neighborhood/${site.neighborhoodId}`}>
          🗺️ Neighborhood Map
        </Link>
      </nav>

      <SiteEditor site={site} neighborhood={neighborhood} />
    </div>
  );
}
