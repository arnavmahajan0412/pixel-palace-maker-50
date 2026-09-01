import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  Compass,
  Crown,
  Footprints,
  Heart,
  House,
  Instagram,
  MapPin,
  Menu,
  Navigation,
  PackageOpen,
  QrCode,
  ShieldCheck,
  Stamp,
  TentTree,
  TrainFront,
  UserRound,
  X,
} from "lucide-react";
import heroImage from "@/assets/kashmir-hero.jpg";
import vaishnoImage from "@/assets/vaishno-devi.jpg";
import gulmargImage from "@/assets/gulmarg.jpg";
import dalImage from "@/assets/dal-lake.jpg";
import sonamargImage from "@/assets/sonamarg.jpg";
import pahalgamImage from "@/assets/pahalgam.jpg";

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

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [selected, setSelected] = useState<Destination | null>(null);

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
              <a href="#destinations" onClick={() => setMenuOpen(false)}>
                Destinations
              </a>
              <a href="#passport" onClick={() => setMenuOpen(false)}>
                Passport Guide
              </a>
              <a href="#planner" onClick={() => setMenuOpen(false)}>
                Travel Planner
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative isolate flex min-h-[680px] items-end overflow-hidden bg-burgundy-deep pb-14 pt-32 sm:min-h-[760px] lg:min-h-[820px] lg:pb-24"
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
          <div className="mx-auto w-full max-w-[1380px] px-5 lg:px-10">
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-10 bg-gold" />
                The valley is calling
              </p>
              <h1 className="display-serif max-w-xl text-5xl leading-[0.98] text-primary-foreground sm:text-7xl lg:text-[92px]">
                Explore Jammu & Kashmir{" "}
                <em className="font-normal text-gold">like never before.</em>
              </h1>
              <p className="mt-7 max-w-md text-sm leading-7 text-primary-foreground/80 sm:text-base">
                30 iconic destinations. One passport.
                <br />
                Endless memories waiting to be collected.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById("passport")?.scrollIntoView()}
                  className="bg-burgundy px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-lg transition-colors hover:bg-burgundy/80"
                >
                  Get your passport
                </button>
                <a
                  href="#destinations"
                  className="flex items-center gap-2 border border-primary-foreground/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Explore destinations <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mt-16 flex items-center gap-3 text-xs text-primary-foreground/70">
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
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
                onSelect={setSelected}
              />
            ))}
          </div>
          {selected && (
            <DestinationSpotlight destination={selected} onClose={() => setSelected(null)} />
          )}
        </section>

        <section
          id="passport"
          className="scroll-mt-20 bg-burgundy-deep px-5 py-14 text-primary-foreground lg:px-10"
        >
          <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
                Your passport journey
              </p>
              <h2 className="display-serif mt-2 max-w-xl text-4xl leading-tight sm:text-5xl">
                The first page of your story starts here.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/70">
                Register your passport, collect stamps across the valley, and watch your explorer
                story unfold.
              </p>
              <button
                onClick={() => setRegistered(!registered)}
                className="mt-7 inline-flex items-center gap-2 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-burgundy-deep transition-colors hover:bg-gold-soft"
              >
                {registered ? (
                  <>
                    <Check className="h-4 w-4" /> Passport registered
                  </>
                ) : (
                  <>
                    Register my passport <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            <div className="flex w-full max-w-lg items-center gap-6 border-t border-primary-foreground/20 pt-7 lg:w-[480px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="relative grid h-32 w-32 shrink-0 place-items-center rounded-full border border-gold/70">
                <div className="absolute inset-2 rounded-full border border-gold/30" />
                <span className="display-serif text-3xl text-gold">
                  {registered ? "1/30" : "0/30"}
                </span>
                <span className="absolute bottom-4 text-[8px] uppercase tracking-widest text-primary-foreground/60">
                  destinations
                </span>
              </div>
              <div>
                <p className="text-2xl font-semibold">
                  {registered ? "Welcome, Explorer" : "Your passport is waiting"}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/60">
                  {registered
                    ? "Vaishno Devi is your first stop."
                    : "One passport. Endless journeys."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="planner" className="mx-auto max-w-[1220px] scroll-mt-20 px-5 py-20 lg:px-10">
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
              <div className="mt-8 flex gap-3">
                <BadgeSeal label="Bronze" active />
                <BadgeSeal label="Silver" />
                <BadgeSeal label="Gold" />
              </div>
            </div>
          </div>
        </section>

        <section id="journal" className="border-t border-border bg-paper-deep px-5 py-16 lg:px-10">
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
      <footer id="about" className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10">
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
        <MobileNav icon={<Stamp />} label="Passport" href="#passport" />
        <MobileNav icon={<UserRound />} label="Profile" href="#about" />
      </nav>
    </div>
  );
}

type Destination = {
  name: string;
  place: string;
  image: string;
  description: string;
  time: string;
};
const destinations: Destination[] = [
  {
    name: "Vaishno Devi",
    place: "Katra",
    image: vaishnoImage,
    description:
      "A revered shrine in the Trikuta Mountains, wrapped in quiet devotion and breathtaking views.",
    time: "Mar – Oct",
  },
  {
    name: "Gulmarg",
    place: "Baramulla",
    image: gulmargImage,
    description: "A meadow of flowers in summer and a snow-draped playground in winter.",
    time: "Dec – Feb",
  },
  {
    name: "Dal Lake",
    place: "Srinagar",
    image: dalImage,
    description: "Wake up on the water, with shikaras gliding past a mirror of the Himalayas.",
    time: "Apr – Oct",
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
];

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
}: {
  eyebrow: string;
  title: string;
  action: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-burgundy">{eyebrow}</p>
        <h2 className="display-serif mt-2 text-4xl text-ink sm:text-5xl">{title}</h2>
      </div>
      <a
        href="#about"
        className="hidden items-center gap-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-ink-soft hover:text-burgundy sm:flex"
      >
        {action} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
function DestinationCard({
  destination,
  onSelect,
}: {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}) {
  return (
    <button onClick={() => onSelect(destination)} className="group text-left">
      <div className="relative aspect-[0.88] overflow-hidden rounded-sm bg-muted">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.place}`}
          width={900}
          height={620}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 text-primary-foreground">
          <strong className="display-serif block text-2xl">{destination.name}</strong>
          <span className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-wider text-primary-foreground/75">
            <MapPin className="h-3 w-3" />
            {destination.place}
          </span>
        </span>
      </div>
    </button>
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
    <div className="relative mt-8 grid overflow-hidden border border-border bg-paper sm:grid-cols-[1fr_1.3fr]">
      <img
        src={destination.image}
        alt=""
        width={900}
        height={620}
        className="h-56 w-full object-cover sm:h-full"
      />
      <div className="p-7 sm:p-10">
        <button
          onClick={onClose}
          aria-label="Close destination details"
          className="absolute right-4 top-4 rounded-full border border-border p-1.5 text-ink-soft hover:text-burgundy"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
          Destination details
        </p>
        <h3 className="display-serif mt-2 text-4xl text-ink">{destination.name}</h3>
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
function BadgeSeal({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`grid h-12 w-12 place-items-center rounded-full border ${active ? "border-gold text-gold" : "border-primary-foreground/30 text-primary-foreground/35"}`}
    >
      <span className="text-[8px] font-bold uppercase tracking-widest">{label}</span>
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
function MobileNav({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center gap-1 text-ink-soft transition-colors hover:text-burgundy"
    >
      <span>{icon}</span>
      <span className="text-[9px] font-bold uppercase tracking-wider">{label}</span>
    </a>
  );
}
