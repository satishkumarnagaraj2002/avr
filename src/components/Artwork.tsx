type ArtworkProps = {
  variant: "hero" | "dojo" | "founder" | "practice" | "gallery" | "page" | "cta";
  label?: string;
};

export function Artwork({ variant, label }: ArtworkProps) {
  return (
    <div className={`artwork art-${variant}`} aria-hidden="true">
      <span className="artwork-grid" />
      <span className="artwork-sun" />
      <span className="artwork-ring artwork-ring-one" />
      <span className="artwork-ring artwork-ring-two" />
      <span className="artwork-brush artwork-brush-one" />
      <span className="artwork-brush artwork-brush-two" />
      <span className="artwork-stamp">道</span>
      {label && <span className="artwork-label">{label}</span>}
    </div>
  );
}
