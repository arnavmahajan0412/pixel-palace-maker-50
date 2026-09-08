import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, MapPin, Search, Stamp, X } from "lucide-react";
import { useMemo, useState } from "react";

import { destinations, type Destination } from "./index";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "All Destinations | J&K Explorer" },
      {
        name: "description",
        content: "Explore 30+ handpicked destinations across Jammu & Kashmir.",
      },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Destination | null>(null);

  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return destinations;
    return destinations.filter((destination) =>
      [destination.name, destination.place, destination.description, destination.time]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

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

      <section className="border-b border-border bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-burgundy">
            Choose your next chapter
          </p>
          <h1 className="display-serif mt-2 max-w-2xl text-5xl leading-[1.02] text-ink sm:text-6xl">
            All 30+ destinations
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">
            Search the valleys, shrines, trails and city stories that make Jammu &amp; Kashmir
            unforgettable.
          </p>
          <label className="relative mt-7 block max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by destination, district or season"
              className="w-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-burgundy"
            />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-10 lg:px-10 lg:py-14">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
            {query
              ? `${matches.length} ${matches.length === 1 ? "destination" : "destinations"} found`
              : "30+ destinations to explore"}
          </p>
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[10px] font-bold uppercase tracking-widest text-burgundy hover:text-burgundy-deep"
            >
              Clear search
            </button>
          )}
        </div>
        {matches.length ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {matches.map((destination) => (
              <button
                key={destination.name}
                type="button"
                onClick={() => setSelected(destination)}
                className="group overflow-hidden rounded-sm border border-border bg-paper text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[1.03] overflow-hidden bg-muted">
                  <img
                    src={destination.image}
                    alt={`${destination.name}, ${destination.place}`}
                    width={900}
                    height={620}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/75 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-primary-foreground/90">
                    <MapPin className="h-3 w-3" /> {destination.place}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <h2 className="display-serif text-lg leading-tight text-ink sm:text-xl">
                    {destination.name}
                  </h2>
                  <p className="mt-1 text-[10px] text-ink-soft">Best: {destination.time}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border bg-paper px-6 py-16 text-center">
            <p className="display-serif text-3xl text-ink">No destination found</p>
            <p className="mt-2 text-sm text-ink-soft">
              Try a district, a place name, or a different season.
            </p>
          </div>
        )}
      </section>

      {selected && <CatalogueDetails destination={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}

function CatalogueDetails({
  destination,
  onClose,
}: {
  destination: Destination;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] flex items-end bg-burgundy-deep/65 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6">
      <div className="relative grid max-h-[92dvh] w-full overflow-y-auto bg-paper shadow-2xl sm:max-w-4xl sm:grid-cols-[0.9fr_1.1fr] sm:overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.place}`}
          width={900}
          height={620}
          className="h-48 w-full object-cover sm:h-full"
        />
        <div className="p-6 pb-9 sm:p-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close destination details"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/35 bg-burgundy-deep/85 text-primary-foreground shadow-lg sm:border-border sm:bg-paper sm:text-ink-soft"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
            Destination details
          </p>
          <h2 className="display-serif mt-2 text-4xl text-ink">{destination.name}</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">{destination.description}</p>
          <div className="mt-6 flex flex-wrap gap-5 border-t border-border pt-5 text-xs text-ink-soft">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-burgundy" /> Best time: {destination.time}
            </span>
            <span className="flex items-center gap-2">
              <Stamp className="h-4 w-4 text-burgundy" /> Stamp available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
