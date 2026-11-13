import { Link, NavLink } from "react-router-dom";
import { Globe, ChevronDown, Ticket, LockKeyhole } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useHeritage } from "../../core/context/HeritageContext";
import { t, languageLabels } from "../../core/data/hanoiHeritageSites";
import { usePayment } from "../../core/context/PaymentContext";

const languageOptions = Object.entries(languageLabels);

const formatRemaining = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export default function Header() {
  const { language, setLanguage } = useHeritage();
  const { hasAccess, expiresAt } = usePayment();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const languageRef = useRef(null);
  const labels = t[language] || t.en;
  const links = [
    ["/", labels.navExplore || labels.explore || "Explore"],
["/map", labels.map || "Map"],
     ["/about", labels.about || "About us"],
  ];
  const currentLanguage =
    languageOptions.find(([value]) => value === language)?.[1] || "English";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };
    const onKeyDown = (event) => {
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onOutsideClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onOutsideClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header sticky top-0 z-[9999] bg-white ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="container header-inner">
        <Link
          to="/"
          className="font-extrabold tracking-tight text-lg whitespace-nowrap"
        >
          HANOI<span className="text-gray-400">/</span>HERITAGE
        </Link>
        <nav className="hidden md:flex gap-7 text-sm font-medium header-nav">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "font-bold border-b-2 border-black pb-1"
                  : "text-gray-500 hover:text-black"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative" ref={languageRef}>
            <button
              type="button"
              aria-label={labels.language || "Choose language"}
              aria-expanded={languageOpen}
              onClick={() => {
                setLanguageOpen((value) => !value);
              }}
              className="rounded-full bg-gray-100 hover:bg-gray-200 px-3 py-2 flex items-center gap-2 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              <Globe size={15} />
              <span>{currentLanguage}</span>
              <ChevronDown
                size={13}
                className={
                  languageOpen
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </button>
            {languageOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-40 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg shadow-gray-900/10">
                {languageOptions.map(([value, label]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => {
                      setLanguage(value);
                      setLanguageOpen(false);
                    }}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs transition ${language === value ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {hasAccess ? (
            <span title="Audio pass active – all guides unlocked" className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700"><Ticket size={14} /><span className="hidden sm:inline">Pass ·</span>{formatRemaining(Math.max(0, expiresAt - Date.now()))}</span>
          ) : (
            <Link to="/paywall" className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-slate-800 transition hover:bg-gray-200"><LockKeyhole size={14} /><span className="hidden sm:inline">{labels.getPass || "Get 24h pass"}</span></Link>
          )}

        </div>
      </div>
    </header>
  );
}
