import {Home, FileText, CalendarDays, Building2, ChartNoAxesColumn, BriefcaseBusiness,
   GraduationCap, Settings, Rocket } from "lucide-react";

const mainNavigation = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "Applications",
    icon: FileText,
    path: "/applications",
  },
  {
    label: "Interviews",
    icon: CalendarDays,
    path: "/interviews",
  },
  {
    label: "Companies",
    icon: Building2,
    path: "/companies",
  },
  {
    label: "Analytics",
    icon: ChartNoAxesColumn,
    path: "/analytics",
  },
  {
    label: "Jobs",
    icon: BriefcaseBusiness,
    path: "/jobs",
  },
  {
    label: "Internships",
    icon: GraduationCap,
    path: "/internships",
  },
];

const bottomNavigation = [
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  const activePath = "/";

  return (
    <aside
      className="
        fixed left-0 top-0 z-50
        flex h-screen w-[245px] flex-col
        border-r
      "
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Logo */}
      <div
        className="flex h-[88px] shrink-0 items-center gap-3 px-8"
        style={{
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <Rocket
          size={27}
          strokeWidth={1.8}
          style={{ color: "var(--accent)" }}
        />

        <h1 className="text-xl font-bold tracking-tight">
          <span style={{ color: "var(--text-primary)" }}>
            track
          </span>
          <span style={{ color: "var(--accent)" }}>
            Appli
          </span>
        </h1>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 overflow-y-auto px-5 py-6">
        <div className="space-y-2">
          {mainNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.path;

            return (
              <a
                key={item.path}
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group flex items-center gap-4
                  rounded-xl border px-4 py-3
                  text-sm font-medium
                  transition-colors duration-200
                  ${
                    isActive
                      ? "border-[var(--border-default)]"
                      : "border-transparent"
                  }
                `}
                style={{
                  backgroundColor: isActive
                    ? "var(--bg-card)"
                    : "transparent",

                  color: isActive
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                }}
              >
                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-200 group-hover:scale-105"
                />

                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Settings */}
        <div
          className="mt-7 border-t pt-5"
          style={{
            borderColor: "var(--border-subtle)",
          }}
        >
          {bottomNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.path;

            return (
              <a
                key={item.path}
                href={item.path}
                className="
                  flex items-center gap-4 rounded-xl
                  border border-transparent px-4 py-3
                  text-sm font-medium transition-colors
                "
                style={{
                  backgroundColor: isActive
                    ? "var(--bg-card)"
                    : "transparent",

                  color: isActive
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                }}
              >
                <Icon size={21} strokeWidth={1.8} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Quote card */}
      <div className="shrink-0 p-5">
        <div
          className="relative overflow-hidden rounded-xl border p-5"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <p
            className="relative z-10 text-sm leading-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Consistent effort turns applications into
            opportunities.
          </p>

          <div className="mt-5 flex justify-end">
            <Rocket
              size={21}
              strokeWidth={1.6}
              style={{ color: "var(--accent)" }}
            />
          </div>

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-8 h-24 w-24 rounded-full blur-3xl"
            style={{
              backgroundColor: "var(--accent)",
              opacity: 0.12,
            }}
          />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
