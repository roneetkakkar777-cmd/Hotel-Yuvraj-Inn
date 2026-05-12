import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/rooms", label: "Rooms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/amenities", label: "Amenities" },
  { to: "/location", label: "Location" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Focus trap
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    panel.addEventListener("keydown", handleTab);
    first && first.focus();
    return () => panel.removeEventListener("keydown", handleTab);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A2540]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#1A2540]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="rounded-full h-11 w-11 overflow-hidden ring-2 ring-[#C9973A]/40 group-hover:ring-[#C9973A] transition-all duration-300">
            <img
              src={logo}
              className="h-11 w-11 rounded-full scale-125 object-cover"
              alt="Hotel Yuvraj Inn logo"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold tracking-wide text-sm">Hotel Yuvraj Inn</span>
            <span className="text-[#C9973A] text-[10px] tracking-widest uppercase font-medium">Indirapuram, Ghaziabad</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md group ${
                  isActive ? "text-[#C9973A]" : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#C9973A] rounded-full transition-all duration-300 ${
                      isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919990917830"
            className="flex items-center gap-1.5 text-sm text-[#C9973A] font-medium hover:text-[#E8B84B] transition-colors"
          >
            <PhoneIcon className="h-4 w-4" />
            9990917830
          </a>
          <Link
            to="/contact"
            className="gold-btn inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          ref={btnRef}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Slide-over panel */}
        <aside
          id="mobile-menu"
          ref={panelRef}
          className={`absolute left-0 top-0 h-full w-72 max-w-[85%] bg-[#1A2540] shadow-2xl transform transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="px-4 pt-4 pb-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-[#C9973A]/40">
                <img src={logo} className="h-9 w-9 rounded-full scale-125" alt="Hotel Yuvraj Inn" />
              </div>
              <span className="text-white font-semibold text-sm">Hotel Yuvraj Inn</span>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9973A]/40 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-3 py-4 space-y-1">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#C9973A]/20 text-[#C9973A] border border-[#C9973A]/30"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 space-y-2">
            <a
              href="tel:+919990917830"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#C9973A]/40 text-[#C9973A] text-sm font-medium hover:bg-[#C9973A]/10 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              Call: 9990917830
            </a>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="gold-btn flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
