"use client";

interface VisitorCounterProps {
  count: number;
}

export function VisitorCounter({ count }: VisitorCounterProps) {
  const digits = String(count).padStart(6, "0").split("");

  return (
    <div className="visitor-counter">
      <div className="visitor-counter__label">You are visitor #</div>
      <div className="visitor-counter__digits">
        {digits.map((digit, i) => (
          <span key={i} className="visitor-counter__digit">
            {digit}
          </span>
        ))}
      </div>
      <div className="visitor-counter__since">since 1996 (probably)</div>
    </div>
  );
}
