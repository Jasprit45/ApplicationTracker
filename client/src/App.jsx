import Sidebar from "./components/layout/Sidebar";
import HeroSection from "./components/dashboard/HeroSection";
import AnalyticsSection from "./components/dashboard/AnalyticsSection";
import DashboardActions from "./components/dashboard/DashboardActions";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <Sidebar />

      <main className="ml-[245px] min-h-screen">
        <HeroSection />

        <div className="space-y-5 px-6 py-5 lg:px-8">
          <AnalyticsSection />

          <DashboardActions
            onViewInterviews={() => {
              console.log("Navigate to interviews");
            }}
            onAddApplication={() => {
              console.log("Open application form");
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;