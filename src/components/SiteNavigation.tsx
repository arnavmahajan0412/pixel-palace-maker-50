import { Link } from "@tanstack/react-router";
import { Compass, House, MapPin, Menu, Stamp, UsersRound, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="relative z-30 border-b border-primary-foreground/15 bg-burgundy-deep text-primary-foreground">
        <div className="mx-auto flex min-h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-10">
          <Link to="/" className="flex items-center gap-2" aria-label="J&K Explorer home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/70 text-gold">
              <Compass className="h-5 w-5" strokeWidth={1.25} />
            </span>
            <span className="leading-none">
              <span className="display-serif block text-lg tracking-wide">J&amp;K Explorer</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                Passport
              </span>
            </span>
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
          </nav>

          <a
            href="/#community"
            className="hidden border border-gold/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold hover:text-burgundy-deep lg:inline-flex"
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
          <nav className="border-t border-primary-foreground/15 bg-burgundy-deep px-5 py-4 lg:hidden">
            <div className="grid gap-4 text-sm uppercase tracking-widest">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/destinations" onClick={closeMenu}>
                Destinations
              </Link>
              <Link to="/passport-guide" onClick={closeMenu}>
                Passport Guide
              </Link>
              <Link to="/explore-badges" onClick={closeMenu}>
                Explore Badges
              </Link>
              <Link to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
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
          href="/#community"
          className="flex flex-col items-center gap-1 py-1 text-[9px] font-semibold text-ink-soft"
        >
          <UsersRound className="h-4 w-4" />
          <span>Community</span>
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
