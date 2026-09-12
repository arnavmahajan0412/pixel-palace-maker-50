import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  Crown,
  Footprints,
  Heart,
  House,
  Instagram,
  ListChecks,
  MapPin,
  Menu,
  Navigation,
  PackageOpen,
  QrCode,
  Search,
  ShieldCheck,
  Stamp,
  TentTree,
  TrainFront,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import heroImage from "@/assets/kashmir-hero.jpg";
import vaishnoImage from "@/assets/vaishno-devi.jpg";
import gulmargImage from "@/assets/gulmarg.jpg";
import dalImage from "@/assets/dal-lake.jpg";
import sonamargImage from "@/assets/sonamarg.jpg";
import pahalgamImage from "@/assets/pahalgam.jpg";
import passportImage from "@/assets/jk-explorer-passport.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J&K Explorer | Discover Jammu & Kashmir" },
      {
        name: "description",
        content:
          "Collect moments, not just memories. Explore Jammu & Kashmir with the J&K Explorer passport.",
      },
      { property: "og:title", content: "J&K Explorer | Discover Jammu & Kashmir" },
      {
        property: "og:description",
        content: "Your passport to the valleys, shrines, lakes and stories of Jammu & Kashmir.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_MESSAGE =
  "Hi J&K Explorer, I'd like to buy the J&K Explorer Passport. Please share the details.";
// Add a business number after wa.me/ to open a direct conversation rather than the WhatsApp picker.
const WHATSAPP_URL = `https://wa.me/?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const MEMBER_KEY = "jk-explorer-member";

type Member = {
  name: string;
  email: string;
  instagram: string;
  phone: string;
  city: string;
  dreamDestination: string;
  dob: string;
  howFound: string;
};

function loadMember(): Member | null {
  try {
    const raw = window.localStorage.getItem(MEMBER_KEY);
    return raw ? (JSON.parse(raw) as Member) : null;
  } catch {
    return null;
  }
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [selected, setSelected] = useState<Destination | null>(null);
  const [joinOpen, setJoinOpen] = useState(false);
  const [member, setMember] = useState<Member | null>(null);
  const [mobileView, setMobileView] = useState<"passport" | "planner" | "badges">("passport");

  useEffect(() => {
    setMember(loadMember());
  }, []);

  const joinCommunity = (m: Member) => {
    window.localStorage.setItem(MEMBER_KEY, JSON.stringify(m));
    setMember(m);
    setJoinOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground paper-texture">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/15 bg-burgundy-deep/90 text-primary-foreground backdrop-blur-sm">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3" aria-label="J&K Explorer home">
            <span className="relative grid h-11 w-11 place-items-center rounded-full border border-gold/70 text-gold">
              <Compass className="h-6 w-6" strokeWidth={1.25} />
              <span className="absolute -bottom-1 bg-burgundy-deep px-1 font-sans text-[8px] font-bold tracking-[0.18em]">
                J&K
              </span>
            </span>
            <span className="leading-none">
              <span className="display-serif block text-[19px] tracking-wide">J&K</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Explorer
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.08em] lg:flex">
            <a href="#home" className="text-gold transition-colors hover:text-primary-foreground">
              Home
            </a>
            <a href="#destinations" className="transition-colors hover:text-gold">
              Destinations
            </a>
            <a href="#passport" className="transition-colors hover:text-gold">
              Passport Guide
            </a>
            <a href="#planner" className="transition-colors hover:text-gold">
              Travel Planner
            </a>
            <a href="#journal" className="transition-colors hover:text-gold">
              Journal
            </a>
            <a href="#about" className="transition-colors hover:text-gold">
              About Us
            </a>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <button
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-gold"
              onClick={() => setRegistered(true)}
            >
              <UserRound className="h-4 w-4" />{" "}
              {registered ? "Passport Active" : "Login / Register"}
            </button>
            <button
              aria-label="Open travel planner"
              className="relative rounded-full p-2 transition-colors hover:bg-primary-foreground/10"
            >
              <PackageOpen className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] font-bold text-burgundy-deep">
                {registered ? "1" : "0"}
              </span>
            </button>
          </div>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-primary-foreground/15 bg-burgundy-deep px-5 py-4 lg:hidden">
            <div className="grid gap-4 text-sm uppercase tracking-widest">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#destinations" onClick={() => setMenuOpen(false)}>
                Destinations
              </a>
              <a
                href="#mobile-explorer"
                onClick={() => {
                  setMobileView("passport");
                  setMenuOpen(false);
                }}
              >
                Passport Guide
              </a>
              <a
                href="#mobile-explorer"
                onClick={() => {
                  setMobileView("planner");
                  setMenuOpen(false);
                }}
              >
                Travel Planner
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Shop / Buy Passport
              </a>
              <button
                type="button"
                className="w-fit text-left"
                onClick={() => {
                  setJoinOpen(true);
                  setMenuOpen(false);
                }}
              >
                Register Yourself
              </button>
              <a
                href="#mobile-explorer"
                onClick={() => {
                  setMobileView("badges");
                  setMenuOpen(false);
                }}
              >
                Explore Badges
              </a>
              <button
                type="button"
                className="w-fit text-left"
                onClick={() => {
                  setJoinOpen(true);
                  setMenuOpen(false);
                }}
              >
                About Us
              </button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative isolate flex min-h-[590px] items-end overflow-hidden bg-burgundy-deep pb-8 pt-28 sm:min-h-[760px] sm:pb-14 sm:pt-32 lg:min-h-[820px] lg:pb-24"
        >
          <img
            src={heroImage}
            alt="Snow-capped Himalayan mountains beside a calm lake in Kashmir"
            width={1600}
            height={960}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-burgundy-deep/90 via-burgundy-deep/50 to-burgundy-deep/10" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-burgundy-deep/75 to-transparent" />
          <img
            src={passportImage}
            alt="J&K Explorer passport"
            width={890}
            height={1360}
            className="hero-passport pointer-events-none absolute bottom-20 right-[-8vw] z-0 w-[43vw] max-w-[440px] object-contain drop-shadow-2xl sm:bottom-14 sm:right-[3%] sm:w-[34vw] lg:bottom-8 lg:right-[7%] lg:w-[29vw]"
          />
          <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 lg:px-10">
            <div className="max-w-2xl">
              <p className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gold sm:mb-5 sm:gap-3 sm:text-[11px] sm:tracking-[0.3em]">
                <span className="h-px w-7 bg-gold sm:w-10" />
                The valley is calling
              </p>
              <h1 className="display-serif max-w-[275px] text-[34px] leading-[0.98] text-primary-foreground sm:max-w-xl sm:text-7xl lg:text-[92px]">
                Explore Jammu & Kashmir{" "}
                <em className="font-normal text-gold">like never before.</em>
              </h1>
              <p className="mt-4 max-w-[250px] text-xs leading-5 text-primary-foreground/80 sm:mt-7 sm:max-w-md sm:text-base sm:leading-7">
                30+ iconic destinations. One passport.
                <br />
                Endless memories waiting to be collected.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-9 sm:gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-burgundy px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-lg transition-colors hover:bg-burgundy/80 sm:gap-2 sm:px-6 sm:py-3 sm:text-xs sm:tracking-[0.14em]"
                >
                  Buy passport <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#destinations"
                  className="flex items-center gap-1.5 border border-primary-foreground/70 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:border-gold hover:text-gold sm:gap-2 sm:px-6 sm:py-3 sm:text-xs sm:tracking-[0.14em]"
                >
                  Explore destinations <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mt-8 hidden items-center gap-3 text-xs text-primary-foreground/70 sm:mt-16 sm:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-primary-foreground/40">
                ↓
              </span>
              <span className="uppercase tracking-[0.2em]">Begin your journey</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-paper px-5 py-7 lg:px-10">
          <div className="mx-auto grid max-w-[1220px] grid-cols-2 gap-y-7 sm:grid-cols-4 lg:grid-cols-4 lg:gap-5">
            <Feature icon={<Compass />} title="30+" label="Handpicked destinations" />
            <Feature icon={<Stamp />} title="Collect" label="Stamps at each location" />
            <Feature icon={<QrCode />} title="Scan QR code" label="Get complete details" />
            <Feature icon={<Award />} title="Track your journey" label="Earn explorer badges" />
          </div>
        </section>

        <section
          id="destinations"
          className="mx-auto max-w-[1380px] scroll-mt-20 px-5 py-20 lg:px-10 lg:py-28"
        >
          <SectionHeading
            eyebrow="Your next chapter"
            title="Popular destinations"
            action="View all destinations"
            actionHref="/destinations"
          />
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-soft">
            Start with the valley’s essentials, then explore the complete collection of 30+ places,
            trails, shrines and city stories.
          </p>
          <div className="mt-8">
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden"
              aria-label="Featured destinations"
            >
              {popularDestinations.map((destination) => (
                <DestinationCard
                  key={destination.name}
                  destination={destination}
                  onSelect={setSelected}
                  compact
                />
              ))}
              <Link
                to="/destinations"
                className="group flex aspect-[1.05] flex-col items-start justify-end overflow-hidden rounded-sm bg-burgundy-deep p-4 text-primary-foreground shadow-sm"
              >
                <span className="mb-auto grid h-9 w-9 place-items-center rounded-full border border-gold/60 text-gold transition-transform group-hover:scale-110">
                  <Compass className="h-4 w-4" />
                </span>
                <span className="display-serif text-xl leading-tight">All 30+ destinations</span>
                <span className="mt-2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gold">
                  Explore the map <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="destination-carousel" aria-label="Popular destinations carousel">
                <div className="destination-carousel-track">
                  {[...popularDestinations, ...popularDestinations].map((destination, index) => (
                    <DestinationCard
                      key={`${destination.name}-${index}`}
                      destination={destination}
                      onSelect={setSelected}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {selected && (
            <DestinationSpotlight destination={selected} onClose={() => setSelected(null)} />
          )}
        </section>

        <section className="border-y border-border bg-paper-deep px-5 py-8 lg:hidden">
          <ExplorerBadges registered={registered} />
        </section>

        <MobileExplorerExperience
          activeView={mobileView}
          onViewChange={setMobileView}
          registered={registered}
          onStart={() => setRegistered(true)}
        />

        <section className="hidden border-y border-border bg-paper-deep px-5 py-12 lg:block lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-[1220px] gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <CommunityPanel member={member} onJoin={() => setJoinOpen(true)} />
            <ExplorerBadges registered={registered} />
          </div>
        </section>

        <section
          id="passport"
          className="hidden scroll-mt-20 bg-burgundy-deep px-5 py-14 text-primary-foreground lg:block lg:px-10"
        >
          <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
                Your journey begins
              </p>
              <h2 className="display-serif mt-2 max-w-xl text-4xl leading-tight sm:text-5xl">
                Every valley has a story. Start yours today.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/70">
                Collect stamps across Jammu & Kashmir, track your progress, and let your explorer
                story unfold one destination at a time.
              </p>
              <button
                onClick={() => setRegistered(!registered)}
                className="mt-7 inline-flex items-center gap-2 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-burgundy-deep transition-colors hover:bg-gold-soft"
              >
                {registered ? (
                  <>
                    <Check className="h-4 w-4" /> Journey started
                  </>
                ) : (
                  <>
                    Start my journey <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            <div className="flex w-full max-w-lg items-center gap-6 border-t border-primary-foreground/20 pt-7 lg:w-[480px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="relative grid h-32 w-32 shrink-0 place-items-center rounded-full border border-gold/70">
                <div className="absolute inset-2 rounded-full border border-gold/30" />
                <span className="display-serif text-3xl text-gold">
                  {registered ? "1/38" : "0/38"}
                </span>
                <span className="absolute bottom-4 text-[8px] uppercase tracking-widest text-primary-foreground/60">
                  destinations
                </span>
              </div>
              <div>
                <p className="text-2xl font-semibold">
                  {registered ? "Welcome, Explorer" : "Your journey awaits"}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/60">
                  {registered ? "Vaishno Devi is your first stop." : "One map. Endless memories."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="planner"
          className="hidden mx-auto max-w-[1220px] scroll-mt-20 px-5 py-20 lg:block lg:px-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-burgundy">
                Plan the feeling
              </p>
              <h2 className="display-serif mt-3 max-w-xl text-5xl leading-[1.02] text-ink">
                More than a trip.
                <br />
                <span className="text-burgundy">A collection of moments.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-ink-soft">
                From the quiet shores of Dal Lake to the warm lights of Vaishno Devi, build a
                journey that stays with you long after you return.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <PlanItem
                  icon={<TrainFront />}
                  title="How to reach"
                  text="Road, rail & air guides"
                />
                <PlanItem icon={<TentTree />} title="Stay awhile" text="Handpicked stays" />
                <PlanItem icon={<CalendarDays />} title="When to go" text="Seasonal travel notes" />
                <PlanItem icon={<ShieldCheck />} title="Travel smart" text="Local tips & safety" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm bg-burgundy-deep p-8 text-primary-foreground shadow-xl sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full border border-gold/30" />
              <div className="absolute right-7 top-7 h-24 w-24 rounded-full border border-gold/30" />
              <Crown className="h-10 w-10 text-gold" strokeWidth={1.25} />
              <h3 className="display-serif mt-8 text-3xl">
                Earn your way
                <br />
                to Gold.
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/70">
                Every destination brings you closer to your next badge.
              </p>
              <div className="mt-10">
                <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>Bronze Explorer</span>
                  <span className="text-gold">7 / 10</span>
                </div>
                <div className="h-1 bg-primary-foreground/20">
                  <div className="h-full w-[70%] bg-gold" />
                </div>
              </div>
              <a
                href="#explorer-badges"
                className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-gold-soft"
              >
                View explorer badges <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="journal"
          className="hidden border-t border-border bg-paper-deep px-5 py-16 lg:block lg:px-10"
        >
          <div className="mx-auto max-w-[1220px]">
            <SectionHeading
              eyebrow="From the journal"
              title="Stories from the road"
              action="Read the journal"
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Article
                image={dalImage}
                category="A slow morning"
                title="The many moods of Dal Lake"
              />
              <Article image={pahalgamImage} category="Local notes" title="A weekend in Pahalgam" />
              <Article
                image={vaishnoImage}
                category="Travel well"
                title="Finding stillness at Vaishno Devi"
              />
            </div>
          </div>
        </section>
      </main>
      <footer
        id="about"
        className="hidden bg-burgundy-deep px-5 py-12 text-primary-foreground lg:block lg:px-10"
      >
        <div className="mx-auto flex max-w-[1220px] flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/70 text-gold">
                <Compass className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="display-serif block text-lg">J&K Explorer</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-gold">
                  Explore · Stamp · Remember
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-xs leading-5 text-primary-foreground/55">
              One passport. Endless journeys.
              <br />A lifetime of memories.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/60">
            <a href="#destinations" className="hover:text-gold">
              Destinations
            </a>
            <a href="#passport" className="hover:text-gold">
              Passport
            </a>
            <a href="#about" className="hover:text-gold">
              About
            </a>
            <Instagram className="h-4 w-4 hover:text-gold" />
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1220px] border-t border-primary-foreground/15 pt-5 text-[10px] uppercase tracking-widest text-primary-foreground/40">
          © 2026 J&K Explorer · Made for the curious
        </div>
      </footer>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-paper/95 py-2 backdrop-blur-md lg:hidden">
        <MobileNav icon={<House />} label="Home" href="#home" />
        <MobileNav icon={<Navigation />} label="Explore" href="#destinations" />
        <MobileNav
          icon={<Stamp />}
          label="Passport"
          href="#mobile-explorer"
          onClick={() => setMobileView("passport")}
        />
        <MobileNav
          icon={<UsersRound />}
          label="Journey"
          href="#mobile-explorer"
          onClick={() => setMobileView("badges")}
        />
      </nav>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center gap-3 overflow-hidden rounded-full border border-gold/40 bg-burgundy-deep py-2 pl-2 shadow-2xl transition-all duration-300 hover:w-auto hover:pr-5 hover:border-gold active:scale-95 lg:bottom-6 lg:right-6"
      >
        <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold shadow-inner">
          <svg
            className="h-7 w-7 text-burgundy-deep"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.972 11.972 0 001.605 6.057L0 24l6.132-1.61a11.874 11.874 0 005.914 1.586h.005c6.637 0 12.032-5.391 12.035-12.031A11.83 11.83 0 0020.465 3.488z" />
          </svg>
          <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-25" />
        </div>
        <div className="flex flex-col whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80">
            Concierge
          </span>
          <span className="font-display -mt-0.5 text-base font-semibold text-primary-foreground">
            Plan Your Journey
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute top-0 h-full w-1/2 -skew-x-12 bg-primary-foreground/10 transition-all duration-1000 ease-in-out -left-1/2 group-hover:left-full" />
        </div>
      </a>
      {joinOpen && (
        <JoinModal onClose={() => setJoinOpen(false)} onJoin={joinCommunity} existing={member} />
      )}
    </div>
  );
}

function MobileExplorerExperience({
  activeView,
  onViewChange,
  registered,
  onStart,
}: {
  activeView: "passport" | "planner" | "badges";
  onViewChange: (view: "passport" | "planner" | "badges") => void;
  registered: boolean;
  onStart: () => void;
}) {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [marked, setMarked] = useState<string[]>(registered ? ["Vaishno Devi"] : []);
  const completed = marked.length;
  const toggleMarked = (name: string) =>
    setMarked((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );

  return (
    <section id="mobile-explorer" className="bg-paper-deep pb-24 lg:hidden">
      {activeView === "passport" && (
        <>
          <div className="relative isolate overflow-hidden bg-burgundy-deep px-5 pb-7 pt-10 text-primary-foreground">
            <img
              src={heroImage}
              alt=""
              className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 -z-10 bg-burgundy-deep/65" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
              J&K Explorer
            </p>
            <h2 className="display-serif mt-2 text-4xl">Passport Guide</h2>
            <p className="mt-2 max-w-xs text-xs leading-5 text-primary-foreground/80">
              Your guide to making the most of your J&K Explorer Passport.
            </p>
          </div>
          <div className="mx-4 -mt-2 rounded-t-lg bg-paper p-4 shadow-lg">
            <h3 className="display-serif text-xl text-ink">How Your Passport Works</h3>
            <div className="mt-3 space-y-2">
              {[
                [
                  "01",
                  "Get Your Passport",
                  "Purchase your J&K Explorer Passport and begin your journey.",
                ],
                [
                  "02",
                  "Choose a Destination",
                  "Explore the destinations featured in your passport.",
                ],
                [
                  "03",
                  "Visit & Explore",
                  "Experience the place, capture your memories and discover more.",
                ],
                [
                  "04",
                  "Collect Your Stamp",
                  "Mark the destination in your passport after visiting.",
                ],
                [
                  "05",
                  "Unlock Explorer Badges",
                  "Complete destinations and progress from Bronze to Silver to Gold.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex gap-3 rounded-md border border-border bg-background p-3"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-gold">
                    {number}
                  </span>
                  <span>
                    <strong className="block text-xs text-ink">{title}</strong>
                    <span className="mt-0.5 block text-[10px] leading-4 text-ink-soft">{text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-4 mt-4 rounded-lg bg-paper p-4 shadow-sm">
            <h3 className="display-serif text-xl text-ink">What&apos;s Inside Your Passport?</h3>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <MobileFeature
                icon={<BookOpen />}
                title="Destination Pages"
                text="Details for each location"
              />
              <MobileFeature
                icon={<MapPin />}
                title="Location Info"
                text="History, culture, travel tips"
              />
              <MobileFeature icon={<Stamp />} title="Destination Stamps" text="Mark your visits" />
              <MobileFeature
                icon={<ListChecks />}
                title="Travel Notes"
                text="Write your experiences"
              />
              <MobileFeature icon={<Heart />} title="Memory Notes" text="Add photos and memories" />
              <MobileFeature
                icon={<Award />}
                title="Explorer Badges"
                text="Earn badges as you explore"
              />
            </div>
          </div>
          <div className="relative isolate mx-4 mt-4 min-h-[285px] overflow-hidden rounded-lg bg-paper shadow-sm">
            <img
              src={heroImage}
              alt="Kashmir mountains"
              className="absolute inset-x-0 bottom-0 -z-20 h-[158px] w-full object-cover object-bottom"
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-[185px] bg-gradient-to-t from-burgundy-deep/60 via-burgundy-deep/10 to-paper" />
            <div className="relative p-4 pb-8">
              <div className="mx-auto flex max-w-[220px] items-center gap-3 text-burgundy">
                <span className="h-px flex-1 bg-border" />
                <span className="grid h-9 w-9 place-items-center rounded-full border border-burgundy/35 bg-paper-deep">
                  <Compass className="h-4 w-4" />
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="display-serif mt-2 text-center text-xl text-ink">Travel Progress</h3>
              <p className="mx-auto mt-1 max-w-[220px] text-center text-[10px] leading-4 text-ink-soft">
                Track your journey and see how far you&apos;ve come.
              </p>
            </div>
            <div className="relative mt-12 rounded-md border border-border/80 bg-paper/95 p-4 shadow-sm backdrop-blur-[2px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
                Important Note
              </p>
              <div className="mt-3 flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper-deep text-burgundy">
                  <CircleHelp className="h-4 w-4" />
                </span>
                <p className="text-[10px] leading-4 text-ink-soft">
                  Your J&K Explorer Passport is a travel keepsake, not an official government
                  document, visa, identification document, or travel authorization.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-4 mt-4 rounded-lg bg-paper p-4 shadow-sm">
            <h3 className="display-serif text-xl text-ink">Frequently Asked Questions</h3>
            <div className="mt-3 divide-y divide-border rounded-md border border-border">
              {[
                [
                  "Is J&K Explorer Passport an official passport?",
                  "No. It is a travel keepsake and exploration-themed product.",
                ],
                [
                  "How do I earn badges?",
                  "Explore destinations and collect the corresponding stamps.",
                ],
                [
                  "Can I use the passport without the website?",
                  "Absolutely. The physical passport is designed to be enjoyed independently.",
                ],
              ].map(([question, answer], index) => (
                <button
                  key={question}
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full p-3 text-left"
                >
                  <span className="flex items-center justify-between gap-3 text-xs font-bold text-ink">
                    {question}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${faqOpen === index ? "rotate-180" : ""}`}
                    />
                  </span>
                  {faqOpen === index && (
                    <span className="mt-2 block text-[10px] leading-4 text-ink-soft">{answer}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="relative mx-4 mt-4 h-44 overflow-hidden rounded-lg bg-burgundy-deep shadow-sm">
            <img
              src={gulmargImage}
              alt="Snow-covered Gulmarg mountains"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 via-burgundy-deep/35 to-burgundy-deep/5" />
            <div className="absolute bottom-5 left-0 right-0 text-center text-primary-foreground">
              <span className="mx-auto mb-2 block h-px w-8 bg-gold/70" />
              <p className="display-serif px-8 text-[25px] italic leading-[0.9] tracking-wide drop-shadow-md">
                Collect moments,
                <br />
                not things.
              </p>
            </div>
          </div>
        </>
      )}

      {activeView === "planner" && (
        <div className="px-4 pt-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel planner
          </p>
          <h2 className="display-serif mt-1 text-3xl text-ink">Plan Your Kashmir Journey</h2>
          <p className="mt-1 text-xs text-ink-soft">
            Build your own adventure across Jammu & Kashmir.
          </p>
          <h3 className="mt-6 text-xs font-bold text-ink">1. Choose Your Travel Style</h3>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["Adventure", gulmargImage],
              ["Nature & Lakes", dalImage],
              ["Spiritual Journey", vaishnoImage],
              ["Photography", sonamargImage],
              ["Family Trip", pahalgamImage],
              ["Romantic Escape", heroImage],
            ].map(([name, image]) => (
              <button
                key={name}
                className="relative aspect-square overflow-hidden rounded-md text-left"
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-burgundy-deep/40" />
                <span className="absolute bottom-1 left-1 right-1 text-center text-[9px] font-bold leading-3 text-primary-foreground">
                  {name}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-7 flex items-center justify-between">
            <h3 className="text-xs font-bold text-ink">2. Popular Destinations</h3>
            <button
              onClick={() => onViewChange("badges")}
              className="text-[10px] font-bold text-burgundy"
            >
              View all →
            </button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {popularDestinations.slice(0, 3).map((destination) => (
              <div
                key={destination.name}
                className="overflow-hidden rounded-md border border-border bg-paper"
              >
                <img src={destination.image} alt="" className="aspect-square w-full object-cover" />
                <p className="px-2 pt-1 text-[9px] font-bold text-ink">{destination.name}</p>
                <button className="m-2 w-[calc(100%-1rem)] bg-burgundy py-1.5 text-[9px] font-bold text-primary-foreground">
                  + Add
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => onViewChange("badges")}
            className="mt-6 w-full bg-burgundy py-3 text-[10px] font-bold uppercase tracking-widest text-primary-foreground"
          >
            Save Journey
          </button>
        </div>
      )}

      {activeView === "badges" && (
        <div className="px-4 pt-6">
          <div className="relative overflow-hidden rounded-lg bg-burgundy-deep p-5 text-primary-foreground">
            <img
              src={heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">
                Explore badges
              </p>
              <h2 className="display-serif mt-2 text-3xl">Explore. Discover. Achieve.</h2>
              <p className="mt-2 text-xs leading-5 text-primary-foreground/75">
                Every journey brings you one step closer to becoming a legendary J&K Explorer.
              </p>
            </div>
          </div>
          <div className="rounded-b-lg bg-paper p-4 shadow-sm">
            <h3 className="display-serif text-xl text-ink">Your Explorer Progress</h3>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-gold"
                  style={{ width: `${Math.min((completed / 30) * 100, 100)}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-burgundy">{completed}/30</span>
            </div>
            <button
              onClick={onStart}
              className="mt-5 w-full bg-burgundy py-3 text-[10px] font-bold uppercase tracking-widest text-primary-foreground"
            >
              {registered ? "Journey Active" : "Start Tracking"}
            </button>
          </div>
          <div className="mt-4 rounded-lg bg-paper p-4 shadow-sm">
            <h3 className="display-serif text-xl text-ink">Mark Your Destinations</h3>
            <div className="mt-3 flex items-center gap-2 border border-border px-3 py-2 text-xs text-ink-soft">
              <Search className="h-4 w-4" />
              Search destinations...
            </div>
            <div className="mt-3 space-y-2">
              {[
                "Vaishno Devi",
                "Gulmarg",
                "Dal Lake",
                "Pahalgam",
                "Sonamarg",
                "Patnitop",
                "Doodpathri",
                "Betaab Valley",
              ].map((name) => (
                <label key={name} className="flex items-center gap-3 text-xs text-ink">
                  <input
                    type="checkbox"
                    checked={marked.includes(name)}
                    onChange={() => toggleMarked(name)}
                    className="accent-burgundy"
                  />
                  {name}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <ExplorerBadges registered={registered} />
          </div>
        </div>
      )}
    </section>
  );
}

function MobileFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-md bg-background p-2 text-ink">
      <span className="mx-auto grid h-8 w-8 place-items-center text-burgundy">{icon}</span>
      <strong className="mt-1 block text-[9px] leading-3">{title}</strong>
      <span className="mt-1 block text-[8px] leading-3 text-ink-soft">{text}</span>
    </div>
  );
}

function JoinModal({
  onClose,
  onJoin,
  existing,
}: {
  onClose: () => void;
  onJoin: (m: Member) => void;
  existing: Member | null;
}) {
  const [name, setName] = useState(existing?.name ?? "");
  const [email, setEmail] = useState(existing?.email ?? "");
  const [instagram, setInstagram] = useState(existing?.instagram ?? "");
  const [phone, setPhone] = useState(existing?.phone ?? "");
  const [city, setCity] = useState(existing?.city ?? "");
  const [dreamDestination, setDreamDestination] = useState(existing?.dreamDestination ?? "");
  const [dob, setDob] = useState(existing?.dob ?? "");
  const [howFound, setHowFound] = useState(existing?.howFound ?? "");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = {
      name: name.trim().slice(0, 60),
      email: email.trim().slice(0, 120),
      instagram: instagram.trim().slice(0, 60),
      phone: phone.trim().slice(0, 20),
      city: city.trim().slice(0, 60),
      dreamDestination: dreamDestination.trim().slice(0, 100),
      dob: dob.trim().slice(0, 10),
      howFound: howFound.trim().slice(0, 40),
    };
    if (!clean.name) return setError("Please tell us your name.");
    if (!clean.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email))
      return setError("Enter a valid email address.");
    if (!/^[0-9+\-\s]{8,15}$/.test(clean.phone)) return setError("Enter a valid phone number.");
    if (!clean.city) return setError("Please add the city you belong to.");
    if (!clean.dreamDestination) return setError("Tell us your dream destination.");
    if (!clean.dob) return setError("Please add your date of birth.");
    if (!clean.howFound) return setError("Please tell us how you found us.");
    onJoin(clean);
  };

  const inputCls =
    "w-full border border-border bg-background px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-burgundy";

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-burgundy-deep/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
        className="w-full max-w-md border border-border bg-paper p-7 shadow-2xl sm:p-9"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-burgundy">
              Explorer community
            </p>
            <h3 className="display-serif mt-1.5 text-3xl text-ink">Join the journey</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1 text-ink-soft transition-colors hover:text-burgundy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              Full name *
            </span>
            <input
              className={inputCls}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Asha Verma"
              maxLength={60}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              Email ID *
            </span>
            <input
              className={inputCls}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              maxLength={120}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              Instagram handle
            </span>
            <input
              className={inputCls}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="@yourhandle"
              maxLength={60}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              Phone number *
            </span>
            <input
              className={inputCls}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              maxLength={20}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              City you belong to *
            </span>
            <input
              className={inputCls}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Srinagar"
              maxLength={60}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              Dream destination *
            </span>
            <input
              className={inputCls}
              value={dreamDestination}
              onChange={(e) => setDreamDestination(e.target.value)}
              placeholder="Gurez Valley"
              maxLength={100}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              Date of birth *
            </span>
            <input
              className={inputCls}
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink-soft">
              How did you find us? *
            </span>
            <select
              className={inputCls}
              value={howFound}
              onChange={(e) => setHowFound(e.target.value)}
            >
              <option value="">Choose one</option>
              <option value="Instagram">Instagram</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Friend or family">Friend or family</option>
              <option value="Search">Search</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        {error && <p className="mt-4 text-xs font-semibold text-burgundy">{error}</p>}
        <button
          type="submit"
          className="mt-7 flex w-full items-center justify-center gap-2 bg-burgundy px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-burgundy-deep"
        >
          Join the community <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-center text-[10px] text-ink-soft/70">
          Your details stay on this device — no account needed.
        </p>
      </form>
    </div>
  );
}

export type Destination = {
  name: string;
  place: string;
  image: string;
  description: string;
  time: string;
};
export const destinations: Destination[] = [
  {
    name: "Vaishno Devi",
    place: "Katra",
    image: vaishnoImage,
    description:
      "A revered shrine in the Trikuta Mountains, wrapped in quiet devotion and breathtaking views.",
    time: "Mar – Oct",
  },
  {
    name: "Patnitop",
    place: "Ramban",
    image: sonamargImage,
    description: "A pine-fringed hill station for crisp air, long walks and winter escapes.",
    time: "Apr – Jun",
  },
  {
    name: "Mansar Lake (Surinsar)",
    place: "Jammu",
    image: dalImage,
    description: "Sacred twin lakes surrounded by forest, folklore and peaceful lakeside paths.",
    time: "Mar – Jun",
  },
  {
    name: "Dal Lake (Shankaracharya)",
    place: "Srinagar",
    image: dalImage,
    description: "Shikaras, houseboats and the hilltop Shankaracharya view over Srinagar.",
    time: "Apr – Oct",
  },
  {
    name: "Mughal Gardens",
    place: "Srinagar",
    image: pahalgamImage,
    description: "Terraced gardens, spring water and centuries of Mughal design beside Dal Lake.",
    time: "Mar – Jun",
  },
  {
    name: "Gulmarg",
    place: "Baramulla",
    image: gulmargImage,
    description: "A meadow of flowers in summer and a snow-draped playground in winter.",
    time: "Dec – Feb",
  },
  {
    name: "Sonamarg",
    place: "Ganderbal",
    image: sonamargImage,
    description: "The meadow of gold: glacier-fed rivers, alpine trails and wide-open skies.",
    time: "May – Sep",
  },
  {
    name: "Pahalgam",
    place: "Anantnag",
    image: pahalgamImage,
    description: "A river valley of pine forests, wooden cabins and unhurried mountain days.",
    time: "Apr – Nov",
  },
  {
    name: "Gurez Valley",
    place: "Bandipora",
    image: sonamargImage,
    description: "A remote valley of wooden homes, rushing rivers and wide Himalayan skies.",
    time: "May – Sep",
  },
  {
    name: "Peer Ki Gali",
    place: "Mughal Road",
    image: gulmargImage,
    description: "A high mountain pass where the Mughal Road opens into sweeping alpine views.",
    time: "May – Oct",
  },
  {
    name: "Bhaderwah (Jai & Chinta Valleys)",
    place: "Doda",
    image: pahalgamImage,
    description: "Green valleys, cedar forests and quiet mountain villages in the Chenab region.",
    time: "Apr – Oct",
  },
  {
    name: "Paddar (Machail Mata)",
    place: "Kishtwar",
    image: sonamargImage,
    description:
      "A dramatic pilgrimage route through high valleys to the revered Machail Mata shrine.",
    time: "Jul – Sep",
  },
  {
    name: "Bawa Wali Mata & Jammu City Walk",
    place: "Jammu",
    image: vaishnoImage,
    description: "Temple bells, Gondola views, Aquarium, Bagh-e-Bahu, Hari Niwas Palace and Manda.",
    time: "Oct – Mar",
  },
  {
    name: "Warwan Valley",
    place: "Kishtwar",
    image: sonamargImage,
    description: "A hidden valley of meadows, glaciers and villages for the adventurous traveller.",
    time: "Jun – Sep",
  },
  {
    name: "Doodpathri",
    place: "Budgam",
    image: pahalgamImage,
    description:
      "A meadowland of silver streams, wildflowers and slow afternoons in the mountains.",
    time: "May – Oct",
  },
  {
    name: "Sarthal Valley (Bani, Basohli)",
    place: "Kathua",
    image: gulmargImage,
    description: "Forest roads, hill meadows and the art-rich landscapes around Bani and Basohli.",
    time: "Apr – Oct",
  },
  {
    name: "Verinag",
    place: "Anantnag",
    image: dalImage,
    description: "A spring of clear blue water framed by an elegant Mughal-era garden.",
    time: "Mar – Oct",
  },
  {
    name: "Sanasar",
    place: "Ramban",
    image: sonamargImage,
    description: "A peaceful cup-shaped meadow for paragliding, camping and cedar-scented walks.",
    time: "Apr – Jun",
  },
  {
    name: "Shiv Khori",
    place: "Reasi",
    image: vaishnoImage,
    description:
      "A sacred cave shrine with a naturally formed lingam and a memorable forest approach.",
    time: "Feb – Apr",
  },
  {
    name: "Aharbal Waterfall",
    place: "Kulgam",
    image: pahalgamImage,
    description: "The roaring Niagara of Kashmir, tucked among pine forests and mountain streams.",
    time: "Apr – Oct",
  },
  {
    name: "Darhal Waterfall & Shadra Sharief",
    place: "Rajouri",
    image: sonamargImage,
    description: "Noori Chamb waterfall and the spiritual calm of Shadra Sharief in one journey.",
    time: "Apr – Oct",
  },
  {
    name: "Surinsar Lake",
    place: "Jammu",
    image: dalImage,
    description: "A tranquil forest lake for birdwatching, picnics and unhurried mornings.",
    time: "Mar – Jun",
  },
  {
    name: "Tulip Garden (Seasonal)",
    place: "Srinagar",
    image: gulmargImage,
    description: "Rows of colour at Asia's largest tulip garden beneath the Zabarwan range.",
    time: "Mar – Apr",
  },
  {
    name: "Purthu",
    place: "Doda",
    image: pahalgamImage,
    description: "An open highland escape where mountain air and meadow views set the pace.",
    time: "May – Oct",
  },
  {
    name: "Sudh Mahadev Temple",
    place: "Chenani",
    image: vaishnoImage,
    description: "An ancient hill temple surrounded by pine forests, legend and quiet devotion.",
    time: "Apr – Oct",
  },
  {
    name: "Srinagar City Walk",
    place: "Srinagar",
    image: dalImage,
    description: "Lal Chowk, Hazratbal, Sunday Market and the everyday stories of the city.",
    time: "Apr – Oct",
  },
  {
    name: "Dudu Valley",
    place: "Udhampur",
    image: sonamargImage,
    description: "A lesser-known valley of streams, villages and green mountain roads.",
    time: "Apr – Oct",
  },
  {
    name: "Bangus Valley",
    place: "Kupwara",
    image: gulmargImage,
    description: "A vast meadow basin of wildflowers, forest trails and open northern horizons.",
    time: "May – Sep",
  },
  {
    name: "Yusmarg",
    place: "Budgam",
    image: pahalgamImage,
    description: "A quiet meadow retreat of tall deodars, pony trails and river-side picnics.",
    time: "Apr – Oct",
  },
  {
    name: "Amarnath Yatra (Seasonal)",
    place: "Pahalgam / Baltal",
    image: vaishnoImage,
    description: "A seasonal pilgrimage through high-altitude landscapes to the holy cave.",
    time: "Jul – Aug",
  },
  {
    name: "Chinka Valley",
    place: "Doda",
    image: sonamargImage,
    description: "A mountain valley of clear air, forest edges and peaceful rural trails.",
    time: "Apr – Oct",
  },
  {
    name: "Keran Border",
    place: "Kupwara",
    image: gulmargImage,
    description: "A scenic border village journey through green valleys and the Kishanganga river.",
    time: "May – Sep",
  },
  {
    name: "Suchetgarh Border",
    place: "Jammu",
    image: vaishnoImage,
    description: "A frontier experience with wide fields, local history and an evening retreat.",
    time: "Oct – Mar",
  },
  {
    name: "Panchari",
    place: "Udhampur",
    image: pahalgamImage,
    description: "A forested hill escape with village life, fresh streams and slow mountain days.",
    time: "Apr – Oct",
  },
  {
    name: "Kailash Kund",
    place: "Doda",
    image: sonamargImage,
    description:
      "A high-altitude lake trek for pilgrims and hikers seeking a true mountain challenge.",
    time: "Aug – Sep",
  },
  {
    name: "Devi Pindi Trek & Mandir",
    place: "Jammu",
    image: vaishnoImage,
    description: "A beautiful forest trek leading to a peaceful hill shrine and local traditions.",
    time: "Oct – Mar",
  },
  {
    name: "Deva Mai",
    place: "Katra",
    image: vaishnoImage,
    description: "A serene hilltop temple trail with sweeping views and a deeply local spirit.",
    time: "Mar – Oct",
  },
  {
    name: "Sukrala Mata Mandir",
    place: "Billawar",
    image: gulmargImage,
    description: "A revered hill shrine wrapped in forest, faith and panoramic foothill views.",
    time: "Mar – Oct",
  },
];

const popularDestinationNames = [
  "Vaishno Devi",
  "Gulmarg",
  "Dal Lake (Shankaracharya)",
  "Sonamarg",
  "Pahalgam",
];
const popularDestinations = popularDestinationNames.map((name) => {
  const destination = destinations.find((item) => item.name === name);
  if (!destination) throw new Error(`Missing popular destination: ${name}`);
  return destination;
});

function Feature({ icon, title, label }: { icon: React.ReactNode; title: string; label: string }) {
  return (
    <div className="flex items-center gap-3 border-r border-border px-1 last:border-0 sm:justify-center">
      <span className="text-burgundy">{icon}</span>
      <span>
        <strong className="block text-[11px] font-extrabold uppercase tracking-wider text-ink">
          {title}
        </strong>
        <span className="block text-[10px] capitalize text-ink-soft">{label}</span>
      </span>
    </div>
  );
}
function SectionHeading({
  eyebrow,
  title,
  action,
  onAction,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  action: string;
  onAction?: () => void;
  actionHref?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-burgundy">{eyebrow}</p>
        <h2 className="display-serif mt-2 text-4xl text-ink sm:text-5xl">{title}</h2>
      </div>
      {actionHref ? (
        <Link
          to={actionHref}
          className="flex shrink-0 items-center gap-1.5 pb-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft transition-colors hover:text-burgundy sm:gap-2 sm:tracking-widest"
        >
          {action} <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <button
          type="button"
          onClick={onAction}
          className="hidden shrink-0 items-center gap-1.5 pb-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft transition-colors hover:text-burgundy lg:flex lg:gap-2 lg:tracking-widest"
        >
          {action} <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
function DestinationCard({
  destination,
  onSelect,
  compact = false,
}: {
  destination: Destination;
  onSelect: (destination: Destination) => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={() => onSelect(destination)}
      className={`group shrink-0 snap-start text-left ${compact ? "w-full" : "w-[42vw] min-w-[138px] sm:w-[210px]"}`}
    >
      <div
        className={`relative overflow-hidden rounded-sm bg-muted ${compact ? "aspect-[1.05]" : "aspect-[0.92]"}`}
      >
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.place}`}
          width={900}
          height={620}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 via-transparent to-transparent" />
        <span
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-burgundy-deep/80 p-3 pt-10 text-primary-foreground ${compact ? "sm:p-4" : "sm:p-4 sm:pt-12"}`}
        >
          <strong
            className={`display-serif block leading-tight ${compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"}`}
          >
            {destination.name}
          </strong>
          <span className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-wider text-primary-foreground/75">
            <MapPin className="h-3 w-3" />
            {destination.place}
          </span>
        </span>
      </div>
    </button>
  );
}

function CommunityPanel({ member, onJoin }: { member: Member | null; onJoin: () => void }) {
  return (
    <div
      className="relative isolate min-h-[250px] overflow-hidden rounded-sm bg-burgundy-deep p-7 text-primary-foreground sm:p-9"
      style={{ backgroundImage: `url(${pahalgamImage})`, backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-burgundy-deep via-burgundy-deep/85 to-burgundy-deep/25" />
      <UsersRound className="h-8 w-8 text-gold" strokeWidth={1.25} />
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
        Travel together
      </p>
      <h2 className="display-serif mt-2 max-w-sm text-3xl leading-tight sm:text-4xl">
        Join the Explorer Community
      </h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-primary-foreground/75">
        Share your journey, discover new corners of J&K, and collect memories with fellow explorers.
      </p>
      <button
        type="button"
        onClick={onJoin}
        className="mt-6 inline-flex items-center gap-2 bg-gold px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-burgundy-deep transition-colors hover:bg-gold-soft"
      >
        {member ? "Update your profile" : "Register yourself"} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function ExplorerBadges({ registered }: { registered: boolean }) {
  return (
    <div id="explorer-badges" className="rounded-sm border border-border bg-paper p-6 sm:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Collect your story
          </p>
          <h2 className="display-serif mt-1 text-3xl text-ink sm:text-4xl">Explorer badges</h2>
        </div>
        <span className="hidden text-[10px] font-bold uppercase tracking-widest text-ink-soft sm:block">
          3 badges to earn
        </span>
      </div>
      <p className="mt-2 text-sm text-ink-soft">
        Each destination takes you one step closer to the next seal.
      </p>
      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
        <ExplorerBadge
          icon={<Award className="h-6 w-6" strokeWidth={1.35} />}
          label="Bronze"
          goal="10 places"
          progress={registered ? "1/10" : "0/10"}
          tone="bronze"
        />
        <ExplorerBadge
          icon={<Stamp className="h-6 w-6" strokeWidth={1.35} />}
          label="Silver"
          goal="20 places"
          progress="0/20"
          tone="silver"
        />
        <ExplorerBadge
          icon={<Crown className="h-6 w-6" strokeWidth={1.35} />}
          label="Gold"
          goal="30 places"
          progress="0/30"
          tone="gold"
        />
      </div>
    </div>
  );
}

function ExplorerBadge({
  icon,
  label,
  goal,
  progress,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  goal: string;
  progress: string;
  tone: "bronze" | "silver" | "gold";
}) {
  return (
    <div className={`badge-card badge-card-${tone} text-center`}>
      <span className="badge-medallion mx-auto grid h-16 w-16 place-items-center rounded-full sm:h-[82px] sm:w-[82px]">
        <span className="badge-rays" aria-hidden="true" />
        <span className="badge-inner-ring" aria-hidden="true" />
        <span className="relative z-10 grid h-8 w-8 place-items-center rounded-full border border-current/55 sm:h-10 sm:w-10">
          {icon}
        </span>
        <span className="badge-monogram">J&amp;K</span>
      </span>
      <strong className="mt-2 block text-xs text-ink sm:text-sm">{label}</strong>
      <span className="mt-0.5 block text-[9px] text-ink-soft sm:text-[10px]">Explore {goal}</span>
      <span className="mt-1 block text-[10px] font-bold text-ink">{progress}</span>
    </div>
  );
}
function DestinationSpotlight({
  destination,
  onClose,
}: {
  destination: Destination;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] flex items-end bg-burgundy-deep/65 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6">
      <div
        className="relative grid max-h-[92dvh] w-full overflow-y-auto bg-paper shadow-2xl sm:max-w-4xl sm:grid-cols-[0.9fr_1.1fr] sm:overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="destination-title"
      >
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.place}`}
          width={900}
          height={620}
          className="h-48 w-full object-cover sm:h-full"
        />
        <div className="p-6 pb-9 sm:p-10">
          <button
            onClick={onClose}
            aria-label="Close destination details"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/35 bg-burgundy-deep/85 text-primary-foreground shadow-lg transition-colors hover:bg-burgundy sm:border-border sm:bg-paper sm:text-ink-soft"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
            Destination details
          </p>
          <h3 id="destination-title" className="display-serif mt-2 text-4xl text-ink">
            {destination.name}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">{destination.description}</p>
          <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-5 text-xs text-ink-soft">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-burgundy" />
              Best time: {destination.time}
            </span>
            <span className="flex items-center gap-2">
              <Footprints className="h-4 w-4 text-burgundy" />
              Stamp available
            </span>
          </div>
          <button className="mt-7 inline-flex items-center gap-2 border border-burgundy px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-burgundy hover:bg-burgundy hover:text-primary-foreground">
            <Stamp className="h-4 w-4" /> Collect this stamp
          </button>
        </div>
      </div>
    </div>
  );
}
function PlanItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3 border border-border bg-paper px-4 py-3">
      <span className="text-burgundy">{icon}</span>
      <span>
        <strong className="block text-xs font-bold text-ink">{title}</strong>
        <span className="text-[10px] text-ink-soft">{text}</span>
      </span>
    </div>
  );
}
function Article({ image, category, title }: { image: string; category: string; title: string }) {
  return (
    <article className="group">
      <div className="aspect-[1.55] overflow-hidden">
        <img
          src={image}
          alt=""
          width={900}
          height={620}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
        {category}
      </p>
      <h3 className="display-serif mt-1 text-2xl text-ink">{title}</h3>
      <a
        href="#about"
        className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink-soft hover:text-burgundy"
      >
        Read story <ArrowRight className="h-3 w-3" />
      </a>
    </article>
  );
}
function MobileNav({
  icon,
  label,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex flex-col items-center gap-1 text-ink-soft transition-colors hover:text-burgundy"
    >
      <span>{icon}</span>
      <span className="text-[9px] font-bold uppercase tracking-wider">{label}</span>
    </a>
  );
}
