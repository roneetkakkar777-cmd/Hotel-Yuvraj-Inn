import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? "text-white" : "text-white/80 hover:text-[#C7A15C]"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Close on route change (optional if using scroll-to-top wrapper)
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  // Basic focus trap when menu is open
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", handleTab);
    first && first.focus();
    return () => panel.removeEventListener("keydown", handleTab);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2F3A56]">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center md:justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex  items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full h-14 w-14 overflow-hidden">
              <img
                src={logo}
                className="h-14 w-14 rounded-full  scale-125"
                alt="Mannat Hotel logo"
              />
            </div>
            <Link
              to="/"
              className="text-[#F7F6F3] font-semibold tracking-wide"
              onClick={closeMenu}
            >
              Mannat Residency Hotel
            </Link>
          </div>
          <div className="right-5 absolute">
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              ref={btnRef}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/rooms" className={linkClass}>
            Rooms
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to="/amenities" className={linkClass}>
            Amenities
          </NavLink>
          <NavLink to="/location" className={linkClass}>
            Location
          </NavLink>
          <NavLink to="/offers" className={linkClass}>
            Offers
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-[#C7A15C] px-3 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Book Now
        </Link>
      </div>

      {/* Mobile drawer + backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Slide-over panel */}
        <aside
          id="mobile-menu"
          ref={panelRef}
          className={`absolute left-0 top-0 h-full w-80 max-w-[85%] bg-[#2F3A56] shadow-xl transform transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <span className="text-white font-semibold">Menu</span>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-2 py-2 space-y-1 flex flex-col items-center text-3xl">
            <NavLink to="/" end className={linkClass} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/rooms" className={linkClass} onClick={closeMenu}>
              Rooms
            </NavLink>
            <NavLink to="/gallery" className={linkClass} onClick={closeMenu}>
              Gallery
            </NavLink>
            <NavLink to="/amenities" className={linkClass} onClick={closeMenu}>
              Amenities
            </NavLink>
            <NavLink to="/location" className={linkClass} onClick={closeMenu}>
              Location
            </NavLink>
            <NavLink to="/offers" className={linkClass} onClick={closeMenu}>
              Offers
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-max md:w-full items-center justify-center rounded-md bg-[#C7A15C] px-3 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Book Now
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}
