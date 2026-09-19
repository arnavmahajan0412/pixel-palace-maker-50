import { Link } from "@tanstack/react-router";
import { House, MapPin, Menu, MessageCircle, Stamp, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import logoImage from "@/assets/jk-explorer-logo.png";

export function SiteNavigation({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const light = variant === "light";

  return (
    <>
      <header
        className={`relative z-30 border-b ${light ? "border-burgundy/15 bg-paper text-ink" : "border-primary-foreground/15 bg-burgundy-deep text-primary-foreground"}`}
      >
        <div className="mx-auto flex min-h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-10">
          <Link to="/" className="inline-flex" aria-label="J&K Explorer home">
            <img
              src={logoImage}
              alt="J&K Explorer Passport"
              className="h-11 w-28 object-contain brightness-0 invert"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.08em] lg:flex">
            <Link to="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <Link to="/destinations" className="transition-colors hover:text-gold">
              Destinations
            </Link>
            <Link to="/passport-guide" className="transition-colors hover:text-gold">
              Passport Guide
            </Link>
            <Link to="/explore-badges" className="transition-colors hover:text-gold">
              Badges
            </Link>
            <Link to="/about-us" className="transition-colors hover:text-gold">
              About Us
            </Link>
            <a href="/contact-us" className="transition-colors hover:text-gold">
              Contact Us
            </a>
          </nav>

          <a
            href="/#community"
            className={`hidden border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors lg:inline-flex ${light ? "border-burgundy bg-burgundy text-primary-foreground hover:bg-burgundy-deep" : "border-gold/60 text-gold hover:bg-gold hover:text-burgundy-deep"}`}
          >
            Join Community
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className={`border-t px-5 py-4 lg:hidden ${light ? "border-burgundy/15 bg-paper text-ink" : "border-primary-foreground/15 bg-burgundy-deep"}`}
          >
            <div className="grid gap-4 text-sm uppercase tracking-widest">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
              <a href="/destinations" onClick={closeMenu}>
                Destinations
              </a>
              <a href="/passport-guide" onClick={closeMenu}>
                Passport Guide
              </a>
              <a href="/explore-badges" onClick={closeMenu}>
                Explore Badges
              </a>
              <a href="/about-us" onClick={closeMenu}>
                About Us
              </a>
              <a href="/contact-us" onClick={closeMenu}>
                Contact Us
              </a>
              <a href="/#community" onClick={closeMenu}>
                Join Community
              </a>
            </div>
          </nav>
        )}
      </header>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-paper/95 py-2 backdrop-blur-md lg:hidden">
        <MobileLink icon={<House />} label="Home" to="/" />
        <MobileLink icon={<MapPin />} label="Explore" to="/destinations" />
        <MobileLink icon={<Stamp />} label="Passport" to="/passport-guide" />
        <a
          href="/contact-us"
          className="flex flex-col items-center gap-1 py-1 text-[9px] font-semibold text-ink-soft"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Contact</span>
        </a>
      </nav>
    </>
  );
}

function MobileLink({
  icon,
  label,
  to,
}: {
  icon: ReactNode;
  label: string;
  to: "/" | "/destinations" | "/passport-guide";
}) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-1 py-1 text-[9px] font-semibold text-ink-soft"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
