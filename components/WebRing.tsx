import Link from "next/link";
import type { WebRing as WebRingType } from "@/lib/types";

interface WebRingProps {
  ring: WebRingType;
}

export function WebRing({ ring }: WebRingProps) {
  return (
    <div className="webring">
      <div className="webring__badge">🔗 WEB RING</div>
      <h4 className="webring__name">{ring.ringName}</h4>
      <p className="webring__count">{ring.members.length} sites in this ring</p>

      <div className="webring__nav">
        {ring.prev && (
          <Link href={`/site/${ring.prev.id}`} className="webring__link">
            ← {ring.prev.username}
          </Link>
        )}
        <span className="webring__divider">|</span>
        {ring.next && (
          <Link href={`/site/${ring.next.id}`} className="webring__link">
            {ring.next.username} →
          </Link>
        )}
      </div>

      <ul className="webring__members">
        {ring.members.map((m) => (
          <li key={m.id}>
            <Link href={`/site/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
