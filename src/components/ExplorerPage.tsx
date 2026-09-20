import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, BookOpen, CalendarDays, Compass, MapPin, Stamp } from "lucide-react";

import heroImage from "@/assets/kashmir-hero.jpg";
import passportImage from "@/assets/jk-explorer-passport.png";
import vaishnoImage from "@/assets/vaishno-devi.jpg";
import gulmargImage from "@/assets/gulmarg.jpg";
import dalImage from "@/assets/dal-lake.jpg";
import bronzeBadge from "@/assets/badges/bronze-explorer.jpeg";
import silverBadge from "@/assets/badges/silver-explorer.jpeg";
import goldBadge from "@/assets/badges/gold-explorer.jpeg";
import { MobileExplorerExperience } from "@/routes/index";
import { SiteNavigation } from "@/components/SiteNavigation";
import { SiteFooter } from "@/components/SiteFooter";

export type ExplorerPageKind = "passport" | "planner" | "badges" | "journal" | "about";

const pageContent = {
  passport: {
    eyebrow: "Your journey begins",
    title: "Passport Guide",
    description:
      "Everything you need to turn a J&K Explorer Passport into a collection of real journeys.",
  },
  planner: {
    eyebrow: "Plan your journey",
    title: "Travel Planner",
    description:
      "Build a route through the valleys, lakes, shrines and stories of Jammu & Kashmir.",
  },
  badges: {
    eyebrow: "Collect your story",
    title: "Explorer Badges",
    description: "Every place you visit takes you closer to your next explorer seal.",
  },
  journal: {
    eyebrow: "From the journal",
    title: "Stories from the road",
    description: "Travel notes, seasonal ideas and local inspiration for your next J&K chapter.",
  },
  about: {
    eyebrow: "Our story",
    title: "Our Story",
    description: "From a love for mountains, travel, and the untold stories of Jammu & Kashmir.",
  },
} as const;

export function ExplorerPage({ kind }: { kind: ExplorerPageKind }) {
  const content = pageContent[kind];
  const [registered, setRegistered] = useState(false);
  const mobileView = kind === "passport" ? "passport" : kind === "planner" ? "planner" : "badges";

  return (
    <main className="min-h-screen bg-background pb-16 text-foreground paper-texture lg:pb-0">
      <SiteNavigation />

      {kind === "about" ? (
        <AboutHero />
      ) : kind === "journal" ? (
        <section className="relative isolate overflow-hidden bg-burgundy-deep px-5 py-16 text-primary-foreground lg:px-10 lg:py-24">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-burgundy-deep/65" />
          <div className="mx-auto max-w-[1220px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-gold">
              {content.eyebrow}
            </p>
            <h1 className="display-serif mt-3 text-4xl leading-[1.02] sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-primary-foreground/80">
              {content.description}
            </p>
          </div>
        </section>
      ) : null}

      {kind === "passport" || kind === "planner" || kind === "badges" ? (
        <MobileExplorerExperience
          activeView={mobileView}
          onViewChange={() => undefined}
          registered={registered}
          onStart={() => setRegistered(true)}
          showOnDesktop
        />
      ) : (
        <section
          className={kind === "about" ? "" : "mx-auto max-w-[1220px] px-5 py-10 lg:px-10 lg:py-16"}
        >
          {kind === "journal" && <Journal />}
          {kind === "about" && <About />}
        </section>
      )}
      <SiteFooter />
    </main>
  );
}

