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

      {destination.name === "Vaishno Devi" ? <VaishnoDeviGuide /> : null}
      {destination.name === "Patnitop" ? <PatnitopGuide /> : null}
      {destination.name === "Mansar Lake (Surinsar)" ? <MansarLakeGuide /> : null}
      {destination.name === "Dal Lake (Shankaracharya)" ? <DalLakeGuide /> : null}
      {destination.name === "Mughal Gardens" ? <MughalGardensGuide /> : null}
      {destination.name === "Gulmarg" ? <GulmargGuide /> : null}
      {destination.name === "Sonamarg" ? <SonamargGuide /> : null}
      {destination.name === "Pahalgam" ? <PahalgamGuide /> : null}
      {destination.name === "Gurez Valley" ? <GurezValleyGuide /> : null}
      {destination.name === "Bhaderwah (Jai & Chinta Valleys)" ? <BhaderwahGuide /> : null}
      {destination.name === "Peer Ki Gali" ? <PeerKiGaliGuide /> : null}
      {destination.name === "Paddar (Machail Mata)" ? <MachailMataGuide /> : null}
      {destination.name === "Sarthal Valley (Bani, Basohli)" ? <SarthalValleyGuide /> : null}
      {destination.name === "Bawa Wali Mata & Jammu City Walk" ? <JammuCityWalkGuide /> : null}
      {destination.name === "Doodpathri" ? <DoodpathriGuide /> : null}
      {destination.name !== "Vaishno Devi" &&
      destination.name !== "Patnitop" &&
      destination.name !== "Mansar Lake (Surinsar)" &&
      destination.name !== "Dal Lake (Shankaracharya)" &&
      destination.name !== "Mughal Gardens" &&
      destination.name !== "Gulmarg" &&
      destination.name !== "Sonamarg" &&
      destination.name !== "Pahalgam" &&
      destination.name !== "Gurez Valley" &&
      destination.name !== "Bhaderwah (Jai & Chinta Valleys)" &&
      destination.name !== "Peer Ki Gali" &&
      destination.name !== "Paddar (Machail Mata)" &&
      destination.name !== "Sarthal Valley (Bani, Basohli)" &&
      destination.name !== "Bawa Wali Mata & Jammu City Walk" &&
      destination.name !== "Doodpathri" ? (
        <GenericDestinationGuide destination={destination} />
      ) : null}
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
              Nestled in the picturesque Trikuta Hills of the Reasi district in Jammu &amp; Kashmir,
              Shri Mata Vaishno Devi is one of India&apos;s holiest Hindu pilgrimage sites. Every
              year, millions of devotees undertake the sacred journey to seek the blessings of Mata
              Vaishno Devi. The shrine is famous for its spiritual significance, breathtaking
              Himalayan landscapes and well-organised pilgrimage facilities.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              The Holy Cave enshrines three naturally formed rock manifestations known as the Holy
              Pindis, symbolising Maha Kali, Maha Lakshmi and Maha Saraswati. Pilgrims begin from
              Katra, trekking approximately 13 km to the Bhawan through scenic mountain paths. Along
              the route, visitors pass Banganga, Charan Paduka, Ardhkuwari Cave, Sanjichhat and
              finally the Holy Cave.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Whether you are seeking spiritual peace, adventure or the beauty of the Himalayas,
              Vaishno Devi offers an unforgettable experience.
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
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            The story of Mata Vaishno Devi
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            According to Hindu beliefs, Mata Vaishno Devi is a manifestation of the combined powers
            of Goddess Kali, Goddess Lakshmi and Goddess Saraswati. She meditated in the Trikuta
            Hills and later defeated the demon Bhairon Nath.
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Before his death, Bhairon Nath sought forgiveness, and the Goddess blessed him by
            declaring that every pilgrimage would be considered complete only after visiting the
            Bhairon Temple. Today, Vaishno Devi is among the most visited pilgrimage destinations in
            the world.
          </p>
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

      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Continue the journey</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Ardhkuwari Cave",
              "Bhairon Temple",
              "Banganga",
              "Charan Paduka",
              "Baba Dhansar",
              "Shiv Khori",
              "Nau Devi Temple",
            ].map((place) => (
              <div
                key={place}
                className="border border-border bg-paper p-4 text-sm font-semibold text-ink shadow-sm"
              >
                {place}
              </div>
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

function PatnitopGuide() {
  const highlights = [
    "Vast green meadows",
    "Dense deodar and pine forests",
    "Snowfall during winter",
    "Naag Mandir",
    "Scenic walking trails",
    "Patnitop Park",
    "Sunrise and sunset viewpoints",
    "Gateway to Nathatop and Sanasar",
  ];
  const thingsToDo = [
    "Take a leisurely walk through the pine forests.",
    "Relax in the scenic meadows.",
    "Visit the ancient Naag Mandir.",
    "Enjoy snowfall during the winter months.",
    "Explore Patnitop Park.",
    "Visit Nathatop for panoramic Himalayan views.",
    "Take a day trip to Sanasar.",
    "Shop for local handicrafts and dry fruits.",
    "Taste authentic Dogra cuisine.",
  ];
  const facilities = [
    "Hotels & Resorts",
    "Restaurants & Cafés",
    "Parking and public washrooms",
    "Medical facilities and ATMs",
    "Local shops and children's play area",
    "Photography points",
  ];
  const faqs = [
    [
      "Is Patnitop suitable for families?",
      "Yes. Patnitop is family-friendly, with parks, open meadows and comfortable accommodation.",
    ],
    ["Does Patnitop receive snowfall?", "Yes. Snowfall usually occurs from December to February."],
    [
      "How many days are enough?",
      "A stay of 1–2 days is ideal for Patnitop and nearby attractions.",
    ],
    [
      "Is Patnitop worth visiting after Vaishno Devi?",
      "Absolutely. Many travellers combine Vaishno Devi with Patnitop, Nathatop and Sanasar.",
    ],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-5 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-16">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Udhampur District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="2,024 m / 6,640 ft"
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
              A quiet mountain retreat in the Shivaliks
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Nestled amidst the lush pine forests of the Shivalik Range, Patnitop is one of the
              most beautiful hill stations in Jammu &amp; Kashmir. Located in Udhampur District at
              an altitude of approximately 2,024 metres (6,640 feet), Patnitop is famous for its
              pleasant climate, scenic meadows, dense deodar forests and breathtaking Himalayan
              views. Situated on National Highway 44 between Jammu and Srinagar, it is a popular
              stop for tourists travelling to Kashmir and pilgrims visiting Shri Mata Vaishno Devi.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Patnitop offers a peaceful escape from city life with fresh mountain air, beautiful
              walking trails and panoramic viewpoints. During winter, the region receives snowfall,
              turning the landscape into a white wonderland. Visitors also use Patnitop as a base to
              explore Nathatop, Sanasar, Kud, Sudh Mahadev and Mantalai. Whether you are planning a
              family vacation, honeymoon or weekend getaway, Patnitop promises an unforgettable
              experience in the lap of nature.
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
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            From Patan Da Talab to Patnitop
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            The name Patnitop is believed to have originated from the phrase “Patan Da Talab,”
            meaning “The Pond of the Princess.” Over time, the name evolved into Patnitop. During
            the British era, it became a favoured summer retreat because of its cool climate and
            scenic surroundings. Today, Patnitop is one of the leading tourist destinations in the
            Jammu region, known for its natural beauty and tranquil environment.
          </p>
        </div>
      </section>

      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl sm:text-4xl">Slow down and explore</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {thingsToDo.map((activity) => (
                <p
                  key={activity}
                  className="border border-primary-foreground/15 p-4 text-sm leading-6 text-primary-foreground/80"
                >
                  {activity}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Best time to visit
            </p>
            <h2 className="display-serif mt-2 text-3xl sm:text-4xl">
              A different view each season
            </h2>
            <div className="mt-6 space-y-3">
              {[
                ["March–June", "Pleasant weather ideal for sightseeing and family vacations."],
                ["July–September", "Lush green landscapes after the monsoon."],
                ["October–November", "Clear skies with cool temperatures."],
                ["December–February", "Snowfall transforms Patnitop into a winter destination."],
              ].map(([season, detail]) => (
                <div key={season} className="border border-primary-foreground/15 p-4">
                  <p className="font-semibold text-gold">{season}</p>
                  <p className="mt-1 text-xs leading-5 text-primary-foreground/70">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            How to reach
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Follow NH-44 to the mountains
          </h2>
          <div className="mt-6 space-y-3">
            {[
              ["By air", "Jammu Airport is approximately 110 km away."],
              ["By train", "Udhampur Railway Station is approximately 47 km away."],
              [
                "By road",
                "Patnitop is well connected by NH-44 from Jammu, Udhampur, Katra and Srinagar by bus or taxi.",
              ],
            ].map(([title, detail]) => (
              <div key={title} className="border-l-2 border-gold bg-paper p-4">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-border bg-paper-deep p-5">
            <p className="font-semibold text-ink">Entry fee & timings</p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              There is no entry fee to visit Patnitop. It is open throughout the year and can be
              visited at any time.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Stay comfortable outdoors
          </h2>
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

      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Local taxi & sightseeing
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">
            Book reliable taxis for local sightseeing and nearby attractions. Services can be
            customised for your journey.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Jammu ⇄ Patnitop",
              "Katra ⇄ Patnitop",
              "Patnitop local sightseeing",
              "Nathatop, Sanasar & Kud tours",
              "Sudh Mahadev & Mantalai tours",
              "Airport and railway-station pickup & drop",
              "Customised tour packages",
            ].map((service) => (
              <p
                key={service}
                className="border border-border bg-paper p-4 text-sm font-semibold text-ink"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Nearby attractions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          Extend your mountain escape
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Nathatop · 14 km",
              "A scenic viewpoint known for Himalayan views and winter snowfall.",
            ],
            [
              "Sanasar · 20 km",
              "A picturesque meadow surrounded by forests, ideal for nature lovers.",
            ],
            ["Naag Mandir", "A centuries-old temple dedicated to the Serpent God."],
            ["Kud · 10 km", "A charming hill town famous for its delicious Patisa sweet."],
            [
              "Sudh Mahadev · 42 km",
              "An ancient Shiva temple attracting pilgrims throughout the year.",
            ],
            ["Mantalai · 45 km", "Known for its spiritual significance and natural beauty."],
          ].map(([place, detail]) => (
            <div key={place} className="border border-border bg-paper p-5 shadow-sm">
              <p className="display-serif text-xl text-ink">{place}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-5 lg:grid-cols-2">
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Local food to try
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Taste Dogra flavours</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Kaladi Kulcha, Rajma Chawal, Patisa (Kud Special), Dogra Thali, Khatta Meat and Kulhad
              Tea.
            </p>
          </div>
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Photography tips
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Frame the mountains</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Capture sunrise over the Himalayan ranges, winter snow-covered landscapes, pine
              forests, Naag Mandir and surrounding meadows. Sunset offers excellent views of the
              valleys.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Before you visit</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Quick facts
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Location: Udhampur District, Jammu & Kashmir",
              "Altitude: 2,024 metres (6,640 feet)",
              "Famous for: hill station, pine forests, snowfall and scenic beauty",
              "Best time: March–June & December–February",
              "Ideal trip duration: 1–2 days",
              "Nearest airport: Jammu Airport",
              "Nearest railway station: Udhampur Railway Station",
              "Distance: Jammu 110 km · Katra 80 km",
            ].map((fact) => (
              <p
                key={fact}
                className="border border-border bg-paper-deep p-4 text-xs leading-5 text-ink-soft"
              >
                {fact}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Patnitop?
          </p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">
            A refreshing retreat in every season
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Patnitop is the perfect destination for travellers seeking peace, natural beauty and a
            refreshing mountain retreat. Surrounded by towering pine forests, lush meadows and
            spectacular Himalayan views, it offers an ideal escape from city life. Whether
            you&apos;re planning a family holiday, romantic getaway or a stop on your journey
            through Jammu &amp; Kashmir, Patnitop promises unforgettable memories in every season.
          </p>
        </div>
      </section>
    </>
  );
}

function MansarLakeGuide() {
  const highlights = [
    "Beautiful freshwater lake",
    "Boating facilities",
    "Ancient Sheshnag Temple",
    "Umapati Mahadev Temple",
    "Lush green surroundings",
    "Birdwatching opportunities",
    "Lakeside walking paths",
    "Sunset viewpoints",
    "Annual Mansar Festival",
    "Family picnic spots",
  ];
  const activities = [
    "Enjoy a relaxing boat ride.",
    "Visit Sheshnag Temple.",
    "Seek blessings at Umapati Mahadev Temple.",
    "Walk around the scenic lakeside.",
    "Feed the fish where permitted.",
    "Watch migratory birds during winter.",
    "Enjoy family picnics.",
    "Shop for local handicrafts and souvenirs.",
    "Capture sunrise and sunset photographs.",
  ];
  const facilities = [
    "Parking",
    "Restaurants and cafés",
    "Boating facility",
    "Public washrooms",
    "Children's park and picnic areas",
    "Tourist information centre",
    "Souvenir shops",
    "Accommodation nearby",
  ];
  const faqs = [
    [
      "Is boating available at Mansar Lake?",
      "Yes. Paddle boats and family boats are available during operating hours.",
    ],
    [
      "Is Mansar Lake suitable for families?",
      "Yes. It is one of the best family picnic destinations in Jammu.",
    ],
    [
      "How much time is needed?",
      "A visit of 2–4 hours is enough to explore the lake and nearby temples.",
    ],
    [
      "Can I visit Mansar and Surinsar on the same day?",
      "Yes. Many visitors combine both lakes in a single day trip from Jammu.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-5 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-16">
        <InfoCard icon={<MapPin className="h-5 w-5" />} label="Location" value="Samba District" />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Distance from Jammu"
          value="Approximately 62 km"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="Half day to full day"
        />
      </section>
      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Overview
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              A sacred freshwater lake in the hills of Samba
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Nestled amidst the picturesque hills of Samba District in Jammu &amp; Kashmir, Mansar
              Lake is one of the region&apos;s most beautiful and sacred freshwater lakes. Located
              approximately 62 km from Jammu City, the lake is surrounded by lush green forests,
              rolling hills and serene landscapes, making it a favourite destination for nature
              lovers, pilgrims, photographers and families.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Spanning around 0.59 square kilometres, Mansar Lake is known for crystal-clear waters,
              rich biodiversity and religious significance. It is home to fish, turtles and
              migratory birds, making it an important ecological site. Local beliefs associate the
              lake with the Mahabharata, and it is considered sacred by Hindus.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Visitors can enjoy boat rides, lakeside walks, birdwatching and sunset views. The
              annual Mansar Festival brings cultural performances, adventure activities and local
              handicrafts. Whether you seek spiritual peace, natural beauty or a relaxing day trip
              from Jammu, Mansar Lake offers a memorable experience for all ages.
            </p>
          </div>
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Top highlights
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-burgundy text-[9px] font-bold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A lake connected to Sheshnag
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            According to Hindu mythology, Mansar Lake is believed to have originated during the
            Mahabharata era and is associated with Sheshnag, the divine serpent. Devotees believe
            that taking a holy dip in the lake and offering prayers at nearby temples brings
            prosperity, happiness and good fortune.
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            The lake has been an important pilgrimage and tourist destination for centuries and
            remains one of Jammu&apos;s most cherished natural attractions.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl sm:text-4xl">Spend a day by the water</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {activities.map((item) => (
                <p
                  key={item}
                  className="border border-primary-foreground/15 p-4 text-sm leading-6 text-primary-foreground/80"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Best time to visit
            </p>
            <h2 className="display-serif mt-2 text-3xl sm:text-4xl">The lake in every season</h2>
            <div className="mt-6 space-y-3">
              {[
                [
                  "October–March",
                  "Pleasant weather, ideal for sightseeing, boating and birdwatching.",
                ],
                ["April–June", "Warm days with beautiful greenery."],
                ["July–September", "The monsoon enhances scenic beauty, with occasional rainfall."],
              ].map(([season, detail]) => (
                <div key={season} className="border border-primary-foreground/15 p-4">
                  <p className="font-semibold text-gold">{season}</p>
                  <p className="mt-1 text-xs leading-5 text-primary-foreground/70">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            How to reach
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            An easy day trip from Jammu
          </h2>
          <div className="mt-6 space-y-3">
            {[
              ["By air", "Jammu Airport is approximately 62 km away."],
              ["By train", "Jammu Tawi Railway Station is approximately 60 km away."],
              [
                "By road",
                "Mansar Lake is well connected from Jammu, Samba, Kathua and Udhampur. Regular taxis and buses are available.",
              ],
            ].map(([title, detail]) => (
              <div key={title} className="border-l-2 border-gold bg-paper p-4">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-border bg-paper-deep p-5">
            <p className="font-semibold text-ink">Entry fee & timings</p>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              Entry to the lake area is generally free; separate charges may apply for boating and
              recreational activities. The lake area is open daily from 8:00 AM to 7:00 PM, with
              seasonal variation possible.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A relaxed family outing
          </h2>
          <div className="mt-6 space-y-3">
            {facilities.map((item) => (
              <p
                key={item}
                className="flex gap-3 border-b border-border pb-3 text-sm text-ink-soft"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-5 lg:grid-cols-2">
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Travel services
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Local taxi & sightseeing</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Explore Mansar Lake and nearby attractions with a comfortable taxi service. Jammu ⇄
              Mansar Lake, Katra ⇄ Mansar Lake, Samba ⇄ Mansar Lake, local sightseeing, Surinsar
              Lake and Purmandal tours, airport/railway pickup and customised packages are
              available.
            </p>
          </div>
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Boating information
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">See the lake from the water</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Paddle boats and shikara-style family boats operate on the lake. Approximate charges
              are ₹150–₹300 for paddle boats and ₹300–₹600 for family boats; charges may vary by
              season and local management.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Nearby attractions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Make a day of it</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Surinsar Lake",
            "Sheshnag Temple",
            "Umapati Mahadev Temple",
            "Purmandal Temple",
            "Samba Fort",
            "Jhajjar Kotli",
            "Nandini Wildlife Sanctuary",
          ].map((place) => (
            <div
              key={place}
              className="border border-border bg-paper p-4 text-sm font-semibold text-ink shadow-sm"
            >
              {place}
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-5 lg:grid-cols-2">
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Local food to try
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Taste Dogra flavours</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Rajma Chawal, Kaladi Kulcha, Dogra Thali, Khatta Meat, Kulhad Tea, and local sweets
              and snacks.
            </p>
          </div>
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Photography tips
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Capture calm waters</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Visit early for calm water and reflections. Sunset offers spectacular lake views;
              capture birds and turtles from designated viewing areas. Spring and winter provide the
              best natural scenery.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Before you go</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Quick facts
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Location: Samba District, Jammu & Kashmir",
              "Altitude: approximately 666 m / 2,185 ft",
              "Lake type: freshwater lake",
              "Famous for: boating, temples, birdwatching and natural beauty",
              "Best time: October–March",
              "Ideal trip duration: half day to full day",
              "Nearest airport: Jammu Airport",
              "Nearest railway station: Jammu Tawi Railway Station",
              "Distance from Jammu: approximately 62 km",
            ].map((fact) => (
              <p
                key={fact}
                className="border border-border bg-paper-deep p-4 text-xs leading-5 text-ink-soft"
              >
                {fact}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Mansar Lake?
          </p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">
            Spirituality, nature and recreation in one place
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Mansar Lake is a perfect blend of spirituality, natural beauty and recreation. Its
            peaceful waters, ancient temples, scenic surroundings and family-friendly atmosphere
            make it one of the most rewarding destinations in Jammu. Whether you&apos;re looking for
            a relaxing picnic, a spiritual visit or a scenic getaway, Mansar Lake promises a
            memorable experience in every season.
          </p>
        </div>
      </section>
    </>
  );
}

function DalLakeGuide() {
  const templeHighlights = [
    "Ancient Lord Shiva temple",
    "Located on Shankaracharya Hill",
    "Panoramic Srinagar city views",
    "Beautiful Dal Lake view",
    "Peaceful spiritual atmosphere",
    "Historic architecture",
    "Sunrise and sunset viewpoint",
    "Important pilgrimage site",
  ];
  const lakeHighlights = [
    "Famous shikara rides",
    "Traditional houseboats",
    "Floating vegetable markets",
    "Floating gardens",
    "Mountain reflections",
    "Mughal gardens nearby",
    "Scenic sunset views",
    "Photography spots",
    "Peaceful lakeside walks",
  ];
  const faqs = [
    [
      "Is Shankaracharya Temple worth visiting?",
      "Yes. It is one of Srinagar's most important spiritual and scenic attractions.",
    ],
    ["Is boating available at Dal Lake?", "Yes. Shikara rides are available throughout the day."],
    ["How much time is needed?", "A combined visit can take half a day to a full day."],
    [
      "Can families visit these places?",
      "Yes. Both destinations are suitable for families, senior citizens and children.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-5 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-16">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Srinagar, Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Best experience"
          value="Temple + lake in one day"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="Half day to full day"
        />
      </section>
      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Spirituality above the lake
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-ink-soft">
            Located in the heart of Srinagar, Jammu &amp; Kashmir, Shankaracharya Temple and Dal
            Lake are two of the Kashmir Valley&apos;s most iconic attractions. Together, they
            represent spirituality, history, culture and natural beauty. The temple sits on
            Shankaracharya Hill with sweeping views of Srinagar, Dal Lake and the Himalayan ranges;
            at its foot lies the world-famous lake, known for peaceful waters, colourful shikaras,
            houseboats and floating markets. They attract pilgrims, nature lovers, photographers and
            travellers from around the world.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Shankaracharya Temple
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A sacred hilltop viewpoint
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Also known as Jyestha Shankaracharya Temple, this is one of Kashmir&apos;s oldest and
            most respected Hindu temples. Dedicated to Lord Shiva, it stands about 1,000 feet above
            Srinagar on Shankaracharya Hill. Its peaceful surroundings, ancient architecture and
            panoramic Kashmir Valley views make it a memorable spiritual and historical landmark.
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            The temple has ancient origins and is traditionally linked to Adi Shankaracharya. The
            hill and temple have been important centres of Shaivism for centuries. Renovated across
            different periods, it remains a significant place of worship and an exceptional way to
            understand Srinagar&apos;s landscape.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {templeHighlights.map((item) => (
              <p key={item} className="border border-border bg-paper p-4 text-sm text-ink">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="border border-border bg-paper-deep p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
            Temple visit
          </p>
          <h3 className="display-serif mt-2 text-2xl text-ink">Things to do</h3>
          <div className="mt-5 space-y-3 text-sm leading-6 text-ink-soft">
            {[
              "Offer prayers at the temple.",
              "Enjoy panoramic views of Srinagar.",
              "Photograph Dal Lake and the mountains.",
              "Experience the peaceful hilltop atmosphere.",
              "Learn about Kashmir's spiritual heritage.",
              "Watch sunrise or sunset from the viewpoint.",
            ].map((item) => (
              <p key={item} className="border-b border-border pb-3">
                {item}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-soft">
            March–June brings pleasant weather and clear views; July–September offers green
            surroundings; October–February brings beautiful but cold winter scenery. Morning and
            evening are best for peaceful visits and excellent views.
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Srinagar International Airport is about 15 km away, Srinagar Railway Station about 13 km
            away, and taxis/local transport connect the temple with the city. Entry is generally
            free, with security procedures before entry; it is usually open from morning to evening.
            Parking, security, drinking water, nearby shops and local transport are available.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Dal Lake</p>
            <h2 className="display-serif mt-2 text-3xl sm:text-4xl">The Jewel of Srinagar</h2>
            <p className="mt-5 text-sm leading-7 text-primary-foreground/80">
              Dal Lake is one of India&apos;s most famous and beautiful lakes, often called the
              “Jewel of Srinagar.” Surrounded by mountains, gardens and traditional Kashmiri houses,
              it is a symbol of Kashmir&apos;s natural beauty and cultural identity. Colourful
              shikaras, houseboats, floating gardens and unique floating markets create an
              unforgettable view of peaceful Kashmiri life.
            </p>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
              The lake has supported fishing, tourism and floating agriculture for centuries. Over
              time it became one of Kashmir&apos;s most recognised symbols, attracting visitors from
              across India and the world.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {lakeHighlights.map((item) => (
                <p
                  key={item}
                  className="border border-primary-foreground/15 p-4 text-sm text-primary-foreground/85"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              On the lake
            </p>
            <h3 className="display-serif mt-2 text-2xl">Things to do</h3>
            <div className="mt-5 space-y-3 text-sm leading-6 text-primary-foreground/75">
              {[
                "Enjoy a relaxing shikara ride.",
                "Stay overnight in a traditional houseboat.",
                "Visit floating markets.",
                "Photograph the scenic surroundings.",
                "Explore nearby Mughal gardens.",
                "Enjoy sunrise and sunset views.",
                "Experience traditional Kashmiri culture.",
              ].map((item) => (
                <p key={item} className="border-b border-primary-foreground/15 pb-3">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-primary-foreground/75">
              March–June is ideal for sightseeing; July–September offers green landscapes;
              October–February brings winter scenery and possible snow. Visit early morning for calm
              waters or evening for sunset views.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Dal Lake access
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Easy to reach across Srinagar
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Srinagar International Airport is approximately 13 km away and Srinagar Railway Station
            about 12 km away. Dal Lake is accessible from all parts of Srinagar by taxi, bus and
            local transport. Entry to the lake area is generally free; shikara rides and houseboat
            stays are charged separately.
          </p>
          <div className="mt-6 border border-border bg-paper p-5">
            <p className="font-semibold text-ink">Boating information</p>
            <p className="mt-2 text-sm leading-7 text-ink-soft">
              Traditional shikara rides are available. Approximate charges: ₹500–₹800 for a short
              ride and ₹800–₹1,500 for a longer ride. Prices vary by season, duration and local
              operators.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Plan a comfortable visit
          </h2>
          <div className="mt-6 space-y-3">
            {[
              "Shikara services",
              "Houseboat accommodation",
              "Restaurants and cafés",
              "Parking areas",
              "Tourist information centres",
              "Local shopping stalls",
              "Photography points",
            ].map((item) => (
              <p
                key={item}
                className="flex gap-3 border-b border-border pb-3 text-sm text-ink-soft"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-5 lg:grid-cols-2">
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Nearby attractions
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Keep exploring Srinagar</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Mughal Gardens, Nishat Bagh, Shalimar Bagh, Hazratbal Shrine, Pari Mahal, Nigeen Lake
              and Shankaracharya Temple are all rewarding additions to a Dal Lake day.
            </p>
          </div>
          <div className="border border-border bg-paper p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Food & photography
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink">Taste and frame Kashmir</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Try Rogan Josh, Kashmiri Pulao, Kahwa, Wazwan dishes, Yakhni, Kaladi Kulcha and
              Kashmiri sweets. For photographs, visit early for mirror-like reflections, capture
              shikaras at sunrise/sunset, use Shankaracharya viewpoints for aerial views, and return
              in winter or spring for distinctive landscapes.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Before you visit</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Temple quick facts
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Srinagar · Dedicated to Lord Shiva · approximately 1,000 feet above Srinagar · famous
              for spiritual importance and valley views · ideal visit 1–2 hours.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Lake quick facts
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Srinagar · freshwater urban lake · famous for shikaras, houseboats and floating
              markets · best time March–June · ideal visit 2–4 hours.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Why visit?</p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">The true essence of Kashmir</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Shankaracharya Temple and Dal Lake together showcase Kashmir&apos;s spirituality,
            breathtaking landscapes and rich cultural heritage. The temple offers peace and
            magnificent views, while Dal Lake provides a unique experience of Kashmiri tradition and
            natural beauty. A journey to both creates unforgettable memories of the paradise of
            Jammu &amp; Kashmir.
          </p>
        </div>
      </section>
    </>
  );
}

function DoodpathriGuide() {
  const highlights = ["Doodpathri Meadows", "Shaliganga River", "Alpine landscapes", "Pine and deodar forests", "Snow-covered mountains", "Scenic viewpoints", "Horse riding", "Picnic spots", "Walking trails", "Photography locations"];
  const things = ["Walk through green meadows.", "Sit beside the Shaliganga River.", "Try horse riding around the valley.", "Enjoy family picnics.", "Photograph mountain scenery.", "Explore nearby forests.", "Have Kashmiri tea and snacks.", "Experience snowfall in winter.", "Spend peaceful time in nature."];
  return <><section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14"><InfoCard icon={<MapPin className="h-5 w-5" />} label="Location" value="Khansahib Area, Budgam District" /><InfoCard icon={<Compass className="h-5 w-5" />} label="Altitude" value="Approximately 2,730 metres (8,957 feet)" /><InfoCard icon={<CalendarDays className="h-5 w-5" />} label="From Srinagar" value="Approximately 40–45 km · 1.5–2 hours" /></section><section className="bg-paper px-5 py-12 lg:px-10 lg:py-16"><div className="mx-auto max-w-[1220px]"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Overview</p><h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Kashmir&apos;s Valley of Milk</h2><div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft"><p>Doodpathri, in Budgam&apos;s Khansahib area, is one of Kashmir&apos;s most beautiful lesser-explored valleys. Known as the “Valley of Milk,” it is famed for wide green meadows, crystal-clear streams, pine and deodar forests, and Himalayan views.</p><p>At approximately 2,730 metres (8,957 feet), it offers a peaceful alternative to crowded destinations. Snowy peaks, alpine landscapes, and rivers make an ideal setting for nature lovers, photographers, families, and adventurers. The approach through villages, forests, and mountain roads is part of the experience.</p></div></div></section><section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p><div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft"><p>Local tradition links the name to “Dood” (milk) and “Pathri” (stone). Kashmiri saint Sheikh-ul-Alam Sheikh Noor-ud-din Noorani is believed to have found a stream here whose water looked white as milk flowing over stones.</p><p>Shepherd communities historically used the valley&apos;s lush meadows for grazing. Today it is an eco-tourism destination that retains its natural charm and peaceful mountain-community character.</p></div></section><section className="bg-cream px-5 py-12 lg:px-10 lg:py-16"><div className="mx-auto max-w-[1220px]"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Suggested route</p><h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Srinagar → Budgam → Khansahib → Doodpathri</h2><div className="mt-6 grid gap-4 md:grid-cols-3"><InfoCard icon={<Compass className="h-5 w-5" />} label="Srinagar to Budgam" value="Kashmir villages, agricultural fields, traditional houses, and mountain landscapes — a quieter side of Kashmir." /><InfoCard icon={<Compass className="h-5 w-5" />} label="Budgam to Khansahib" value="The road enters foothills with forest and mountain views alongside peaceful villages." /><InfoCard icon={<Compass className="h-5 w-5" />} label="Khansahib to Doodpathri" value="Pine forests, streams, winding roads, and green hills open into wide meadows surrounded by mountains." /></div></div></section><section className="bg-paper px-5 py-12 lg:px-10 lg:py-16"><div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Top highlights</p><ul className="mt-4 grid gap-3 text-sm leading-6 text-ink-soft">{highlights.map(x => <li key={x} className="border-l-2 border-gold pl-3">{x}</li>)}</ul></div><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Things to do</p><ul className="mt-4 grid gap-3 text-sm leading-6 text-ink-soft">{things.map(x => <li key={x} className="border-l-2 border-gold pl-3">{x}</li>)}</ul></div></div></section><section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Best time to visit</p><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["April–June", "Pleasant weather, green meadows, families and sightseeing."], ["July–September", "Lush landscapes for photography and walks."], ["October–November", "Autumn colours and fewer crowds."], ["December–March", "Snow-covered beauty; roads depend on snowfall."]].map(([a,b]) => <InfoCard key={a} icon={<CalendarDays className="h-5 w-5" />} label={a} value={b} />)}</div></section><section className="bg-paper px-5 py-12 lg:px-10 lg:py-16"><div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-3"><InfoCard icon={<Compass className="h-5 w-5" />} label="By air" value="Srinagar International Airport, 40–45 km; taxis available." /><InfoCard icon={<Compass className="h-5 w-5" />} label="By train" value="Srinagar Railway Station (Nowgam), approximately 45 km." /><InfoCard icon={<Compass className="h-5 w-5" />} label="By road" value="Srinagar → Budgam → Khansahib → Doodpathri by taxi, rental, tourist cab, or local transport to nearby areas." /></div><div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2"><InfoCard icon={<Stamp className="h-5 w-5" />} label="Entry fee" value="Free; pony rides, activities, and parking can have charges." /><InfoCard icon={<CalendarDays className="h-5 w-5" />} label="Timings" value="Daylight visits, recommended 8:00 AM–6:00 PM; winter access depends on road conditions." /></div></section><section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16"><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Facilities & travel services</p><p className="mt-3 text-sm leading-7 text-ink-soft">Parking · Local food stalls · Tea shops · Pony services · Guides · Rest areas · Limited nearby accommodation · Limited washrooms. Services include Srinagar Airport, city tour, Doodpathri day trip, Gulmarg, Pahalgam, Sonamarg, Budgam, and custom Kashmir packages.</p><p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Adventure activities</p><p className="mt-3 text-sm leading-7 text-ink-soft">Horse riding · Nature walks · Trekking · Photography · Camping where permitted · Birdwatching · Picnics</p></div><div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Nearby attractions</p><p className="mt-3 text-sm leading-7 text-ink-soft">Yusmarg · Khansahib · Budgam · Tosamaidan · Srinagar City · Dal Lake · Pari Mahal · Mughal Gardens</p><p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Food & photography</p><p className="mt-3 text-sm leading-7 text-ink-soft">Kashmiri Wazwan · Rogan Josh · Gushtaba · Yakhni · Kahwa · Noon Chai · Kashmiri breads · Kaladi Kulcha. Photograph Shaliganga, meadows, trails, viewpoints, and horse-riding areas; morning gives clear mountains and evening gives golden valley light.</p></div></section><section className="bg-cream px-5 py-12 lg:px-10 lg:py-16"><div className="mx-auto max-w-[1220px]"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">Frequently asked questions</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{[["Why is Doodpathri famous?", "Green meadows, streams, forests, and peaceful Himalayan scenery."], ["How much time is needed?", "A Srinagar day trip works, while an overnight stay is more peaceful."], ["Is it family friendly?", "Yes, thanks to open spaces, scenery, and peaceful atmosphere."], ["Is it better than crowded destinations?", "It is ideal for travellers who prefer untouched nature and fewer crowds."]].map(([q,a]) => <div key={q} className="border border-border bg-paper p-5"><p className="font-semibold text-ink">{q}</p><p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p></div>)}</div><p className="mt-8 text-sm leading-7 text-ink-soft"><strong className="text-ink">Quick facts:</strong> Khansahib, Budgam · 2,730 metres · 40–45 km from Srinagar · meadows, Shaliganga, forests, scenery · best April–September · 1 day · Srinagar Airport and Railway Station.</p></div></section><section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16"><div className="mx-auto max-w-[1220px]"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Why visit Doodpathri?</p><p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">Doodpathri is one of Kashmir&apos;s most peaceful valleys — nature, adventure, and tranquillity without crowds. Endless meadows, rivers, forests, and mountain views create an authentic Himalayan escape where simplicity and serenity meet.</p></div></section></>;
}

function JammuCityWalkGuide() {
  const stops = [
    [
      "1. Mubarak Mandi Heritage Complex",
      "Panjtirthi · 1–1.5 hours. Dogra Maharajas' former official residence, with courtyards, halls, temples, museums, historic architecture, and city views.",
    ],
    [
      "2. Hari Niwas Palace",
      "Palace Road · 30–45 minutes. Dogra royal heritage near Tawi River, with royal architecture and scenic surroundings.",
    ],
    [
      "3. Raghunath Bazaar",
      "45 minutes–1 hour. A historic market for dry fruits, Kashmiri handicrafts, woollens, jewellery, spices, religious souvenirs, street food, and old-city atmosphere.",
    ],
    [
      "4. Raghunath Temple",
      "45 minutes. Dogra-built shrine complex with Lord Rama shrine, gold-plated interiors, ancient scriptures, architecture, and a peaceful spiritual atmosphere.",
    ],
    [
      "5. Bahu Fort",
      "Bahu Fort Road · 1 hour. Ancient hilltop fort overlooking Tawi River, with city views and Bawe Wali Mata Temple.",
    ],
    [
      "6. Bawe Wali Mata Temple",
      "Inside Bahu Fort · 30 minutes. Respected Goddess Kali temple with traditional rituals and thousands of year-round devotees.",
    ],
    [
      "7. Bagh-e-Bahu",
      "Bahu Fort Road · 1 hour. Terraced gardens, fountains, city views, family walks, evening ambience, and photography.",
    ],
    [
      "8. Jammu Ropeway",
      "Bahu Fort–Mahamaya Temple route · 30–45 minutes. Aerial Tawi River, Bahu Fort, hill, and city views.",
    ],
    [
      "9. Tawi Riverfront Aarti & Walk",
      "Evening. A peaceful riverfront for walks, relaxation, cultural atmosphere, and sunset photographs.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Jammu City, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Classification"
          value="Heritage & City Walk"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="Half day to 1 day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            The soul of the City of Temples
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Jammu City Walk journeys through the heritage, spirituality, royal history, culture,
              and scenic beauty of Jammu, the winter capital of Jammu &amp; Kashmir. Along the Tawi
              River, Jammu is known as the City of Temples and gateway to major pilgrimage and
              tourist destinations.
            </p>
            <p>
              The walk connects Dogra legacy, ancient temples, palaces, markets, and modern
              attractions: Mubarak Mandi, Hari Niwas, Raghunath Bazaar and Temple, Bahu Fort, Bawe
              Wali Mata, Bagh-e-Bahu, Ropeway, and Tawi Riverfront. It is made for history lovers,
              spiritual travellers, photographers, or visitors en route to Vaishno Devi.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Jammu has more than a millennium of cultural, trade, and spiritual history. Its golden
            period under Dogra rulers produced palaces, temples, forts, and civic buildings. Mubarak
            Mandi, their royal residence, combines Rajasthani, Mughal, European, and Dogra
            architecture.
          </p>
          <p>
            The 19th-century Raghunath Temple and historic Bahu Fort and Bawe Wali Mata Temple
            reflect the city&apos;s enduring spiritual and historical importance. Jammu evolved from
            royal capital to modern city while retaining traditions, festivals, and cultural
            identity.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Recommended route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Walk the heritage trail
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stops.map(([t, d]) => (
              <InfoCard key={t} icon={<Compass className="h-5 w-5" />} label={t} value={d} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Things to do
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Explore royal heritage · Visit ancient temples · Walk traditional markets · Enjoy Dogra
            cuisine · Take Bahu Fort evening views · Ride the ropeway · Experience Tawi Riverfront ·
            Shop handicrafts · Photograph heritage and city landscapes.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Best time to visit
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">October–March:</strong> best walking season, pleasant
            weather, ideal sightseeing and photography.{" "}
            <strong className="text-ink">April–June:</strong> good in mornings/evenings; afternoons
            can be warm. <strong className="text-ink">July–September:</strong> green surroundings
            with occasional rain.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested travel plan
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Half day:</strong> Morning — Mubarak Mandi, Hari Niwas,
            Raghunath Bazaar &amp; Temple. Evening — Bahu Fort, Bawe Wali Mata, Bagh-e-Bahu, Tawi
            Riverfront.
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Full day:</strong> 9:00 Mubarak Mandi · 11:00 Hari Niwas ·
            12:00 Bazaar &amp; Temple · 2:00 Dogra lunch · 3:30 Bahu Fort &amp; Mata · 5:00 Ropeway
            · 6:00 Riverfront walk.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 7–8 km from city centre; taxis are available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Jammu Tawi connects with Delhi, Chandigarh, Amritsar, Mumbai, Kolkata, and other cities."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Well connected with Delhi, Chandigarh, Amritsar, Srinagar, Katra, and Patnitop by buses, taxis, and private vehicles."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities & travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Hotels, budget stays, restaurants, markets, parking, information centres, local taxis,
            auto-rickshaws, medical facilities, and guided heritage tours. Available services:
            airport and rail pickup/drop, heritage walk, Mubarak Mandi, Raghunath Temple, Bahu Fort,
            Bagh-e-Bahu, local sightseeing, Patnitop, Shiv Khori, Vaishno Devi, and custom Jammu
            packages.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Try Rajma Chawal, Kaladi Kulcha, Khatta Meat, Dogra Thali, Ambal, Patisa, Gol Gappe,
            Lassi, and traditional sweets. Photograph Mubarak Mandi, Bazaar streets, Bahu Fort
            viewpoint, Tawi sunset, Ropeway, and temple architecture in early morning/evening; avoid
            restricted temple areas.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Frequently asked questions
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "How much time is required?",
                "Half a day covers the major stops; a full day is a more relaxed exploration.",
              ],
              [
                "Is it suitable for families?",
                "Yes, including families, senior citizens, photographers, and heritage lovers.",
              ],
              [
                "Can it be combined with Vaishno Devi?",
                "Yes. Many travellers explore Jammu before heading to Katra.",
              ],
              [
                "Best starting point?",
                "Mubarak Mandi Heritage Complex, for the clearest introduction to Jammu's royal history.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Jammu City · Jammu district ·
            Heritage &amp; City Walk · Dogra heritage, temples, palaces, markets, and Tawi views ·
            half day–1 day · best October–March · Jammu Airport and Jammu Tawi Railway Station.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Jammu City Walk?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            This is more than sightseeing: a journey through history, devotion, and culture. Royal
            Mubarak Mandi and Hari Niwas, Raghunath and Bawe Wali Mata temples, markets, viewpoints,
            local food, and the Tawi River together introduce the heart and soul of Dogra land.
          </p>
        </div>
      </section>
    </>
  );
}

function SarthalValleyGuide() {
  const highlights = [
    "Sarthal Meadows",
    "Sarthal Devi Temple",
    "Snow-covered mountain views",
    "Deodar forests",
    "Mountain streams",
    "Sarthal waterfalls",
    "Bani Valley landscapes",
    "Traditional villages",
    "Scenic trekking routes",
    "Peaceful camping spots",
  ];
  const things = [
    "Explore the vast green meadows.",
    "Camp under the stars.",
    "Visit Sarthal Devi Temple.",
    "Take forest nature walks.",
    "Photograph mountains and valleys.",
    "Experience village culture.",
    "Picnic beside streams.",
    "Trek nearby mountain trails.",
    "Explore Bani Valley and surroundings.",
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Bani Tehsil, Kathua District, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Around 7,000 feet (2,150 metres)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Distance from Bani"
          value="Approximately 20 km"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            An untouched high-altitude meadow
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In Kathua&apos;s Bani region, Sarthal Valley is one of Jammu&apos;s most beautiful and
              unexplored high-altitude meadows. At around 7,000 feet (2,150 metres), it is
              surrounded by snowy mountains, deodar forests, green pastures, and crystal-clear
              streams.
            </p>
            <p>
              Snow covers it for months in winter; summer turns it into a lush green paradise.
              Connected with Bani, Bhaderwah, and Himachal Pradesh, Sarthal offers fresh mountain
              air, village life, trekking, waterfalls, and Pir Panjal views — an ideal hidden
              Himalayan retreat for families, adventurers, and photographers.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Journey from Kathua
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          Kathua → Lakhanpur → Basohli → Bani → Sarthal
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="1. Kathua to Basohli"
            value="Pass through historic Basohli, with Ravi River views, hills, heritage, Basohli paintings, and scenic surroundings."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="2. Basohli to Bani"
            value="Deep valleys, streams, waterfalls, forests, curving roads, and viewpoints. Bani, around 4,200 feet, is the gateway to high-altitude destinations."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="3. Bani to Sarthal"
            value="About 20 km through mountain terrain to open meadows. Deodars give way to grasslands, snowy peaks, streams, cool air, and ideal photo stops."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              History
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Sarthal traditionally served as a seasonal grazing area for shepherd communities. It
              reflects Bani&apos;s mountain lifestyle, folk traditions, and close connection to
              nature. Sarthal Devi Temple holds religious importance among local devotees.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((x) => (
                <li key={x} className="border-l-2 border-gold pl-3">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink-soft">
              {things.map((x) => (
                <li key={x} className="border-l-2 border-gold pl-3">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["April–June", "Pleasant weather, green meadows, ideal for family trips."],
            ["July–September", "Lush greenery; best for camping, photography, and nature lovers."],
            ["October–November", "Autumn colours and clear mountain views."],
            [
              "December–March",
              "Heavy snowfall and winter scenery; road access depends on weather.",
            ],
          ].map(([a, b]) => (
            <InfoCard key={a} icon={<CalendarDays className="h-5 w-5" />} label={a} value={b} />
          ))}
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 250 km away."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Kathua Railway Station; Sarthal is approximately 170 km from the station."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Kathua → Basohli → Bani → Sarthal by private vehicle, taxi, or local transport to Bani."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Free; camping, guides, and adventure activities may have charges."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Visit in daylight, recommended 8:00 AM–6:00 PM; access depends on snow and weather."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities & travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Limited guest houses · Homestays · Camping · Seasonal food stalls · Parking · Guides ·
            Taxis · Basic medical facilities. Available taxis and sightseeing include Kathua, Jammu
            Airport, Kathua Railway Station, Basohli, Bani, Sarthal, Dhaggar, Chattergala,
            Bhaderwah, and custom Jammu mountain packages.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Adventure activities
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Trekking · Camping · Hiking · Nature walks · Photography · Birdwatching · Village
            exploration · Off-road mountain drives. The Bani–Sarthal–Bhaderwah route is a scenic
            mountain trekking route.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Bani Valley · Dhaggar · Chattergala Pass · Basohli · Ranjit Sagar Dam · Bhaderwah Valley
            · Kailash Kund Trek Route · Sarthal Devi Temple
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Rajma Chawal · Kaladi Kulcha · Madra · Khatta Meat · Ambal · Dogra cuisine · Kahwa ·
            fresh dairy products. Photograph meadows, snowy peaks, trails, streams, traditional
            houses, and sunrise/sunset; summer is vivid green and winter a snow-covered world.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Frequently asked questions
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Where is Sarthal Valley?", "In Bani tehsil, Kathua district, Jammu & Kashmir."],
              ["How far from Bani?", "Approximately 20 km."],
              ["How much time is needed?", "1–2 days is ideal."],
              [
                "Is it family friendly?",
                "Yes, for families, couples, photographers, and nature lovers.",
              ],
              ["Does it snow?", "Yes. It remains snow-covered for several winter months."],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Bani Tehsil, Kathua · 2,150 metres ·
            route Kathua–Basohli–Bani–Sarthal · meadows, snow, forests, waterfalls, Himalayan views
            · best April–September · ideal 1–2 days · nearest airport Jammu · nearest railway
            station Kathua.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Sarthal Valley?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Sarthal is a hidden jewel of Jammu &amp; Kashmir — natural beauty, adventure,
            spirituality, and peace. The Kathua-to-Bani journey is already a memorable mountain
            experience; away from crowded destinations, the valley offers authentic culture,
            untouched meadows, fresh air, and spectacular landscapes.
          </p>
        </div>
      </section>
    </>
  );
}

function MachailMataGuide() {
  const highlights = [
    "Shri Chandi Mata (Machail Mata) Temple",
    "Scenic Paddar Valley",
    "Snow-capped Himalayan peaks",
    "Traditional wooden Himalayan villages",
    "Chenab River landscapes",
    "Beautiful waterfalls",
    "Spiritual yatra atmosphere",
    "Mountain trails",
    "Paddar culture",
    "Peaceful surroundings",
  ];
  const things = [
    "Seek blessings at Shri Chandi Mata Temple.",
    "Participate in the annual Machail Mata Yatra.",
    "Explore Paddar Valley.",
    "Photograph Himalayan landscapes.",
    "Visit nearby waterfalls and mountain streams.",
    "Experience Paddar culture and local customs.",
    "Enjoy nature walks and short treks around Machail.",
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Machail Village, Paddar Valley, Kishtwar District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,900 metres (9,514 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal trip duration"
          value="2–3 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A sacred journey through Paddar Valley
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Machail Mata Yatra is one of the most revered pilgrimages in the Chenab Valley. The
              shrine of Shri Chandi Mata is in Machail village, Paddar Valley, Kishtwar district, at
              approximately 2,900 metres (9,514 feet). Snow-clad peaks, forests, waterfalls, and the
              pristine Chenab River basin surround a shrine that draws thousands every year.
            </p>
            <p>
              Dedicated to Goddess Chandi (Durga), the temple is believed to fulfil wishes of
              devotees who arrive with faith. The annual yatra in Shravan (July–August) is the main
              event. It offers spiritual blessings, Himalayan scenery, and an adventurous
              pilgrimage.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          A living tradition of Maa Chandi
        </h2>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Local tradition says the idol of Maa Chandi was brought to Machail centuries ago by a
            local devotee. The shrine has since become an important worship centre for the Chenab
            Valley and surrounding regions.
          </p>
          <p>
            The annual pilgrimage gained wider recognition through late promoter Sh. Sohan Singh,
            who encouraged better pilgrim facilities. Today the administration and Shri Machail Mata
            Yatra Management Committee support a safe, well-managed yatra.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Plan your yatra
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Top highlights</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((x) => (
                <li key={x} className="border-l-2 border-gold pl-3">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Devotion and discovery
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {things.map((x) => (
                <li key={x} className="border-l-2 border-gold pl-3">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["July–August", "Annual yatra and pleasant weather."],
            ["May–June", "Sightseeing and valley exploration."],
            ["September–October", "Clear skies and mountain views."],
            ["November–April", "Heavy snow may restrict road access."],
          ].map(([a, b]) => (
            <InfoCard key={a} icon={<CalendarDays className="h-5 w-5" />} label={a} value={b} />
          ))}
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 300 km away."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Shri Mata Vaishno Devi Katra station (about 280 km) or Jammu Tawi (about 290 km)."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Jammu – Kishtwar – Gulabgarh – Machail. During yatra, special buses and taxis run to Gulabgarh, then road or foot travel continues by conditions."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry & registration"
            value="Temple entry is free. Yatra registration may be required under latest authority guidelines."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Temple timings"
            value="Generally 6:00 AM–8:00 PM; darshan can be extended during yatra."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Free langar during yatra · Accommodation camps · Medical camps · Drinking water ·
            Washrooms · Security · Registration counters · Designated parking · Pony services where
            available · Emergency rescue services
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Jammu Airport and Railway Station pickup &amp; drop · Kishtwar tour · Paddar Valley tour
            · Machail Mata transport · Gulabgarh transfers · Customised Chenab Valley packages.
            Contact person and phone details can be added here.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Pony & trekking services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Pilgrims can opt for pony services where available, porter services, local guides, and
            trekking assistance. Charges vary by route and are regulated by authorities during the
            yatra.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Paddar Valley · Gulabgarh · Sapphire Mines of Paddar (restricted) · Atholi Village ·
            Chenab River · Sarthal Valley · Kishtwar National Park
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Rajma Chawal · Kaladi Kulcha · Ambal · Madra · Khatta Meat · Desi Ghee Roti · Kulhad
            Lassi · Paddari cuisine. Photograph valley landscapes, wooden houses, waterfalls, and
            peaks early in the day; respect sanctum photography restrictions.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Frequently asked questions
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "What is Machail Mata famous for?",
                "The sacred Goddess Chandi shrine and annual Shravan yatra.",
              ],
              [
                "How long does it take?",
                "Most pilgrims complete it in 2–3 days, depending on itinerary and travel.",
              ],
              [
                "Is it suitable for senior citizens?",
                "Yes, but high altitude and mountain roads make a doctor consultation advisable; use transport or ponies where required.",
              ],
              [
                "Is accommodation available?",
                "Yes. Guest houses, camps, dharamshalas, and temporary yatra accommodation are available.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Machail Village, Paddar Valley,
            Kishtwar · 2,900 metres · about 110 km from Kishtwar · famous for Shri Chandi Mata
            Temple and annual yatra · best July–August · nearest airport Jammu · nearest railway
            stations Katra/Jammu Tawi.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Machail Mata Yatra?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            This journey unites devotion, adventure, and natural beauty in Paddar Valley. For
            devotees seeking Maa Chandi&apos;s blessings or travellers discovering Himalayan culture
            and scenery, Machail Mata offers a deeply memorable and enriching pilgrimage.
          </p>
        </div>
      </section>
    </>
  );
}

function PeerKiGaliGuide() {
  const highlights = [
    "Peer Baba Shrine",
    "Historic Mughal Road",
    "Panoramic Himalayan views",
    "Snow-covered landscapes (winter)",
    "Alpine meadows",
    "Scenic mountain drive",
    "Pir Panjal Range",
    "Photography viewpoints",
    "Wildflowers during summer",
    "Cool mountain climate",
  ];
  const things = [
    "Visit the Peer Baba Shrine.",
    "Enjoy a scenic drive along the Mughal Road.",
    "Admire views of the Pir Panjal Range.",
    "Capture landscape photographs.",
    "Experience snowfall during winter, subject to access.",
    "Relax amidst alpine meadows.",
    "Stop at viewpoints for walks and sightseeing.",
    "Enjoy local tea and snacks at seasonal roadside stalls.",
  ];
  const faqs = [
    [
      "What is Peer Ki Gali famous for?",
      "Its scenic mountain pass, Peer Baba Shrine, Himalayan views, and location on the historic Mughal Road.",
    ],
    [
      "How much time is required?",
      "Most visitors spend 1–2 hours for the shrine, views, and photographs; it is often part of a Mughal Road day trip.",
    ],
    [
      "Is it suitable for families?",
      "Yes. Families can enjoy the drive, summer weather, and beautiful viewpoints.",
    ],
    [
      "Is it open throughout the year?",
      "No. It is generally accessible from late spring to autumn; winter snowfall often closes Mughal Road.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Between Shopian and Bufliaz, Pir Panjal Range"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 3,490 metres (11,450 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal trip duration"
          value="1–2 hours, or part of a Mughal Road tour"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            High on the historic Mughal Road
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Nestled in the majestic Pir Panjal Range, Peer Ki Gali is a breathtaking mountain pass
              at approximately 3,490 metres (11,450 feet) on the historic Mughal Road. Between
              Shopian and Bufliaz, it is one of the highest and most scenic points on the route
              linking the Kashmir Valley and Jammu region.
            </p>
            <p>
              Named for Sufi saint Sheikh Ahmad Karim, popularly Peer Baba, it is known for
              spiritual significance, Himalayan panoramas, meadows, snowy peaks, and a cool mountain
              climate. Summer brings wildflowers and grasslands; winter transforms it into
              snow-covered wonderland. It is a memorable destination for road-trip lovers,
              photographers, pilgrims, and nature lovers.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">The pass of Peer Baba</h2>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Peer Ki Gali takes its name from Sheikh Ahmad Karim (Peer Baba), who is believed to have
            meditated here. A small shrine at the pass is visited by travellers seeking blessings
            for a safe journey.
          </p>
          <p>
            The pass lies on Mughal Road, used by emperors including Jahangir when travelling
            between Delhi, Lahore, and Kashmir. The revived highway remains an important scenic
            connection between Pir Panjal and Kashmir Valley.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Plan your visit
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Top highlights</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((x) => (
                <li key={x} className="border-l-2 border-gold pl-3">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              A scenic mountain stop
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {things.map((x) => (
                <li key={x} className="border-l-2 border-gold pl-3">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["May–June", "Pleasant weather and green landscapes."],
            ["July–September", "Ideal for sightseeing and photography."],
            ["October", "Autumn scenery before snowfall."],
            ["November–April", "Heavy snow may close the road."],
          ].map(([a, b]) => (
            <InfoCard key={a} icon={<CalendarDays className="h-5 w-5" />} label={a} value={b} />
          ))}
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar International Airport, approximately 90 km via Shopian."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Srinagar Railway Station (Nowgam), approximately 85 km away."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="On Mughal Road (NH-144A), accessible from Shopian, Bufliaz, Rajouri, Poonch, and Srinagar in the open season."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard icon={<Stamp className="h-5 w-5" />} label="Entry fee" value="Free" />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open throughout the day during the road's operational season; access depends on weather and road conditions."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Limited parking · Seasonal tea stalls · Limited public washrooms · Local taxis · Scenic
            viewpoints · Shrine area · Seasonal police and emergency assistance
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Taxi and sightseeing: Srinagar pickup &amp; drop, Shopian sightseeing, Mughal Road tour,
            Peer Ki Gali visit, Bufliaz excursion, Hirpora Wildlife Sanctuary, Poonch, and
            customised Mughal Road packages. Contact person and phone can be added here.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Hirpora Wildlife Sanctuary · Mughal Road · Shopian · Bufliaz · Noorpur Pass · Poonch ·
            Rajouri
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Local food to try
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Rajma Chawal · Kaladi Kulcha · Rogan Josh · Kahwa · Noon Chai · Kashmiri Wazwan · Local
            Bread (Tsot)
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Photography tips
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Visit early or late for the best light. Capture the winding Mughal Road, shrine, alpine
            meadows, snow peaks, and Pir Panjal panoramas. After snowfall, take extra care as road
            conditions change rapidly.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Frequently asked questions
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {faqs.map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Between Shopian and Bufliaz · 3,490
            metres (11,450 feet) · 85–90 km from Srinagar · famous for Peer Baba Shrine, Mughal
            Road, and Himalayan views · best May–September · nearest airport Srinagar · nearest
            railway station Nowgam.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Peer Ki Gali?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Peer Ki Gali blends natural beauty, history, and spirituality: Himalayan panoramas, cool
            mountain air, Mughal Road, and the revered Peer Baba Shrine make it a rewarding stop on
            a road trip, photography expedition, or pilgrimage.
          </p>
        </div>
      </section>
    </>
  );
}

function BhaderwahGuide() {
  const highlights = [
    "Jai Valley",
    "Padri Pass",
    "Chinta Valley",
    "Seoj Meadow",
    "Gupt Ganga Temple",
    "Vasuki Nag Temple",
    "Bhaderwah Fort",
    "Nagni Mata Temple",
    "Adventure Park",
    "Scenic Himalayan landscapes",
  ];
  const activities = [
    "Explore the beautiful Jai Valley.",
    "Visit the picturesque Padri Pass.",
    "Enjoy camping and picnics at Seoj Meadow.",
    "Trek through forests and alpine meadows.",
    "Visit Gupt Ganga Temple and Vasuki Nag Temple.",
    "Experience paragliding and ziplining (seasonal).",
    "Enjoy landscape photography.",
    "Taste Dogra and Chenab Valley cuisine.",
    "Shop for local handicrafts and traditional products.",
  ];
  const faqs = [
    [
      "What is Bhaderwah famous for?",
      "Bhaderwah is famous for scenic valleys, Padri Pass, Jai Valley, adventure tourism, temples, and Himalayan landscapes.",
    ],
    [
      "How much time is required?",
      "A stay of 2–3 days is ideal to explore major attractions and enjoy adventure activities.",
    ],
    [
      "Is Bhaderwah suitable for families?",
      "Yes. It offers peaceful surroundings, sightseeing, and outdoor activities.",
    ],
    [
      "Does Bhaderwah receive snowfall?",
      "Yes. Padri Pass and Seoj Meadow receive significant winter snowfall, while the town can also see occasional snowfall.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Doda District, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,613 metres (5,292 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Distance from Jammu"
          value="Approximately 190 km"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Mini Kashmir of the Chenab Valley
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Nestled in the Himalayan foothills in Doda district, Bhaderwah is a charming hill town
              often called “Mini Kashmir” for its breathtaking beauty. At approximately 1,613 metres
              (5,292 feet), it is surrounded by deodar forests, rolling meadows, snow-capped
              mountains, and sparkling streams — ideal for nature lovers, adventure enthusiasts, and
              a peaceful retreat.
            </p>
            <p>
              The town is known for scenic valleys, ancient temples, trekking trails, adventure
              sports, and rich cultural heritage. Jai Valley, Padri Pass, Seoj Meadow, and Chinta
              Valley make Bhaderwah one of Jammu &amp; Kashmir&apos;s hidden gems. Whether for
              adventure, spirituality, or a relaxing escape, it offers an unforgettable experience.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">A cultural crossroads</h2>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Bhaderwah has a history dating back centuries and was once an independent princely state
            before becoming part of Jammu. Its Dogra and Kashmiri cultures are reflected in
            architecture, festivals, traditions, and cuisine.
          </p>
          <p>
            It was historically a trade and cultural centre linking the Chenab Valley with other
            parts of Jammu and Kashmir; today it is growing as an eco-tourism and adventure-tourism
            destination.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Plan your Bhaderwah visit
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Top highlights</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Valleys, temples and adventure
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {activities.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["March–June", "Pleasant weather and blooming landscapes."],
            ["July–September", "Lush greenery with occasional rainfall."],
            ["October–November", "Autumn colours and clear skies."],
            ["December–February", "Snowfall in higher reaches and winter scenery."],
          ].map(([season, description]) => (
            <InfoCard
              key={season}
              icon={<CalendarDays className="h-5 w-5" />}
              label={season}
              value={description}
            />
          ))}
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 190 km away."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Udhampur Railway Station, approximately 145 km away."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Road-connected with Jammu, Doda, Udhampur, Kishtwar, and Srinagar; buses, taxis, and private vehicles operate."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Entry is free; some adventure activities and camping sites have separate charges."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Accessible throughout the year. Most attractions are open 8:00 AM–6:00 PM, subject to season and weather."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Hotels and guest houses · Homestays · Restaurants and cafés · Parking · Public washrooms
            · Medical facilities · Tourist information centre · Local taxi services · Adventure
            activity operators · ATM facilities
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Local taxi and sightseeing services: Bhaderwah local sightseeing, Jammu Airport pickup
            &amp; drop, Udhampur Railway Station pickup &amp; drop, Jai Valley, Padri Pass, Chinta
            Valley, Seoj Meadow, and customised Chenab Valley packages. Contact person and phone
            details can be added here.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Adventure activities
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Trekking · Camping · Seasonal paragliding · Ziplining · Nature walks · Mountain biking ·
            Seasonal rock climbing. Charges vary by activity and operator.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Jai Valley · Padri Pass · Chinta Valley · Seoj Meadow · Gupt Ganga Temple · Vasuki Nag
            Temple · Bhaderwah Fort · Nagni Mata Temple · Bhal Padri
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Try Rajma Chawal, Kaladi Kulcha, Ambal, Madra, Khatta Meat, Dogra Pickles, Kulhad Lassi,
            and Chenab Valley sweets. Visit early or late for lush valleys, deodar forests, mountain
            meadows, waterfalls, Padri Pass, and Jai Valley; spring and autumn are colourful, while
            winter is snowy.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Frequently asked questions
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {faqs.map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Doda District, Jammu &amp; Kashmir ·
            1,613 metres (5,292 feet) · approximately 190 km from Jammu · famous for Jai Valley,
            Padri Pass, adventure tourism, and scenic beauty · best time March–June &amp;
            September–November · ideal duration 2–3 days · nearest airport Jammu · nearest railway
            station Udhampur.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Bhaderwah?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Bhaderwah is one of Jammu &amp; Kashmir&apos;s best-kept secrets: untouched beauty,
            adventure, spirituality, and rich heritage. From Jai Valley meadows and Padri Pass to
            ancient temples and outdoor activities, it has something for every traveller — a family
            vacation, adventure trip, or peaceful escape away from crowds.
          </p>
        </div>
      </section>
    </>
  );
}

function GurezValleyGuide() {
  const highlights = [
    "Habba Khatoon Peak",
    "Kishanganga River",
    "Razdan Pass",
    "Dawar Town",
    "Tulail Valley",
    "Kanzalwan Village",
    "Pyramid Rock",
    "Wooden Dard-Shina villages",
    "Scenic alpine meadows",
    "Snow-capped Himalayan peaks",
  ];
  const activities = [
    "Visit the iconic Habba Khatoon Peak.",
    "Explore the beautiful Tulail Valley.",
    "Enjoy riverside walks along the Kishanganga River.",
    "Visit traditional Dard-Shina villages.",
    "Experience camping under the stars.",
    "Go trekking through alpine meadows.",
    "Capture breathtaking mountain landscapes.",
    "Observe local culture and wooden architecture.",
    "Enjoy birdwatching and nature walks.",
  ];
  const facilities = [
    "Hotels and guest houses",
    "Homestays",
    "Restaurants and local eateries",
    "Parking",
    "Public washrooms (limited)",
    "Medical facilities (basic)",
    "Tourist information assistance",
    "Local guides",
    "Taxi services",
    "Mobile connectivity (limited in some areas)",
  ];
  const nearby = [
    "Habba Khatoon Peak",
    "Tulail Valley",
    "Dawar Town",
    "Kanzalwan Village",
    "Razdan Pass",
    "Kishanganga River",
    "Pyramid Rock",
    "Sheikhpora Village",
  ];
  const faqs = [
    [
      "What is Gurez Valley famous for?",
      "Gurez Valley is famous for untouched natural beauty, Habba Khatoon Peak, Kishanganga River, Dard-Shina culture, and serene Himalayan landscapes.",
    ],
    [
      "How much time is required to explore Gurez Valley?",
      "A stay of 2–3 days is ideal to explore the valley and nearby attractions comfortably.",
    ],
    [
      "Is Gurez Valley suitable for families?",
      "Yes. It is an excellent destination for families, nature lovers, photographers, and those seeking a peaceful holiday.",
    ],
    [
      "Is Gurez Valley open throughout the year?",
      "No. It is generally accessible from May to October; heavy winter snowfall often closes Razdan Pass.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Bandipora District, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,400 metres (7,874 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Distance from Srinagar"
          value="Approximately 123 km"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Overview
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Kashmir&apos;s hidden paradise
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink-soft">
              <p>
                Nestled in the northern Himalayas along the banks of the Kishanganga River, Gurez
                Valley is one of the most pristine and untouched destinations in Jammu &amp;
                Kashmir. Located in Bandipora district at approximately 2,400 metres (7,874 feet),
                it lies about 123 km from Srinagar and is surrounded by snow-capped peaks, lush
                meadows, alpine forests, and charming wooden villages.
              </p>
              <p>
                Often called Kashmir&apos;s Hidden Paradise, Gurez is known for breathtaking
                landscapes, rich Dard-Shina culture, crystal-clear rivers, and its peaceful
                atmosphere. The valley remains snowbound during winter and is accessible mainly from
                May to October via scenic Razdan Pass.
              </p>
              <p>
                Whether you&apos;re a nature lover, photographer, trekker, or seeking the untouched
                beauty of the Himalayas, Gurez Valley offers an unforgettable escape.
              </p>
            </div>
          </div>
          <aside className="border border-gold/30 bg-burgundy-deep p-6 text-primary-foreground shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Quick facts
            </p>
            <dl className="mt-5 space-y-4 text-sm leading-6">
              <div>
                <dt className="font-semibold text-gold">Famous for</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  Habba Khatoon Peak, Kishanganga River, Tulail Valley and Dard-Shina culture
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Best time</dt>
                <dd className="mt-1 text-primary-foreground/80">May–September</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Ideal duration</dt>
                <dd className="mt-1 text-primary-foreground/80">2–3 days</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          An ancient Himalayan route
        </h2>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Historically, Gurez was an important stop on the ancient Silk Route connecting Kashmir
            with Gilgit and Central Asia. The valley has been home to the Dard-Shina community, one
            of the oldest ethnic groups in the Himalayan region, known for its unique language,
            traditions, and culture.
          </p>
          <p>
            Because of its strategic location near the Line of Control, Gurez remained relatively
            isolated for many years. Improved road connectivity now welcomes tourism while
            preserving its natural beauty and cultural heritage.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Plan your Gurez visit
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Top highlights</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Slow down in the mountains
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {activities.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          Travel before the pass closes
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["May–June", "Pleasant weather with blooming meadows."],
            ["July–September", "Ideal for sightseeing, trekking, and photography."],
            ["October", "Beautiful autumn colours before snowfall."],
            [
              "November–April",
              "Heavy snowfall; the valley is generally inaccessible after Razdan Pass closes.",
            ],
          ].map(([season, description]) => (
            <InfoCard
              key={season}
              icon={<CalendarDays className="h-5 w-5" />}
              label={season}
              value={description}
            />
          ))}
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              How to reach
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Via Bandipora and Razdan Pass
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By air"
                value="Srinagar International Airport, approximately 135 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By train"
                value="Srinagar Railway Station (Nowgam), approximately 130 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By road"
                value="Taxis and private vehicles travel from Srinagar via Bandipora and Razdan Pass; the journey takes around 5–6 hours, depending on road and weather."
              />
            </div>
          </div>
          <aside className="border border-border bg-cream p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Entry & timings
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Entry:</strong> Entry to Gurez Valley is free. Camping,
              trekking, and guided activities may have separate charges.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Timings:</strong> The valley is open during the
              accessible season; most sightseeing is best between 8:00 AM and 6:00 PM.
            </p>
          </aside>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink-soft sm:grid-cols-2">
            {facilities.map((item) => (
              <li key={item} className="border-b border-border pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink">Local taxi & sightseeing</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Visitors can hire taxis for local sightseeing and nearby attractions. Contact person and
            phone details can be added here.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink">Available services</p>
          <p className="mt-2 text-sm leading-7 text-ink-soft">
            Gurez Valley local sightseeing · Srinagar Airport pickup &amp; drop · Srinagar Railway
            Station pickup &amp; drop · Tulail Valley tour · Dawar Village tour · Habba Khatoon Peak
            visit · Razdan Pass excursion · Customized Gurez Valley packages
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Adventure activities
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Eco-tourism in Gurez
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Gurez Valley is an emerging destination for eco-tourism and adventure. Available
              activities include trekking, camping, nature walks, birdwatching, landscape
              photography, fishing subject to local regulations, village walks, and cultural
              experiences. Charges vary by activity and service provider.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <span
                  key={item}
                  className="border border-gold/40 bg-paper px-3 py-2 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Local food to try
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Kashmiri Wazwan · Rogan Josh · Yakhni · Kahwa · Noon Chai · Makki ki Roti · Local
              Trout Fish · Traditional Dard-Shina Cuisine
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Photography tips
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit early or late afternoon for the best light. Capture Habba Khatoon Peak,
              turquoise Kishanganga waters, wooden houses, colourful alpine meadows, and mountain
              vistas. Summer and autumn offer the most vibrant scenery.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Plan with confidence</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Quick facts
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Location: Bandipora District, Jammu &amp; Kashmir · Altitude: approximately 2,400 metres
            (7,874 feet) · Distance from Srinagar: approximately 123 km · Famous for: Habba Khatoon
            Peak, Kishanganga River, Tulail Valley, and Dard-Shina culture · Best time:
            May–September · Ideal trip duration: 2–3 days · Nearest airport: Srinagar International
            Airport · Nearest railway station: Srinagar Railway Station (Nowgam).
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Gurez Valley?
          </p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">
            An authentic Himalayan journey
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Gurez Valley is one of the last truly untouched Himalayan destinations, offering
            spectacular mountain scenery, pristine rivers, peaceful villages, and rich cultural
            heritage. Far from crowds, it is a rare chance to experience Kashmir in its purest form
            — trekking alpine meadows, exploring Tulail Valley, admiring Habba Khatoon Peak, or
            simply relaxing beside the Kishanganga River.
          </p>
        </div>
      </section>
    </>
  );
}

function PahalgamGuide() {
  const highlights = [
    "Betaab Valley",
    "Aru Valley",
    "Baisaran (Mini Switzerland)",
    "Chandanwari",
    "Lidder River",
    "Pahalgam Golf Course",
    "Mamleshwar Temple",
    "Tulian Lake Trek",
    "Pine forests and alpine meadows",
    "Scenic Himalayan landscapes",
  ];
  const things = [
    "Explore the beautiful Betaab Valley.",
    "Visit the scenic Aru Valley.",
    "Take a pony ride to Baisaran (Mini Switzerland).",
    "Enjoy river rafting in the Lidder River.",
    "Trek to Tulian Lake (seasonal).",
    "Visit Chandanwari, the gateway to the Amarnath Yatra.",
    "Play golf at the Pahalgam Golf Course.",
    "Go trout fishing (with the required permits).",
    "Shop for Kashmiri handicrafts, dry fruits, and souvenirs.",
  ];
  const facilities = [
    "Hotels and resorts",
    "Guest houses",
    "Restaurants and cafés",
    "Parking",
    "Public washrooms",
    "Medical facilities",
    "Tourist information centre",
    "Pony services",
    "Adventure activity operators",
    "ATM facilities",
    "Local shopping markets",
  ];
  const nearby = [
    "Betaab Valley",
    "Aru Valley",
    "Baisaran (Mini Switzerland)",
    "Chandanwari",
    "Lidder River",
    "Mamleshwar Temple",
    "Tulian Lake",
    "Sheshnag Lake (trekking route)",
  ];
  const faqs = [
    [
      "What is Pahalgam famous for?",
      "Pahalgam is famous for Betaab Valley, Aru Valley, Baisaran, the Lidder River, and as the traditional starting point of the Amarnath Yatra.",
    ],
    [
      "How much time is required to explore Pahalgam?",
      "A stay of 2–3 days is ideal to explore the main attractions and enjoy outdoor activities.",
    ],
    [
      "Is Pahalgam suitable for families?",
      "Yes. It is an excellent destination for families, offering sightseeing, pony rides, river walks, picnics, and adventure activities.",
    ],
    [
      "Does Pahalgam receive snowfall?",
      "Yes. Snowfall usually occurs from December to February, making it a popular winter destination.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Anantnag District, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="2,130 metres (6,990 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Distance from Srinagar"
          value="Approximately 90 km"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Overview
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              The Valley of Shepherds
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink-soft">
              <p>
                Nestled in the picturesque Lidder Valley of the Anantnag district in Jammu &amp;
                Kashmir, Pahalgam is one of Kashmir&apos;s most popular hill stations and nature
                retreats. Situated at an altitude of approximately 2,130 metres (6,990 feet) and
                about 90 km from Srinagar, Pahalgam is known for lush green meadows, dense pine
                forests, snow-capped Himalayan peaks, and the crystal-clear Lidder River.
              </p>
              <p>
                Often called the “Valley of Shepherds,” Pahalgam is a paradise for nature lovers,
                honeymooners, adventure enthusiasts, and photographers. It also serves as the
                traditional base camp for the annual Shri Amarnath Yatra. The town offers a perfect
                blend of scenic beauty, outdoor activities, and cultural charm, making it one of the
                must-visit destinations in Kashmir.
              </p>
              <p>
                Whether you&apos;re looking for peaceful riverside walks, thrilling trekking trails,
                or breathtaking mountain views, Pahalgam promises an unforgettable experience.
              </p>
            </div>
          </div>
          <aside className="border border-gold/30 bg-burgundy-deep p-6 text-primary-foreground shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Quick facts
            </p>
            <dl className="mt-5 space-y-4 text-sm leading-6">
              <div>
                <dt className="font-semibold text-gold">Famous for</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  Betaab Valley, Aru Valley, Baisaran, Lidder River, and Amarnath Yatra
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Best time</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  March–June and September–November
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Ideal duration</dt>
                <dd className="mt-1 text-primary-foreground/80">2–3 days</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">A village of shepherds</h2>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            The name Pahalgam is derived from the Kashmiri words “Puheyl” (shepherd) and “Gam”
            (village), meaning “Village of Shepherds.” Historically, it was inhabited by shepherd
            communities and served as a resting place for pilgrims on their way to the sacred
            Amarnath Cave.
          </p>
          <p>
            Over time, Pahalgam evolved into one of Kashmir&apos;s premier tourist destinations. Its
            breathtaking landscapes have also made it a favorite filming location for numerous
            Bollywood movies, further enhancing its popularity among travelers.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Plan your Pahalgam visit
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Top highlights</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Valleys, rivers and trails
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {things.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Four distinct seasons</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["March–June", "Pleasant weather and lush green landscapes."],
            ["July–September", "Ideal for trekking and sightseeing."],
            ["October–November", "Stunning autumn colors and fewer crowds."],
            ["December–February", "Snowfall and winter activities."],
          ].map(([season, description]) => (
            <InfoCard
              key={season}
              icon={<CalendarDays className="h-5 w-5" />}
              label={season}
              value={description}
            />
          ))}
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              How to reach
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Along the Lidder Valley
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By air"
                value="Srinagar International Airport, approximately 95 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By train"
                value="Srinagar Railway Station (Nowgam), approximately 90 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By road"
                value="Taxis, buses, and private vehicles connect Pahalgam with Srinagar, Anantnag, Jammu, and other cities. The Srinagar drive takes around 2.5–3 hours."
              />
            </div>
          </div>
          <aside className="border border-border bg-cream p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Entry & timings
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Entry:</strong> Pahalgam entry is free. Betaab Valley,
              Aru Valley, adventure activities, pony rides, and river rafting have separate charges.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Timings:</strong> Pahalgam is accessible throughout the
              year. Most attractions are open 8:00 AM–6:00 PM, depending on season and weather.
            </p>
          </aside>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink-soft sm:grid-cols-2">
            {facilities.map((item) => (
              <li key={item} className="border-b border-border pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink">Local taxi & sightseeing</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Visitors can hire taxis for local sightseeing and nearby attractions. Contact person and
            phone details can be added here.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink">Available services</p>
          <p className="mt-2 text-sm leading-7 text-ink-soft">
            Pahalgam local sightseeing · Srinagar Airport pickup &amp; drop · Srinagar Railway
            Station pickup &amp; drop · Betaab Valley tour · Aru Valley tour · Chandanwari tour ·
            Baisaran tour · Amarnath Yatra transfers (seasonal) · Customized Kashmir tour packages
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Pony & adventure activities
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Explore beyond the road
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Pony services are available for attractions not directly accessible by vehicles.
              Available activities include pony rides to Baisaran, trekking, river rafting, camping,
              nature walks, trout fishing with permits, and seasonal mountain biking. Charges vary
              by destination and activity and are regulated by local authorities.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <span
                  key={item}
                  className="border border-gold/40 bg-paper px-3 py-2 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Local food to try
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rogan Josh · Gushtaba · Yakhni · Kashmiri Wazwan · Kahwa · Noon Chai · Modur Pulao ·
              Bakarkhani
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Photography tips
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit early in the morning or during golden hour. Capture the Lidder River, lush
              valleys, snow-covered mountains, pine forests, and panoramic Baisaran views. Autumn
              brings golden foliage, while winter offers spectacular snow-covered scenery.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Plan with confidence</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Quick facts
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Location: Anantnag District, Jammu &amp; Kashmir · Altitude: 2,130 metres (6,990 feet) ·
            Distance from Srinagar: approximately 90 km · Famous for: Betaab Valley, Aru Valley,
            Baisaran, Lidder River, and Amarnath Yatra · Best time: March–June &amp;
            September–November · Ideal trip duration: 2–3 days · Nearest airport: Srinagar
            International Airport · Nearest railway station: Srinagar Railway Station (Nowgam).
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Pahalgam?
          </p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">A crown jewel of Kashmir</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Pahalgam is where pristine natural beauty, adventure, and tranquility come together.
            From the emerald-green valleys of Betaab and Aru to the peaceful Lidder River and scenic
            Baisaran meadows, every corner offers postcard-perfect views. Whether you&apos;re
            planning a family holiday, honeymoon, adventure trip, or spiritual journey to Amarnath
            Cave, Pahalgam offers an unforgettable experience.
          </p>
        </div>
      </section>
    </>
  );
}

function SonamargGuide() {
  const highlights = [
    "Thajiwas Glacier",
    "Sindh River",
    "Baltal Valley",
    "Zoji La Pass",
    "Nilagrad River",
    "Vishansar Lake Trek",
    "Krishansar Lake Trek",
    "Scenic Himalayan meadows",
    "Snow activities (seasonal)",
    "Spectacular mountain views",
  ];
  const thingsToDo = [
    "Visit the famous Thajiwas Glacier.",
    "Enjoy pony rides to the glacier.",
    "Experience river rafting on the Sindh River.",
    "Go trout fishing (with permits where applicable).",
    "Trek to Vishansar and Krishansar Lakes.",
    "Explore Baltal and Zoji La Pass.",
    "Enjoy camping amidst alpine meadows.",
    "Capture stunning mountain landscapes.",
    "Taste authentic Kashmiri cuisine.",
  ];
  const facilities = [
    "Hotels and guest houses",
    "Restaurants and cafés",
    "Parking",
    "Public washrooms",
    "Medical facilities",
    "Tourist information centre",
    "Pony services",
    "Camping sites",
    "Local guides",
    "ATM facilities (limited)",
  ];
  const nearby = [
    "Thajiwas Glacier",
    "Baltal Valley",
    "Zoji La Pass",
    "Nilagrad River",
    "Vishansar Lake",
    "Krishansar Lake",
    "Gangabal Trek",
    "Amarnath Cave (via Baltal during pilgrimage season)",
  ];
  const faqs = [
    [
      "What is Sonamarg famous for?",
      "Sonamarg is famous for Thajiwas Glacier, the Sindh River, alpine meadows, trekking routes, and as the gateway to Baltal and the Amarnath Yatra.",
    ],
    [
      "How much time is required to explore Sonamarg?",
      "A full day is sufficient for the main attractions, while 2–3 days are ideal for trekking and camping.",
    ],
    [
      "Is Sonamarg suitable for families?",
      "Yes. Families can enjoy sightseeing, pony rides, picnics, and the beautiful natural surroundings.",
    ],
    [
      "Is Sonamarg open throughout the year?",
      "The town is accessible mainly from April to October. During winter, heavy snowfall often leads to the closure of the Srinagar–Leh Highway.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Ganderbal District, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="2,730 metres (8,957 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Distance from Srinagar"
          value="Approximately 80 km"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Overview
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Kashmir&apos;s meadow of gold
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink-soft">
              <p>
                Nestled amidst the majestic Himalayas in the Ganderbal district of Jammu &amp;
                Kashmir, Sonamarg — meaning “Meadow of Gold” — is one of Kashmir&apos;s most
                breathtaking hill stations. Located approximately 80 km from Srinagar at an altitude
                of around 2,730 metres (8,957 feet), Sonamarg is renowned for its lush green
                meadows, snow-capped peaks, sparkling glaciers, alpine forests, and the
                crystal-clear Sindh River.
              </p>
              <p>
                Sonamarg serves as the gateway to the famous Thajiwas Glacier, Baltal, and the
                Amarnath Yatra. During summer, the valley is adorned with vibrant wildflowers, while
                winter blankets the region in pristine snow, creating a magical landscape. Adventure
                enthusiasts can enjoy trekking, camping, fishing, river rafting, horse riding, and
                glacier excursions.
              </p>
              <p>
                Whether you&apos;re seeking adventure, breathtaking scenery, or a peaceful escape
                into nature, Sonamarg offers an unforgettable Himalayan experience.
              </p>
            </div>
          </div>
          <aside className="border border-gold/30 bg-burgundy-deep p-6 text-primary-foreground shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Quick facts
            </p>
            <dl className="mt-5 space-y-4 text-sm leading-6">
              <div>
                <dt className="font-semibold text-gold">Famous for</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  Thajiwas Glacier, Sindh River, trekking, and alpine meadows
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Best time</dt>
                <dd className="mt-1 text-primary-foreground/80">April–June and July–September</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Ideal duration</dt>
                <dd className="mt-1 text-primary-foreground/80">1–2 days</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          A historic Himalayan passage
        </h2>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Sonamarg has long been an important stop on the ancient Silk Route connecting Kashmir
            with Central Asia. Traders and travelers passed through this valley while crossing the
            Zoji La Pass toward Ladakh.
          </p>
          <p>
            Today, Sonamarg is one of Kashmir&apos;s most popular tourist destinations and serves as
            the starting point for several trekking expeditions, glacier visits, and the annual
            Amarnath pilgrimage via the Baltal route.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Plan your Sonamarg visit
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Top highlights</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Into the alpine valley
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {thingsToDo.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          Match the trip to the season
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["April–June", "Pleasant weather, blooming meadows, and sightseeing."],
            ["July–September", "Ideal for trekking, camping, and adventure activities."],
            ["October", "Beautiful autumn scenery with fewer crowds."],
            ["November–March", "Heavy snowfall; access may be restricted depending on weather."],
          ].map(([season, description]) => (
            <InfoCard
              key={season}
              icon={<CalendarDays className="h-5 w-5" />}
              label={season}
              value={description}
            />
          ))}
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              How to reach
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Follow the Srinagar–Leh Highway
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By air"
                value="Srinagar International Airport, approximately 90 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By train"
                value="Srinagar Railway Station (Nowgam), approximately 85 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By road"
                value="Taxis, buses, and private vehicles connect Sonamarg with Srinagar, Ganderbal, Kargil, and other destinations. The highway can close in heavy winter snowfall."
              />
            </div>
          </div>
          <aside className="border border-border bg-cream p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Entry & timings
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Entry:</strong> Sonamarg entry is free. Pony rides,
              rafting, camping, and adventure activities have charges.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Timings:</strong> Most attractions can be visited between
              8:00 AM and 6:00 PM during the tourist season. Accessibility depends on weather and
              road conditions.
            </p>
          </aside>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink-soft sm:grid-cols-2">
            {facilities.map((item) => (
              <li key={item} className="border-b border-border pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink">Local taxi & sightseeing</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Visitors can hire taxis for local sightseeing and nearby attractions. Contact person and
            phone details can be added here.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink">Available services</p>
          <p className="mt-2 text-sm leading-7 text-ink-soft">
            Sonamarg local sightseeing · Srinagar Airport pickup &amp; drop · Srinagar Railway
            Station pickup &amp; drop · Thajiwas Glacier tour · Baltal tour · Zoji La Pass excursion
            · Nilagrad visit · Customized Kashmir tour packages
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Pony & adventure activities
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Explore beyond the road
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Pony services are available for visitors wishing to reach Thajiwas Glacier and nearby
              viewpoints. Available activities include pony rides to Thajiwas Glacier, river
              rafting, camping, trekking, trout fishing (subject to permits), and nature walks.
              Charges vary by activity and route and are regulated by local authorities.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <span
                  key={item}
                  className="border border-gold/40 bg-paper px-3 py-2 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Local food to try
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rogan Josh · Gushtaba · Yakhni · Kashmiri Wazwan · Kahwa · Noon Chai · Seekh Kebabs ·
              Bakarkhani
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Photography tips
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit early in the morning for the clearest views of the mountains and glacier.
              Capture the Sindh River, lush meadows, snow-covered peaks, and the dramatic landscapes
              of Thajiwas Glacier and Zoji La Pass. Summer offers vibrant greenery, while autumn
              brings golden hues.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Plan with confidence</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Quick facts
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Location: Ganderbal District, Jammu &amp; Kashmir · Altitude: 2,730 metres (8,957 feet)
            · Distance from Srinagar: approximately 80 km · Famous for: Thajiwas Glacier, Sindh
            River, trekking, and alpine meadows · Best time: April–June &amp; July–September · Ideal
            trip duration: 1–2 days · Nearest airport: Srinagar International Airport · Nearest
            railway station: Srinagar Railway Station (Nowgam).
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Sonamarg?
          </p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">
            A Himalayan adventure in every direction
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Sonamarg is a paradise for nature lovers, adventure enthusiasts, and photographers. With
            snow-clad mountains, lush meadows, sparkling rivers, and magnificent glaciers, it offers
            some of the most spectacular scenery in the Himalayas. Whether you&apos;re trekking to
            alpine lakes, visiting Thajiwas Glacier, experiencing the Sindh Valley, or simply
            relaxing amidst nature, Sonamarg promises a memorable journey and is one of the
            must-visit destinations in Kashmir.
          </p>
        </div>
      </section>
    </>
  );
}

function GulmargGuide() {
  const highlights = [
    "Gulmarg Gondola",
    "Apharwat Peak",
    "Gulmarg Golf Course",
    "St. Mary's Church",
    "Maharani Temple",
    "Strawberry Valley",
    "Children's Park",
    "Baba Reshi Shrine",
    "Snow skiing and snowboarding",
    "Scenic Himalayan views",
  ];
  const thingsToDo = [
    "Ride the Gulmarg Gondola.",
    "Enjoy skiing and snowboarding during winter.",
    "Visit Apharwat Peak.",
    "Play golf at one of the world's highest golf courses.",
    "Experience snow activities like sledging and snow biking.",
    "Take nature walks through meadows and pine forests.",
    "Visit Maharani Temple and St. Mary's Church.",
    "Enjoy horse riding during summer.",
    "Taste authentic Kashmiri cuisine.",
  ];
  const facilities = [
    "Hotels and resorts",
    "Restaurants and cafés",
    "Parking",
    "Washrooms",
    "ATMs",
    "Ski equipment rental",
    "Certified ski instructors",
    "Pony services",
    "Medical facilities",
    "Tourist information centre",
  ];
  const nearby = [
    "Apharwat Peak",
    "Khilanmarg",
    "Strawberry Valley",
    "Baba Reshi Shrine",
    "Drung Waterfall",
    "Tangmarg",
    "Ferozepur Nallah",
  ];
  const faqs = [
    [
      "What is Gulmarg famous for?",
      "Gulmarg is famous for skiing, the Gulmarg Gondola, snow-covered mountains, golf course, and breathtaking Himalayan scenery.",
    ],
    [
      "How much time is required to explore Gulmarg?",
      "One full day is sufficient for sightseeing, while 2–3 days are ideal for skiing and adventure activities.",
    ],
    [
      "Is Gulmarg suitable for families?",
      "Yes. Families can enjoy Gondola rides, pony rides, snow activities, sightseeing, and scenic walks.",
    ],
    [
      "Is snowfall guaranteed during winter?",
      "Snowfall usually occurs between December and February, though weather conditions may vary each year.",
    ],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Baramulla District, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="2,650 metres (8,694 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Distance from Srinagar"
          value="Approximately 50 km"
        />
      </section>

      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Overview
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Kashmir&apos;s meadow of flowers
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink-soft">
              <p>
                Nestled in the Pir Panjal Range of the Himalayas, Gulmarg is one of India&apos;s
                most famous hill stations and premier skiing destinations. Located about 50 km from
                Srinagar in the Baramulla district of Jammu &amp; Kashmir, Gulmarg — meaning “Meadow
                of Flowers” — is renowned for its lush green meadows, snow-capped mountains, alpine
                forests, and breathtaking landscapes.
              </p>
              <p>
                At an altitude of approximately 2,650 metres (8,694 feet), Gulmarg transforms with
                the seasons. During summer, it is carpeted with colorful wildflowers, while winter
                turns it into a world-class ski resort attracting adventure enthusiasts from around
                the globe. The town is also home to the Gulmarg Gondola, one of the highest cable
                cars in the world, offering spectacular views of the Himalayas.
              </p>
              <p>
                Whether you&apos;re seeking adventure, scenic beauty, or a peaceful mountain
                getaway, Gulmarg promises an unforgettable experience.
              </p>
            </div>
          </div>
          <aside className="border border-gold/30 bg-burgundy-deep p-6 text-primary-foreground shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Quick facts
            </p>
            <dl className="mt-5 space-y-4 text-sm leading-6">
              <div>
                <dt className="font-semibold text-gold">Famous for</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  Skiing, Gondola rides, golf, and Himalayan landscapes
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Best time</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  March–June and December–February
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Ideal duration</dt>
                <dd className="mt-1 text-primary-foreground/80">1–2 days</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          From Gaurimarg to Gulmarg
        </h2>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Originally known as Gaurimarg, meaning “Meadow of Gauri,” the region was renamed Gulmarg
            by Sultan Yusuf Shah Chak during the 16th century. During the British era, Gulmarg
            became a popular summer retreat for British officers and was known for its golf course
            and pleasant climate.
          </p>
          <p>
            Today, Gulmarg is internationally recognized as a leading destination for skiing,
            snowboarding, trekking, golfing, and mountain tourism.
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Plan your Gulmarg visit
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Top highlights</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Adventure or a slow walk
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {thingsToDo.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          Beautiful in every season
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["March–June", "Pleasant weather, green meadows, and sightseeing."],
            ["July–September", "Lush landscapes and fewer crowds."],
            ["October–November", "Beautiful autumn colors."],
            ["December–February", "Heavy snowfall, skiing, and winter sports."],
          ].map(([season, description]) => (
            <InfoCard
              key={season}
              icon={<CalendarDays className="h-5 w-5" />}
              label={season}
              value={description}
            />
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              How to reach
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Into the Pir Panjal
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By air"
                value="Srinagar International Airport, approximately 56 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By train"
                value="Srinagar Railway Station (Nowgam), approximately 52 km away."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By road"
                value="Regular taxis, buses, and private vehicles connect Gulmarg with Srinagar, Tangmarg, Baramulla, Jammu, and other destinations."
              />
            </div>
          </div>
          <aside className="border border-border bg-cream p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Entry & timings
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Entry:</strong> Gulmarg entry is free. Gondola rides
              require a separate ticket, and adventure activities have individual charges.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Timings:</strong> Gulmarg is open throughout the year.
              The Gondola usually operates 9:00 AM–5:00 PM, subject to weather conditions and
              maintenance schedules.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink-soft sm:grid-cols-2">
            {facilities.map((item) => (
              <li key={item} className="border-b border-border pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink">Local taxi & sightseeing</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Visitors can hire taxis for local sightseeing and nearby attractions. Contact person and
            phone details can be added here.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink">Available services</p>
          <p className="mt-2 text-sm leading-7 text-ink-soft">
            Gulmarg local sightseeing · Srinagar Airport pickup &amp; drop · Srinagar Railway
            Station pickup &amp; drop · Gulmarg Gondola tour · Tangmarg tour · Baba Reshi Shrine
            visit · Khilanmarg excursion · Drung Waterfall tour · Customized Kashmir tour packages
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Gulmarg Gondola
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Above the valley</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              One of the world&apos;s highest cable car systems, the Gulmarg Gondola operates in two
              phases: Phase 1 runs from Gulmarg to Kongdoori in approximately 8–10 minutes; Phase 2
              runs from Kongdoori to Apharwat Peak in approximately 12–15 minutes. Apharwat Peak is
              around 3,980 metres (13,058 feet). Advance online booking is highly recommended during
              peak tourist seasons, and operations depend on weather and snowfall conditions.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <span
                  key={item}
                  className="border border-gold/40 bg-paper px-3 py-2 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Local food to try
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rogan Josh · Gushtaba · Rista · Yakhni · Kashmiri Wazwan · Kahwa · Noon Chai · Harissa
              (winter specialty)
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Photography tips
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit early in the morning for clear mountain views and soft lighting. Capture
              panoramic scenes from the Gondola, snow-covered Apharwat Peak, lush summer meadows,
              pine forests, and colorful wildflowers. Winter is excellent for snow and skiing
              photography.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Plan with confidence</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Quick facts
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Location: Baramulla District, Jammu &amp; Kashmir · Altitude: 2,650 metres (8,694 feet)
            · Distance from Srinagar: approximately 50 km · Famous for: skiing, Gulmarg Gondola,
            golf course, and Himalayan landscapes · Best time: March–June &amp; December–February ·
            Ideal trip duration: 1–2 days · Nearest airport: Srinagar International Airport ·
            Nearest railway station: Srinagar Railway Station (Nowgam).
          </p>
        </div>
      </section>

      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Gulmarg?
          </p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">
            Adventure, beauty and tranquility
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Gulmarg is one of Kashmir&apos;s most spectacular destinations, offering a perfect blend
            of adventure, natural beauty, and tranquility. Whether you&apos;re riding one of the
            world&apos;s highest cable cars, skiing on powdery slopes, exploring vibrant meadows, or
            simply admiring the majestic Himalayan peaks, Gulmarg delivers an unforgettable
            experience in every season. It is a must-visit destination for nature lovers, adventure
            seekers, families, and photographers alike.
          </p>
        </div>
      </section>
    </>
  );
}

function MughalGardensGuide() {
  const highlights = [
    "Shalimar Bagh — the largest Mughal garden in Kashmir",
    "Nishat Bagh — the Garden of Joy",
    "Chashme Shahi — the Royal Spring",
    "Terraced Mughal landscaping",
    "Musical fountains and natural water channels",
    "Ancient Chinar trees and colourful flower beds",
    "Views of Dal Lake and the Zabarwan Mountains",
  ];
  const thingsToDo = [
    "Stroll through the beautiful gardens and terraced pathways.",
    "Admire Mughal architecture and fountains.",
    "Relax beside the water channels.",
    "Enjoy views of Dal Lake from Nishat Bagh.",
    "Take photography and nature walks.",
    "Visit Pari Mahal, located nearby.",
    "Attend the Tulip Festival in spring.",
  ];
  const facilities = [
    "Parking areas",
    "Public washrooms",
    "Drinking-water points",
    "Cafeterias and snack stalls",
    "Seating areas",
    "Wheelchair access in limited areas",
    "Souvenir shops",
    "Security and tourist information",
  ];
  const nearby = [
    "Dal Lake",
    "Pari Mahal",
    "Indira Gandhi Memorial Tulip Garden",
    "Shankaracharya Temple",
    "Hazratbal Shrine",
    "Botanical Garden Srinagar",
    "Nigeen Lake",
  ];
  const faqs = [
    [
      "Which Mughal garden is the most famous?",
      "Shalimar Bagh is the most famous, followed by Nishat Bagh and Chashme Shahi.",
    ],
    [
      "How much time is needed to visit the Mughal Gardens?",
      "Around 3–5 hours is ideal to explore all three gardens.",
    ],
    [
      "Can I visit all three gardens in one day?",
      "Yes. They are located close to each other and can be covered in a single day.",
    ],
    [
      "Is photography allowed?",
      "Yes. The gardens are perfect for photography, especially during spring and autumn.",
    ],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Srinagar, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,585 metres (5,200 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal trip duration"
          value="Half Day to 1 Day"
        />
      </section>

      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Overview
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Srinagar&apos;s living Mughal legacy
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ink-soft">
              <p>
                The Mughal Gardens of Srinagar are among the most beautiful and historically
                significant gardens in India. Nestled along the eastern side of Dal Lake, with the
                majestic Zabarwan Mountain Range in the background, these gardens are a perfect
                blend of Mughal architecture, Persian-style landscaping, terraced lawns, fountains,
                water channels, colourful flower beds, and centuries-old Chinar trees.
              </p>
              <p>
                The three main Mughal gardens — Shalimar Bagh, Nishat Bagh, and Chashme Shahi — were
                built during the 16th and 17th centuries by Mughal emperors and nobles. Each garden
                reflects the grandeur of Mughal design, featuring symmetrical layouts, cascading
                fountains, flowing water channels, and scenic views of Dal Lake.
              </p>
              <p>
                During spring and autumn, the gardens come alive with vibrant tulips, roses, and
                seasonal flowers, making them one of the most photographed places in Kashmir.
                Whether you are a history lover, nature enthusiast, photographer, or family
                traveller, the Mughal Gardens offer a peaceful and unforgettable experience.
              </p>
            </div>
          </div>
          <aside className="border border-gold/30 bg-burgundy-deep p-6 text-primary-foreground shadow-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Quick facts
            </p>
            <dl className="mt-5 space-y-4 text-sm leading-6">
              <div>
                <dt className="font-semibold text-gold">Famous for</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  Mughal architecture, terraced gardens, fountains, Chinar trees and Dal Lake views
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Best time to visit</dt>
                <dd className="mt-1 text-primary-foreground/80">March–June and October–November</dd>
              </div>
              <div>
                <dt className="font-semibold text-gold">Nearest connections</dt>
                <dd className="mt-1 text-primary-foreground/80">
                  Srinagar International Airport and Nowgam Railway Station
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          Gardens made for emperors
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Shalimar Bagh · 1619"
            value="Commissioned by Emperor Jahangir for his beloved wife Noor Jahan."
          />
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Nishat Bagh · 1633"
            value="Built by Asif Khan, the brother of Noor Jahan; it is known as the Garden of Joy."
          />
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Chashme Shahi · 1632"
            value="Constructed by Ali Mardan Khan under Emperor Shah Jahan, around a spring believed to have medicinal properties."
          />
        </div>
      </section>

      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Water, stone and flowers
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {highlights.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Take the gardens slowly
            </h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-soft">
              {thingsToDo.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Best time to visit
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
          A different garden every season
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["March–April", "Tulip season and blooming flowers."],
            ["May–June", "Lush greenery and pleasant weather."],
            ["July–September", "Comfortable weather with occasional rainfall."],
            ["October–November", "Golden Chinar leaves and autumn colours."],
            ["December–February", "Snowy scenery, though flowering is limited."],
          ].map(([season, description]) => (
            <InfoCard
              key={season}
              icon={<CalendarDays className="h-5 w-5" />}
              label={season}
              value={description}
            />
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              How to reach
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Easy to reach from Srinagar
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By air"
                value="Srinagar International Airport, approximately 18–22 km away depending on the garden."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By train"
                value="Nowgam Railway Station, around 15 km from Srinagar city."
              />
              <InfoCard
                icon={<Compass className="h-5 w-5" />}
                label="By road"
                value="Well connected from Srinagar city, Jammu, Gulmarg, Pahalgam and Sonamarg."
              />
            </div>
          </div>
          <aside className="border border-border bg-cream p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-burgundy">
              Entry & timings
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Entry fee:</strong> Indian adults approximately ₹30–₹50;
              children approximately ₹15–₹25. Foreign tourist fees may be higher. Fees are subject
              to revision.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Timings:</strong> Open daily, generally 9:00 AM to 7:00
              PM; timings may vary seasonally.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities available
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-soft">
            {facilities.map((item) => (
              <li key={item} className="border-b border-border pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink">Local taxi & sightseeing</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Explore the Mughal Gardens and nearby attractions with a comfortable taxi service.
            Contact person and phone details can be added here.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink">Services available</p>
          <p className="mt-2 text-sm leading-7 text-ink-soft">
            Srinagar local sightseeing · Airport pickup & drop · Railway-station pickup & drop ·
            Mughal Gardens tour · Dal Lake tour · Gulmarg, Pahalgam & Sonamarg day trips ·
            Customised tour packages
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Extend your Srinagar day
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {nearby.map((item) => (
                <span
                  key={item}
                  className="border border-gold/40 bg-paper px-3 py-2 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Local food to try
            </p>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Rogan Josh · Gushtaba · Yakhni · Kashmiri Wazwan · Kahwa · Noon Chai · Sheermal ·
              Bakarkhani
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Photography tips
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Visit early in the morning or late afternoon for soft light. Capture Dal Lake
              reflections, garden fountains, flowers and the Zabarwan Mountains. Autumn offers
              spectacular golden Chinar leaves.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">Plan with confidence</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5 shadow-sm">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 border-t border-border pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Quick facts
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Location: Srinagar, Jammu & Kashmir · Altitude: approximately 1,585 metres (5,200 feet)
            · Famous for: Mughal architecture, terraced gardens, fountains, Chinar trees and Dal
            Lake views · Best time: March–June and October–November · Ideal trip duration: half day
            to 1 day · Nearest airport: Srinagar International Airport · Nearest railway station:
            Nowgam Railway Station.
          </p>
        </div>
      </section>

      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Mughal Gardens?
          </p>
          <h2 className="display-serif mt-2 text-3xl sm:text-4xl">
            A meeting of history, art and natural beauty
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            The Mughal Gardens of Srinagar are a perfect blend of history, art, and natural beauty.
            Their terraced landscapes, fountains, flowers, and views of Dal Lake make them one of
            the most beautiful attractions in Kashmir. Whether you are visiting for history, nature,
            photography, or peaceful relaxation, the Mughal Gardens promise a memorable experience.
          </p>
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
