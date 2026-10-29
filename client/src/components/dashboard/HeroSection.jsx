function HeroSection() {
  return (
  <section className="relative isolate flex h-[80vh] min-h-[350px] max-h-[480px] w-full items-center overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,11,18,0.94) 0%, rgba(8,11,18,0.65) 50%, rgba(8,11,18,0.15) 100%)",
        }}
      />

      {/* Bottom fade into the dashboard */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 65%, var(--bg-primary) 100%)",
        }}
      />

      {/* Hero content */}
      <div className="w-full px-8 py-16 sm:px-12 lg:px-16">
        <div className="max-w-3xl">
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            Track · Apply · Progress
          </p>

          <h1
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
            style={{ color: "var(--text-primary)" }}
          >
            Turn Applications
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-sm leading-7 sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Track your job and internship applications, stay on top
            of interviews, and keep moving towards your goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;