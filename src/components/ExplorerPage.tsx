import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, BookOpen, CalendarDays, Compass, MapPin, Stamp } from "lucide-react";

import heroImage from "@/assets/kashmir-hero.jpg";
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
    <section className="relative isolate h-[190px] overflow-hidden bg-burgundy-deep px-5 text-primary-foreground sm:h-[225px] lg:h-[245px] lg:px-10">
      <img
        src={heroImage}
        alt="Mountains of Jammu and Kashmir"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-burgundy-deep/90 via-burgundy-deep/55 to-burgundy-deep/20" />
      <div className="mx-auto flex h-full max-w-[1220px] flex-col justify-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Our Story</p>
        <h1 className="display-serif mt-2 text-3xl leading-none sm:text-4xl">Our Story</h1>
        <p className="mt-3 max-w-md text-xs leading-5 text-primary-foreground/85 sm:text-sm sm:leading-6">
          From a love for mountains, travel, and the untold stories of Jammu &amp; Kashmir.
        </p>
      </div>
    </section>
  );
}

function About() {
  const values = [
    [<Compass className="h-5 w-5" />, "Explore New Places"],
    [<Stamp className="h-5 w-5" />, "Support Local Culture"],
    [<BookOpen className="h-5 w-5" />, "Preserve Memories & Nature"],
    [<Award className="h-5 w-5" />, "Build a Travel Community"],
  ];

  return (
    <section className="bg-paper px-5 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1220px]">
        <div className="max-w-[760px]">
          <h2 className="display-serif text-2xl text-ink sm:text-3xl">
            Why We Created J&amp;K Explorer Passport
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-ink-soft">
            <p>Jammu &amp; Kashmir is not just a destination. It is an emotion.</p>
            <p>
              From snow-covered mountains to serene lakes, from ancient temples to vibrant culture —
              every corner has a story.
            </p>
            <p>
              We created J&amp;K Explorer Passport to help you explore, experience, and fall in love
              with J&amp;K, one destination at a time.
            </p>
          </div>
        </div>
        <div className="mt-9 grid border-y border-border sm:grid-cols-4">
          {values.map(([icon, label]) => (
            <div
              key={label as string}
              className="flex min-h-24 flex-col items-center justify-center gap-2 border-border px-3 text-center sm:border-r sm:last:border-r-0"
            >
              <span className="text-burgundy">{icon}</span>
              <span className="text-[11px] font-semibold text-ink">{label}</span>
            </div>
          ))}
        </div>
        <div className="relative isolate mt-10 min-h-[240px] overflow-hidden bg-burgundy-deep p-7 text-primary-foreground sm:min-h-[290px] sm:p-10">
          <img
            src={heroImage}
            alt="Mountains of Jammu and Kashmir"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-burgundy-deep/18 via-burgundy-deep/25 to-burgundy-deep/80" />
          <div className="flex min-h-[184px] flex-col items-end justify-end text-right sm:min-h-[210px]">
            <p className="display-serif max-w-xs text-3xl leading-tight sm:text-4xl">
              Because every journey begins with a story.
            </p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              J&amp;K Explorer Passport
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
