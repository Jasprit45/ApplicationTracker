import { ArrowRight, Plus, CalendarDays } from "lucide-react";

function DashboardActions({
  onViewInterviews,
  onAddApplication,
}) {
  return (
    <section
      aria-label="Dashboard actions"
      className="flex flex-col gap-4 sm:flex-row sm:items-center"
    >
      {/* View interviews */}
      <button
        type="button"
        onClick={onViewInterviews}
        className="
          group inline-flex items-center justify-center gap-3
          rounded-xl border px-5 py-3.5
          text-sm font-semibold
          transition-all duration-200
          hover:-translate-y-0.5
        "
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-default)",
          color: "var(--text-primary)",
        }}
      >
        <CalendarDays
          size={19}
          style={{ color: "var(--accent)" }}
        />

        <span>See All Upcoming Interviews</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>

      {/* Add application */}
      <button
        type="button"
        onClick={onAddApplication}
        className="
          inline-flex items-center justify-center gap-2
          rounded-xl px-5 py-3.5
          text-sm font-semibold text-white
          transition-all duration-200
          hover:-translate-y-0.5 hover:brightness-110
        "
        style={{
          background:
            "linear-gradient(135deg, var(--accent), #5B6CFF)",
          boxShadow: "0 8px 24px rgba(129, 117, 255, 0.18)",
        }}
      >
        <Plus size={19} />

        <span>Add New Application</span>
      </button>
    </section>
  );
}

export default DashboardActions;