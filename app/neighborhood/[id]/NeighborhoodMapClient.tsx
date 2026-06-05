"use client";

import { useRouter } from "next/navigation";
import type { Neighborhood, Site } from "@/lib/types";
import { PixelMap } from "@/components/PixelMap";

interface NeighborhoodMapClientProps {
  neighborhood: Neighborhood;
  sites: Site[];
}

export function NeighborhoodMapClient({
  neighborhood,
  sites,
}: NeighborhoodMapClientProps) {
  const router = useRouter();

  return (
    <div className="neighborhood-map-view">
      <PixelMap
        neighborhood={neighborhood}
        sites={sites}
        onSiteClick={(site) => router.push(`/site/${site.id}`)}
      />

      <div className="neighborhood-map-view__legend">
        <p>Click any building to visit that site!</p>
        <p>
          Empty lots with <strong>+</strong> are available —{" "}
          <a href={`/neighborhood/${neighborhood.id}/create`}>claim yours</a>
        </p>
      </div>
    </div>
  );
}
