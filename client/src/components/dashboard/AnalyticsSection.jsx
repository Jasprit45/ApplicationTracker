import {
  FileText,
  CalendarDays,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import AnalyticsCard from "./AnalyticsCard";

const analytics = [
  {
    title: "Total Applications",
    value: 42,
    icon: FileText,
    accent: "#60A5FA",
  },
  {
    title: "Upcoming Interviews",
    value: 6,
    icon: CalendarDays,
    accent: "#F59E0B",
  },
  {
    title: "Jobs",
    value: 28,
    icon: BriefcaseBusiness,
    accent: "#34D399",
  },
  {
    title: "Internships",
    value: 14,
    icon: GraduationCap,
    accent: "#A78BFA",
  },
];

function AnalyticsSection() {
  return (
    <section
        aria-label="Application analytics"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4"
    >
      {analytics.map((item) => (
        <AnalyticsCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          accent={item.accent}
        />
      ))}
    </section>
  );
}

export default AnalyticsSection;