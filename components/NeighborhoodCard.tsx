import Link from "next/link";
import type { Neighborhood } from "@/lib/types";

interface NeighborhoodCardProps {
  neighborhood: Neighborhood;
}

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  const { theme } = neighborhood;

  return (
    <Link
      href={`/neighborhood/${neighborhood.id}`}
      className="neighborhood-card"
      style={
        {
          "--card-primary": theme.primaryColor,
          "--card-secondary": theme.secondaryColor,
          "--card-accent": theme.accentColor,
        } as React.CSSProperties
      }
    >
      <div className="neighborhood-card__emoji">{neighborhood.emoji}</div>
      <h2 className="neighborhood-card__name">{neighborhood.name}</h2>
      <p className="neighborhood-card__tagline">{neighborhood.tagline}</p>
      <div className="neighborhood-card__stats">
        {neighborhood.siteCount ?? 0} sites built
      </div>
      <span className="neighborhood-card__cta">Enter Neighborhood →</span>
    </Link>
  );
}
