import { ArrowUpRight } from "lucide-react";

function AnalyticsCard({
  title,
  value,
  icon: Icon,
  accent = "#8175FF",
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group relative flex min-w-0 items-center gap-4
        overflow-hidden rounded-2xl border p-5
        text-left transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg
      "
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-subtle)",
        color: "var(--text-primary)",
      }}
    >
      {/* Icon container */}
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${accent}20`,
          color: accent,
        }}
      >
        {Icon && <Icon size={26} strokeWidth={1.8} />}
      </div>

      {/* Text content */}
      <div className="min-w-0 flex-1">
        <p
          className="text-2xl font-bold tracking-tight"
          style={{ color: accent }}
        >
          {value}
        </p>

        <p
          className="mt-1 text-sm leading-5"
          style={{ color: "var(--text-secondary)" }}
        >
          {title}
        </p>
      </div>

      {/* Hover indicator */}
      <ArrowUpRight
        size={18}
        className="shrink-0 opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        style={{ color: accent }}
      />

      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl opacity-10 transition-opacity duration-200 group-hover:opacity-20"
        style={{ backgroundColor: accent }}
      />
    </button>
  );
}

export default AnalyticsCard;
