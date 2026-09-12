import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Compass, MapPin, Stamp } from "lucide-react";

import { destinationSlug, destinations } from "../index";

export const Route = createFileRoute("/destination/$destinationSlug")({
  component: DestinationPage,
});

function DestinationPage() {
  const { destinationSlug: slug } = Route.useParams();
  const destination = destinations.find((item) => destinationSlug(item.name) === slug);

  if (!destination) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-5 text-center paper-texture">
        <div>
          <p className="display-serif text-4xl text-ink">Destination not found</p>
          <Link
            to="/destinations"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-burgundy"
          >
            <ArrowLeft className="h-4 w-4" /> All destinations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground paper-texture">
      <header className="border-b border-primary-foreground/15 bg-burgundy-deep text-primary-foreground">
        <div className="mx-auto flex min-h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-10">
          <Link
            to="/destinations"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gold hover:text-gold-soft"
          >
            <ArrowLeft className="h-4 w-4" /> All destinations
          </Link>
          <Link to="/" className="display-serif text-xl tracking-wide">
            J&amp;K Explorer
          </Link>
        </div>
      </header>

      <section className="relative isolate min-h-[440px] overflow-hidden bg-burgundy-deep text-primary-foreground lg:min-h-[560px]">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.place}`}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-burgundy-deep/95 via-burgundy-deep/62 to-burgundy-deep/20" />
        <div className="mx-auto flex min-h-[440px] max-w-[1220px] flex-col justify-end px-5 py-12 lg:min-h-[560px] lg:px-10 lg:py-16">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            <MapPin className="h-4 w-4" /> {destination.place}
          </p>
          <h1 className="display-serif mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {destination.name}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-primary-foreground/80">
            {destination.description}
          </p>
        </div>
      </section>

      {destination.name === "Vaishno Devi" ? (
        <VaishnoDeviGuide />
      ) : (
        <GenericDestinationGuide destination={destination} />
      )}
    </main>
  );
}

function VaishnoDeviGuide() {
  const highlights = [
    "Holy Cave Shrine (Bhawan)",
    "Three Sacred Pindis",
    "Ardhkuwari Cave",
    "Banganga & Charan Paduka",
    "Sanjichhat views",
    "Bhairon Temple",
  ];
  const facilities = [
    "Free drinking water, cloakrooms and washrooms",
    "Food courts, accommodation and medical facilities",
    "Battery cars, pony and palki services",
    "Helicopter service and security assistance",
  ];
  const faqs = [
    ["How long does the trek take?", "Usually 4–8 hours, depending on your pace."],
    [
      "Is the trek suitable for senior citizens?",
      "Yes. Helicopter, battery car, pony and palki services are available.",
    ],
    [
      "Is accommodation available?",
      "Yes. Shrine Board accommodation and private hotels are available in Katra.",
    ],
    ["Is there an entry fee?", "Entry is free, but a Yatra Registration Slip is mandatory."],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-5 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-16">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Trikuta Hills, Katra"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Pilgrimage distance"
          value="13 km from Katra"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1–2 days"
        />
      </section>

      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Overview
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              A journey of faith through the Trikuta Hills
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Shri Mata Vaishno Devi is one of India&apos;s holiest Hindu pilgrimage sites. The Holy
              Cave holds three naturally formed Pindis, symbolising Maha Kali, Maha Lakshmi and Maha
              Saraswati. From Katra, devotees travel through mountain paths shaped by faith,
              devotion and Himalayan views.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              The pilgrimage traditionally continues to Bhairon Temple, a visit believed to complete
              the sacred journey. Whether you seek spiritual peace, adventure or the beauty of the
              mountains, Vaishno Devi is an unforgettable chapter in Jammu &amp; Kashmir.
            </p>
          </div>
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Top highlights
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <div key={highlight} className="flex items-start gap-3 text-sm text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-gold">
                    0{index + 1}
                  </span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          The yatra route
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Walk the sacred path</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Katra",
            "Banganga",
            "Charan Paduka",
            "Ardhkuwari & Sanjichhat",
            "Bhawan & Bhairon Temple",
          ].map((stop, index) => (
            <div key={stop} className="relative border border-border bg-paper p-4 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy">
                Stop {index + 1}
              </span>
              <p className="display-serif mt-2 text-xl text-ink">{stop}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Plan your visit
            </p>
            <h2 className="display-serif mt-2 text-3xl sm:text-4xl">Best time to visit</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["March–June", "Pleasant weather, ideal for trekking."],
                ["July–September", "Green landscapes with occasional rainfall."],
                ["October–November", "Navratri celebrations and cool weather."],
                ["December–February", "Winter season with possible snowfall."],
              ].map(([season, detail]) => (
                <div key={season} className="border border-primary-foreground/15 p-4">
                  <p className="font-semibold text-gold">{season}</p>
                  <p className="mt-1 text-xs leading-5 text-primary-foreground/70">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Before you go
            </p>
            <p className="display-serif mt-3 text-2xl">Entry is free. Registration is essential.</p>
            <p className="mt-3 text-sm leading-7 text-primary-foreground/75">
              Obtain your free Yatra Registration Slip before beginning. Darshan is available almost
              24 hours a day, with brief pauses for rituals and maintenance.
            </p>
            <p className="mt-5 text-xs leading-5 text-primary-foreground/65">
              Photography is not permitted inside the Holy Cave. Capture the Trikuta Hills,
              illuminated paths and viewpoints along the route instead.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            How to reach
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Start from Katra</h2>
          <div className="mt-6 space-y-3">
            {[
              ["By air", "Jammu Airport is approximately 50 km from Katra."],
              ["By train", "Shri Mata Vaishno Devi Katra Railway Station is the nearest station."],
              [
                "By road",
                "Buses, taxis and private vehicles connect Katra with Jammu, Srinagar, Delhi and Chandigarh.",
              ],
            ].map(([title, detail]) => (
              <div key={title} className="border-l-2 border-gold bg-paper p-4">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Travel with support</h2>
          <div className="mt-6 space-y-3">
            {facilities.map((facility) => (
              <p
                key={facility}
                className="flex gap-3 border-b border-border pb-3 text-sm text-ink-soft"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" /> {facility}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Travel options
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Choose your pace</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Helicopter service runs between Katra and Sanjichhat, with an 8–10 minute flight and
              around 2.5 km on foot to Bhawan. Advance booking is recommended during peak seasons.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Pony, palki and eligible battery-car services are available for those unable to walk
              the full distance. Charges and operating conditions are set by the authorities.
            </p>
          </div>
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Taste & explore
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Stay a little longer</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Explore Katra&apos;s markets, try Rajma Chawal, Kaladi Kulcha, Patisa and Kulhad
              Lassi, or add nearby Ardhkuwari, Baba Dhansar, Shiv Khori and Nau Devi Temple to your
              plan.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Before the journey</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function GenericDestinationGuide({ destination }: { destination: { time: string } }) {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-5 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-16">
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Best time to visit"
          value={destination.time}
        />
        <InfoCard
          icon={<Stamp className="h-5 w-5" />}
          label="Passport stamp"
          value="Available at this destination"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Explorer note"
          value="Take your time and collect the story"
        />
      </section>
      <section className="border-t border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Plan your visit
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Make this chapter your own
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">
            Save this destination in your J&amp;K Explorer Passport, leave room for your own notes,
            and discover the people and places around it at your own pace.
          </p>
          <Link
            to="/destinations"
            className="mt-7 inline-flex items-center gap-2 bg-burgundy px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-primary-foreground"
          >
            Explore more destinations <Compass className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="border border-border bg-paper p-5 shadow-sm">
      <span className="text-burgundy">{icon}</span>
      <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-ink-soft">{label}</p>
      <p className="display-serif mt-2 text-xl text-ink">{value}</p>
    </div>
  );
}
