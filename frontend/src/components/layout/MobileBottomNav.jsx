import { NavLink } from "react-router-dom";
import { useHeritage } from "../../core/context/HeritageContext";
import { t } from "../../core/data/hanoiHeritageSites";
import { Compass, Map, Info } from "lucide-react";

export default function MobileBottomNav() {
  const { language } = useHeritage();
  const labels = t[language] || t.en;
  const items = [
    ["/", labels.navExplore || labels.explore || "Explore", Compass],
    ["/map", labels.map || "Map", Map],
    ["/about", labels.about || "About", Info],
  ];
  return (
    <nav aria-label="Mobile navigation" className="mobile-bottom-nav md:hidden">
      {items.map(([to, label, Icon]) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `mobile-bottom-nav__item ${isActive ? "is-active" : ""}`}
        >
          <Icon size={19} strokeWidth={2} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
