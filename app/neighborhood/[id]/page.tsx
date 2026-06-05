import Link from "next/link";
import { notFound } from "next/navigation";
import { getNeighborhood } from "@/lib/api";
import { NeighborhoodMapClient } from "./NeighborhoodMapClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { id } = await params;

  let data;
  try {
    data = await getNeighborhood(id);
  } catch {
    notFound();
  }

  return (
    <div className="neighborhood-page">
      <nav className="retro-nav">
        <Link href="/">← All Neighborhoods</Link>
        <Link href={`/neighborhood/${id}/create`} className="retro-btn retro-btn--small">
          🏗️ Build New Site
        </Link>
      </nav>

      <NeighborhoodMapClient neighborhood={data} sites={data.sites} />
    </div>
  );
}
