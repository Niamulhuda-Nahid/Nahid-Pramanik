import { cn } from "@/lib/utils";

export default function NavItem({
  item,
  activeSection,
  onNavigate,
  mobile = false,
}) {
  const isActive = activeSection === item.id;

  if (mobile) {
    return (
      <button
        onClick={() => onNavigate(item.id)}
        className={cn(
          "relative w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-all duration-300",
          isActive
            ? "bg-[#4FD1C5]/10 text-[#4FD1C5]"
            : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
        )}
      >
        {item.label}

        {isActive && (
          <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#4FD1C5]" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={() => onNavigate(item.id)}
      className={cn(
        "relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300",
        isActive
          ? "text-[#4FD1C5]"
          : "text-slate-400 hover:text-white"
      )}
    >
      {item.label}

      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 rounded-full bg-[#4FD1C5] transition-all duration-300",
          isActive ? "w-full" : "w-0"
        )}
      />
    </button>
  );
}