function PassportGuide() {
  const steps = [
    "Get your passport",
    "Choose a destination",
    "Visit & explore",
    "Collect your stamp",
    "Unlock explorer badges",
  ];
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="border border-border bg-paper p-6 sm:p-8">
        <h2 className="display-serif text-2xl text-ink sm:text-3xl">How your passport works</h2>
        <div className="mt-6 space-y-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4 border-b border-border pb-3 last:border-0"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-burgundy text-[10px] font-bold text-gold">
                0{index + 1}
              </span>
              <p className="text-sm font-semibold text-ink">{step}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-border bg-paper-deep p-6 sm:p-8">
        <BookOpen className="h-9 w-9 text-burgundy" />
        <h2 className="display-serif mt-5 text-2xl text-ink sm:text-3xl">What&apos;s inside</h2>
        <p className="mt-3 text-sm leading-7 text-ink-soft">
          Destination pages, location notes, travel memories, stamp spaces and your explorer
          progress—made for journeys worth keeping.
        </p>
        <Link
          to="/explore-badges"
          className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-burgundy"
        >
          Explore badges <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function TravelPlanner() {
  const places = [
    ["Dal Lake", dalImage],
    ["Gulmarg", gulmargImage],
    ["Vaishno Devi", vaishnoImage],
  ];
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        {places.map(([name, image]) => (
          <article key={name} className="overflow-hidden border border-border bg-paper">
            <img src={image} alt={name} className="aspect-[1.2] w-full object-cover" />
            <div className="p-4">
              <p className="display-serif text-xl text-ink sm:text-2xl">{name}</p>
              <p className="mt-1 flex items-center gap-1 text-[10px] text-ink-soft">
                <MapPin className="h-3 w-3" /> Add to your route
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 border border-border bg-paper-deep p-6">
        <CalendarDays className="h-7 w-7 text-burgundy" />
        <h2 className="display-serif mt-3 text-2xl text-ink sm:text-3xl">Build your own chapter</h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-soft">
          Choose a travel style, save favourite destinations, and use your passport to record the
          moments along the way.
        </p>
      </div>
    </>
  );
}

function Badges() {
  const badges = [
    ["Bronze Explorer", "Explore 10 places", bronzeBadge],
    ["Silver Explorer", "Explore 20 places", silverBadge],
    ["Gold Explorer", "Explore 30 places", goldBadge],
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {badges.map(([name, goal, image]) => (
        <article key={name} className="border border-border bg-paper p-5 text-center shadow-sm">
          <img
            src={image}
            alt={name}
            className="mx-auto h-44 w-44 rounded-full border border-burgundy-deep object-cover shadow-md"
          />
          <h2 className="display-serif mt-4 text-2xl text-ink">{name}</h2>
          <p className="mt-1 text-xs text-ink-soft">{goal}</p>
          <div className="mx-auto mt-4 h-1 w-24 bg-border">
            <div className="h-full w-0 bg-gold" />
          </div>
        </article>
      ))}
    </div>
  );
}

function Journal() {
  const stories = [
    ["A slow morning", "The many moods of Dal Lake", dalImage],
    ["Mountain air", "A weekend in Gulmarg", gulmargImage],
    ["Spiritual paths", "Finding stillness at Vaishno Devi", vaishnoImage],
  ];
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stories.map(([category, title, image]) => (
        <article key={title} className="overflow-hidden border border-border bg-paper">
          <img src={image} alt="" className="aspect-[1.2] w-full object-cover" />
          <div className="p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-burgundy">
              {category}
            </p>
            <h2 className="display-serif mt-2 text-2xl text-ink">{title}</h2>
          </div>
        </article>
      ))}
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative isolate min-h-[250px] overflow-hidden bg-burgundy-deep px-5 py-10 text-primary-foreground sm:min-h-[300px] sm:px-7 lg:min-h-[330px] lg:px-10">
      <img
        src={heroImage}
        alt="Mountains of Jammu and Kashmir"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-burgundy-deep/90 via-burgundy-deep/55 to-burgundy-deep/20" />
      <div className="mx-auto flex min-h-[170px] max-w-[1220px] flex-col justify-center sm:min-h-[220px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">About Us</p>
        <h1 className="display-serif mt-2 text-3xl leading-tight sm:text-4xl">
          More Than a Passport.
          <br />
          <em className="font-normal text-gold">Your Journey Through J&amp;K.</em>
        </h1>
        <p className="mt-3 max-w-md text-xs leading-5 text-primary-foreground/85 sm:text-sm sm:leading-6">
          J&amp;K Explorer Passport is a travel companion created for people who want to explore the
          beauty, culture, history and hidden gems of Jammu &amp; Kashmir.
        </p>
      </div>
    </section>
  );
}

function About() {
  const offers = [
    [<Compass />, "Discover destinations across J&K"],
    [<BookOpen />, "Keep your own travel journal"],
    [<Stamp />, "Collect destination stamps"],
    [<Award />, "Explore and unlock travel badges"],
    [<MapPin />, "Find useful information for your journey"],
    [<CalendarDays />, "Capture and remember your adventures"],
  ];

  return (
    <section className="overflow-x-hidden bg-paper">
      <div className="mx-auto max-w-[1220px]">
        <section className="grid gap-9 px-5 py-12 md:grid-cols-[0.8fr_1.2fr] md:items-center sm:px-7 lg:px-10 lg:py-16">
          <div className="relative mx-auto max-w-[285px] py-4">
            <div className="absolute inset-2 -z-10 rotate-[-4deg] border border-dashed border-burgundy/30" />
            <div className="absolute inset-8 -z-10 rounded-full bg-gold/15 blur-2xl" />
            <img
              src={passportImage}
              alt="J&K Explorer Passport"
              className="mx-auto w-48 -rotate-[9deg] drop-shadow-xl transition-transform duration-500 hover:rotate-[-4deg] sm:w-56"
            />
          </div>
          <div>
            <h2 className="display-serif text-3xl text-ink sm:text-4xl">
              About J&amp;K Explorer Passport
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">
              J&amp;K Explorer Passport is more than just a book — it&apos;s your personal travel
              companion. From famous destinations to lesser-known places, our goal is to make every
              journey more exciting and memorable. The passport encourages travellers to discover
              new places, collect memories, and keep a personal record of their adventures.
            </p>
          </div>
        </section>
        <section className="grid gap-8 bg-cream px-5 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center sm:px-7 lg:px-10 lg:py-14">
          <div>
            <h2 className="display-serif text-3xl text-ink">Our Mission</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
              To inspire people to explore Jammu &amp; Kashmir beyond the usual tourist destinations
              and discover the stories, landscapes, traditions and experiences that make every place
              special.
            </p>
          </div>
          <div className="border-l-2 border-gold/70 pl-6">
            <p className="display-serif text-2xl italic text-burgundy">
              Explore more than just places.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Discover the roads, valleys and stories that stay with you.
            </p>
          </div>
        </section>
        <section className="px-5 py-12 sm:px-7 lg:px-10 lg:py-16">
          <h2 className="display-serif text-3xl text-ink">What We Offer</h2>
          <div className="mt-7 grid grid-cols-2 border-y border-border sm:grid-cols-3 lg:grid-cols-6">
            {offers.map(([icon, label]) => (
              <div
                key={label as string}
                className="group flex min-h-40 flex-col items-center justify-center gap-3 border-b border-border p-4 text-center transition-colors hover:bg-cream sm:border-r sm:nth-[3n]:border-r-0 lg:min-h-44 lg:nth-[3n]:border-r lg:last:border-r-0"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-cream text-burgundy transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  {icon}
                </span>
                <p className="max-w-[120px] text-xs leading-5 text-ink-soft">{label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-8 bg-paper-deep px-5 py-12 md:grid-cols-[1.15fr_0.85fr] sm:px-7 lg:px-10 lg:py-14">
          <div>
            <h2 className="display-serif text-3xl text-ink">Why We Created It</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">
              We believe travelling isn&apos;t just about reaching a destination — it&apos;s about
              the moments you collect along the way.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
              J&amp;K Explorer Passport was created to turn exploring J&amp;K into a personal
              adventure. Every destination can become a new chapter, every stamp a memory, and every
              journey a story worth keeping.
            </p>
          </div>
          <p className="display-serif self-center text-2xl italic leading-tight text-burgundy">
            The journey may end here but the mountains will call you back.
          </p>
        </section>
        <section className="grid gap-10 px-5 py-12 md:grid-cols-2 sm:px-7 lg:px-10 lg:py-14">
          <div>
            <h2 className="display-serif text-2xl text-ink">How It Works</h2>
            <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[9px] leading-4 text-ink-soft sm:text-[10px]">
              <span className="rounded-sm bg-cream p-2">
                Get Your
                <br />
                Explorer Passport
              </span>
              <span className="rounded-sm bg-cream p-2">
                Explore
                <br />
                Destinations
              </span>
              <span className="rounded-sm bg-cream p-2">
                Collect
                <br />
                Stamps &amp; Badges
              </span>
              <span className="rounded-sm bg-cream p-2">
                Record Your
                <br />
                Memories
              </span>
            </div>
          </div>
          <div className="border-l-2 border-gold/70 pl-6">
            <h2 className="display-serif text-2xl text-ink">Join the Explorer Community</h2>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              Connect with fellow travellers, share your experiences, get tips, and be part of a
              growing community that loves to explore J&amp;K.
            </p>
            <a
              href="/?join=true"
              className="mt-5 inline-flex bg-burgundy px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary-foreground"
            >
              Be a Part of It
            </a>
          </div>
        </section>
        <section className="relative isolate overflow-hidden px-5 py-12 text-center text-primary-foreground lg:px-10">
          <img
            src={heroImage}
            alt="Jammu and Kashmir mountains"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-burgundy-deep/65" />
          <h2 className="display-serif text-3xl">Explore. Discover. Collect. Remember.</h2>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            J&amp;K Explorer Passport
          </p>
          <p className="mt-2 text-sm italic text-primary-foreground/85">
            Your personal passport to exploring Jammu &amp; Kashmir.
          </p>
        </section>
      </div>
    </section>
  );
}
