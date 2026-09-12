import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  Compass,
  MapPin,
  Stamp,
} from "lucide-react";

import heroImage from "@/assets/kashmir-hero.jpg";
import vaishnoImage from "@/assets/vaishno-devi.jpg";
import gulmargImage from "@/assets/gulmarg.jpg";
import dalImage from "@/assets/dal-lake.jpg";
import bronzeBadge from "@/assets/badges/bronze-explorer.jpeg";
import silverBadge from "@/assets/badges/silver-explorer.jpeg";
import goldBadge from "@/assets/badges/gold-explorer.jpeg";
import { MobileExplorerExperience } from "@/routes/index";

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
    title: "Made for curious explorers",
    description:
      "J&K Explorer is a keepsake passport designed to help you explore slowly and remember deeply.",
  },
} as const;

export function ExplorerPage({ kind }: { kind: ExplorerPageKind }) {
  const content = pageContent[kind];
  const [registered, setRegistered] = useState(false);
  const mobileView = kind === "passport" ? "passport" : kind === "planner" ? "planner" : "badges";

  return (
    <main className="min-h-screen bg-background text-foreground paper-texture">
      <header className="border-b border-primary-foreground/15 bg-burgundy-deep text-primary-foreground">
        <div className="mx-auto flex min-h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gold hover:text-gold-soft"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <span className="display-serif text-xl tracking-wide">J&amp;K Explorer</span>
        </div>
      </header>

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

      {kind === "passport" || kind === "planner" || kind === "badges" ? (
        <MobileExplorerExperience
          activeView={mobileView}
          onViewChange={() => undefined}
          registered={registered}
          onStart={() => setRegistered(true)}
          showOnDesktop
        />
      ) : (
        <section className="mx-auto max-w-[1220px] px-5 py-10 lg:px-10 lg:py-16">
          {kind === "journal" && <Journal />}
          {kind === "about" && <About />}
        </section>
      )}
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

function About() {
  return (
    <div className="grid gap-6 border border-border bg-paper p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="grid h-20 w-20 place-items-center rounded-full border border-gold bg-burgundy-deep text-gold">
        <Compass className="h-10 w-10" />
      </div>
      <div>
        <h2 className="display-serif text-3xl text-ink sm:text-4xl">Explore. Stamp. Remember.</h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">
          We believe the best travel memories are collected slowly. The J&amp;K Explorer Passport
          gives every journey a place to live—one stamp, note and destination at a time.
        </p>
        <Link
          to="/passport-guide"
          className="mt-7 inline-flex items-center gap-2 bg-burgundy px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-primary-foreground"
        >
          See the passport guide <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
