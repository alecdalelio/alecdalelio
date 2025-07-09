import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StickyCategoryNavProps {
  sections: { id: string; label: string; icon?: React.ReactNode }[];
}

export default function StickyCategoryNav({ sections }: StickyCategoryNavProps) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      let found = sections[0]?.id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            found = section.id;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-20 z-20 bg-background/80 backdrop-blur border-b border-zinc-800 dark:border-zinc-800 border-zinc-200 dark:border-zinc-800">
      <ul className="flex justify-center gap-4 md:gap-8 py-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`relative px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                active === section.id
                  ? "text-primary"
                  : "text-foreground/60 hover:text-primary"
              }`}
              onClick={() => handleClick(section.id)}
            >
              {section.icon && (
                <span className="inline-block align-middle mr-1">{section.icon}</span>
              )}
              {section.label}
              {active === section.id && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 