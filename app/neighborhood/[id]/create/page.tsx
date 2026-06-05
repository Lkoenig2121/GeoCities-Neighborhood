import Link from "next/link";
import { notFound } from "next/navigation";
import { getNeighborhood } from "@/lib/api";
import { CreateSiteForm } from "@/components/CreateSiteForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CreateSitePage({ params }: PageProps) {
  const { id } = await params;

  let data;
  try {
    data = await getNeighborhood(id);
  } catch {
    notFound();
  }

  return (
    <div className="create-page">
      <nav className="retro-nav">
        <Link href={`/neighborhood/${id}`}>← Back to Map</Link>
      </nav>

      <header className="create-page__header">
        <h1>
          {data.emoji} Build on {data.name}
        </h1>
        <p>Pick an empty lot, choose your building, and start customizing!</p>
      </header>

      <CreateSiteForm neighborhood={data} existingSites={data.sites} />
    </div>
  );
}
