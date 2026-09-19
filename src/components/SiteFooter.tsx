import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, QrCode, Twitter, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import logoImage from "@/assets/jk-explorer-logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/jkexplorerpassport/";
const X_URL = "https://x.com/jkexplorerp?s=11";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61594089672478";
const YOUTUBE_URL = "https://www.youtube.com/@Jkexplorerpassport";

export function SiteFooter() {
  return (
    <footer className="bg-burgundy-deep px-5 pb-24 pt-10 text-primary-foreground lg:px-10 lg:py-12">
      <div className="mx-auto grid max-w-[1220px] gap-9 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1fr] lg:gap-10">
        <div>
          <Link to="/" className="inline-flex" aria-label="J&K Explorer home">
            <img
              src={logoImage}
              alt="J&K Explorer Passport"
              className="h-12 w-32 object-contain brightness-0 invert"
            />
          </Link>
          <p className="mt-4 max-w-xs text-xs leading-5 text-primary-foreground/65">
            One passport. Endless journeys. A lifetime of memories across Jammu &amp; Kashmir.
          </p>
          <div className="mt-5 flex items-center gap-3 text-primary-foreground/70">
            <SocialLink href={INSTAGRAM_URL} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={FACEBOOK_URL} label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={YOUTUBE_URL} label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={X_URL} label="X">
              <Twitter className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Quick links</p>
          <div className="mt-4 grid gap-2 text-xs text-primary-foreground/70">
            <Link to="/destinations" className="hover:text-gold">
              Destinations
            </Link>
            <Link to="/passport-guide" className="hover:text-gold">
              Passport Guide
            </Link>
            <Link to="/travel-planner" className="hover:text-gold">
              Travel Planner
            </Link>
            <Link to="/journal" className="hover:text-gold">
              Blog
            </Link>
            <a href="/contact-us" className="hover:text-gold">
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Support</p>
          <div className="mt-4 grid gap-2 text-xs text-primary-foreground/70">
            <span>FAQ</span>
            <span>Shipping &amp; Delivery</span>
            <span>Returns</span>
            <span>Terms &amp; Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
            Scan to join
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="grid h-16 w-16 place-items-center bg-paper text-burgundy-deep">
              <QrCode className="h-11 w-11" />
            </span>
            <p className="text-xs leading-5 text-primary-foreground/70">
              Join the Explorer Community
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-9 max-w-[1220px] border-t border-primary-foreground/15 pt-4 text-[9px] uppercase tracking-[0.16em] text-primary-foreground/45">
        © 2026 J&amp;K Explorer Passport · Made for the curious
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="transition-colors hover:text-gold"
    >
      {children}
    </a>
  );
}
