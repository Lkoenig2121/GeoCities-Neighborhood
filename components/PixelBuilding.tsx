import type { BuildingStyle } from "@/lib/types";

interface PixelBuildingProps {
  style: BuildingStyle;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  label?: string;
  selected?: boolean;
  occupied?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export function PixelBuilding({
  style,
  primaryColor,
  secondaryColor,
  accentColor,
  label,
  selected,
  occupied,
  onClick,
  size = "md",
}: PixelBuildingProps) {
  const scale = size === "sm" ? 0.6 : size === "lg" ? 1.2 : 1;
  const Component = onClick ? "button" : "div";

  return (
    <Component
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={`pixel-building pixel-building--${style} ${selected ? "pixel-building--selected" : ""} ${occupied ? "pixel-building--occupied" : ""}`}
      style={
        {
          "--bldg-primary": primaryColor,
          "--bldg-secondary": secondaryColor,
          "--bldg-accent": accentColor,
          transform: `scale(${scale})`,
        } as React.CSSProperties
      }
      title={label}
    >
      <div className="pixel-building__roof" />
      <div className="pixel-building__body">
        <div className="pixel-building__window pixel-building__window--left" />
        <div className="pixel-building__window pixel-building__window--right" />
        <div className="pixel-building__door" />
      </div>
      {label && <div className="pixel-building__label">{label}</div>}
    </Component>
  );
}
