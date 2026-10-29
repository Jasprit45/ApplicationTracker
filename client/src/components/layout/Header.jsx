import { ChevronDown } from "lucide-react";

function Header() {
  return (
    <header
      className="flex h-[72px] items-center justify-end border-b px-8"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Profile */}
      <button
        type="button"
        aria-label="Open profile menu"
        className="
          flex items-center gap-2 rounded-xl
          border border-transparent px-3 py-2
          transition-colors duration-200
          hover:border-[var(--border-default)]
        "
        style={{
          color: "var(--text-primary)",
        }}
      >
        {/* Avatar */}
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full text-sm font-semibold
          "
          style={{
            background:
              "linear-gradient(135deg, var(--accent), #5B6CFF)",
            color: "#FFFFFF",
          }}
        >
          JS
        </div>

        <ChevronDown
          size={16}
          strokeWidth={1.8}
          style={{ color: "var(--text-secondary)" }}
        />
      </button>
    </header>
  );
}

export default Header;