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
      {destination.name === "Warwan Valley" ? <WarwanValleyGuide /> : null}
      {destination.name === "Verinag" ? <VerinagGuide /> : null}
      {destination.name === "Dudu Valley" ? <DuduValleyGuide /> : null}
      {destination.name === "Sanasar" ? <SanasarGuide /> : null}
      {destination.name === "Aharbal Waterfall" ? <AharbalWaterfallGuide /> : null}
      {destination.name === "Sudh Mahadev Temple" ? <SudhMahadevGuide /> : null}
      {destination.name === "Bangus Valley" ? <BangusValleyGuide /> : null}
      {destination.name === "Yusmarg" ? <YusmargGuide /> : null}
      {destination.name === "Purthu" ? <PurthuMeadowGuide /> : null}
      {destination.name === "Suchetgarh Border" ? <SuchetgarhGuide /> : null}
      {destination.name === "Darhal Waterfall & Shadra Sharief" ? <ShahdaraDarhalGuide /> : null}
      {destination.name === "Keran Border" ? <KeranBorderGuide /> : null}
      {destination.name === "Amarnath Yatra (Seasonal)" ? <AmarnathYatraGuide /> : null}
      {destination.name === "Tulip Garden (Seasonal)" ? <TulipGardenGuide /> : null}
      {destination.name === "Panchari" ? <PanchariGuide /> : null}
      {destination.name === "Loran Valley" ? <LoranValleyGuide /> : null}
      {destination.name === "Shiv Khori" ? <ShivKhoriGuide /> : null}
      {destination.name === "Chinka Valley" ? <ChinkaValleyGuide /> : null}
      {destination.name === "Deva Mai" ? <DevaMaiGuide /> : null}
      {destination.name === "Devi Pindi Trek & Mandir" ? <DeviPindiGuide /> : null}
      {destination.name === "Sukrala Mata Mandir" ? <SukralaMataGuide /> : null}
      {destination.name === "Surinsar Lake" ? <SurinsarLakeGuide /> : null}
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
      destination.name !== "Doodpathri" &&
      destination.name !== "Warwan Valley" &&
      destination.name !== "Verinag" &&
      destination.name !== "Dudu Valley" &&
      destination.name !== "Sanasar" &&
      destination.name !== "Aharbal Waterfall" &&
      destination.name !== "Sudh Mahadev Temple" &&
      destination.name !== "Bangus Valley" &&
      destination.name !== "Yusmarg" &&
      destination.name !== "Purthu" &&
      destination.name !== "Suchetgarh Border" &&
      destination.name !== "Darhal Waterfall & Shadra Sharief" &&
      destination.name !== "Keran Border" &&
      destination.name !== "Amarnath Yatra (Seasonal)" &&
      destination.name !== "Tulip Garden (Seasonal)" &&
      destination.name !== "Panchari" &&
      destination.name !== "Loran Valley" &&
      destination.name !== "Shiv Khori" &&
      destination.name !== "Chinka Valley" &&
      destination.name !== "Deva Mai" &&
      destination.name !== "Devi Pindi Trek & Mandir" &&
      destination.name !== "Sukrala Mata Mandir" &&
      destination.name !== "Surinsar Lake" ? (
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

function SurinsarLakeGuide() {
  const faqs = [
    ["How far is Surinsar Lake from Jammu?", "It is approximately 25 km from Jammu City."],
    ["How far is it from Mansar Lake?", "Surinsar and Mansar are around 9 km apart."],
    [
      "Is birdwatching possible?",
      "Yes. Seasonal water birds and migratory birds can be seen, especially in cooler months.",
    ],
    [
      "Can I visit Surinsar and Mansar in one day?",
      "Yes. The twin-lake circuit is a popular day trip from Jammu.",
    ],
    [
      "What is the best time?",
      "March to June is especially pleasant; October and November are also comfortable.",
    ],
    [
      "What are the usual timings?",
      "The lake area is generally visited from 7:00 AM to 5:00 PM; confirm locally before travel.",
    ],
    [
      "Is there an entry fee?",
      "Entry is normally free, though activities or facilities may have separate charges.",
    ],
    [
      "Is boating available?",
      "Follow current local instructions; boating availability can change with season and management.",
    ],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Jammu district, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Distance"
          value="25 km from Jammu · 9 km from Mansar"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="Half day or twin-lake day trip"
        />
      </section>

      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Where sacred legends meet the serenity of nature
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Surinsar Lake is a peaceful freshwater lake set among the forested hills and green
              countryside of Jammu district. About 25 km from Jammu City and only 9 km from Mansar
              Lake, it is an easy escape for nature lovers, families, birdwatchers, and
              photographers.
            </p>
            <p>
              Calm waters, a small central island, seasonal lotus blooms, and birdlife give the lake
              its quiet character. Together with Mansar, Surinsar forms a beloved twin-lake circuit
              where natural beauty and local mythology meet.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Legend & history
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Local tradition links Surinsar and Mansar to the Mahabharata. One popular belief
            connects the lakes with Arjuna and Babar Vahan, while another associates the waters with
            the divine serpent Sheshnag. The lake is also known in local tradition as Surangsar.
          </p>
          <p>
            These stories have made Surinsar more than a scenic stop: it is a place where visitors
            are encouraged to move gently, respect the water, and appreciate its cultural
            significance.
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              One-day circuit
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → Surinsar → Mansar → Jammu
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Leave Jammu in the morning for lakeside walks, reflections, and photographs at
              Surinsar. Late morning is ideal for a gentle nature walk, seasonal lotus views, and
              birdwatching. Continue to Mansar in the afternoon for its temples, lakefront, and
              local food, then return to Jammu by evening.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Freshwater lake · forested hills · central island · lotus blooms · seasonal birds ·
              twin-lake mythology · lakeside walks · family picnic setting · nearby adventure
              activities
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Walk beside the lake · watch for lotus and birds · photograph calm water and
              surrounding hills · enjoy a picnic responsibly · explore the Surinsar–Mansar circuit.
              A nearby adventure park may offer activities such as a giant swing, trampoline, and
              climbing wall; availability is subject to current local operation.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant weather and lush scenery.{" "}
              <strong className="text-ink">July–September:</strong> rich monsoon greenery with rain
              possible. <strong className="text-ink">October–November:</strong> comfortable weather
              and clear views. <strong className="text-ink">December–February:</strong> cooler
              conditions and good seasonal birdwatching.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport is approximately 45–50 km away."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Jammu Tawi Railway Station is approximately 30–35 km away."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="About 25 km from Jammu and 65–70 km from Katra; taxis and public buses are available."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Entry is normally free. Activities and some facilities may charge separately."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Generally 7:00 AM–5:00 PM. Morning is best for calm water and birdwatching."
          />
        </div>
      </section>

      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & travel services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Expect lakeside walking areas, parking, basic food options, tourist facilities, and
              stays in the wider Jammu–Mansar area. Jammu makes the most convenient base for taxis,
              buses, sightseeing, and overnight accommodation.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Outdoor experience
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Surinsar is ideal for quiet birdwatching, nature walks, lotus viewing, forest scenery,
              picnic time, and photography. Keep to designated paths and check local guidance before
              using water-based or adventure activities.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Responsible visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Do not enter the water without permission. Avoid disturbing wildlife, feeding birds,
              or leaving litter. Respect religious and local instructions, use marked walking areas,
              and help keep the lake clean for its birds and future visitors.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions & food
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Mansar Lake · Surinsar–Mansar Wildlife Sanctuary · Sheshnag and Umapati Mahadev
              Temples · Bahu Fort · Bagh-e-Bahu. Try Rajma Chawal, Kaladi Kulcha, Dogra thali,
              Khatta Meat, kulhad tea, and local sweets. Photograph early reflections, birds from a
              respectful distance, lotus in season, and golden-hour hills.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <div key={question} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{question}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Jammu district · freshwater lake · 25
          km from Jammu · 9 km from Mansar · nature, spirituality, birdwatching and photography ·
          best March–June · half-day visit or full twin-lake circuit.
        </p>
      </section>

      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Surinsar Lake?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Surinsar Lake offers a gentle combination of natural beauty, mythology, and an easy day
            escape from Jammu. Pair it with Mansar for a memorable lake circuit of forest views,
            quiet walks, local flavour, and the unhurried rhythm of the Jammu hills.
          </p>
        </div>
      </section>
    </>
  );
}

function SukralaMataGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Sukrala near Billawar, Kathua"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 3,500 feet"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="Half day to full day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A sacred hilltop shrine of Dogra land
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              On a peaceful, forested Billawar hillock, Sukrala Mata Mandir is an important historic
              Dogra shrine. Dedicated to Sukrala Devi, it is traditionally associated with Mal Devi,
              regarded as an incarnation of Sharda Devi.
            </p>
            <p>
              At around 3,500 feet, the temple combines spirituality, local legend, heritage, and
              Jammu-hill scenery. Visitors climb flights of steps to reach the hilltop sanctum.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          History & religious significance
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Tradition describes the shrine as the abode of Mal Devi/Sharda Devi, manifested as a
            Shilla, a stone slab seated on a brass lion with a silver-mounted head. It also contains
            an image of Mahishasur Mardini associated with Maha Lakshmi.
          </p>
          <p>
            The temple is traditionally believed to have been built by Madho Singh, an exiled Chamba
            prince. It remains a key religious and cultural part of Duggar heritage.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              One-day plan
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → Kathua → Billawar → Sukrala
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Start early, travel through Kathua to Billawar, then continue approximately 9.6 km to
              Sukrala. Park near the shrine, climb the temple steps, take darshan, and enjoy the
              surroundings. In the afternoon return to Billawar and visit Mahabilvakeshwar Temple if
              time allows before travelling back to Jammu.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              The final Billawar–Sukrala section rises to the hilltop. Check local road conditions
              during monsoon or heavy rain.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Historic shrine · 3,500-ft hilltop · forest · Dogra heritage · sacred Shilla · brass
              lion · Mahishasur Mardini · countryside views · Navratri atmosphere
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Seek darshan · climb the temple steps · enjoy hilltop greenery · photograph
              exterior/steps/views with permission · explore historic Billawar temples.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time & festivals
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> comfortable travel.{" "}
              <strong className="text-ink">July–September:</strong> greener but wet/slippery roads
              and steps. <strong className="text-ink">October–November:</strong> comfortable
              pilgrimage and exploration. <strong className="text-ink">December–February:</strong>{" "}
              cool; check roads/weather. Navratri is a major period, with substantially larger
              crowds.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport → Kathua → Billawar → Sukrala, approximately 110–120 km."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Kathua Railway Station → Billawar → Sukrala, approximately 75 km."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Jammu: 110–120 km; Kathua: 75 km; Billawar: 9.6 km. Buses connect Billawar with Jammu, Kathua, Udhampur, and Pathankot."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="No regular darshan fee; voluntary donations/offerings and special services may have separate arrangements."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Use daylight hours and confirm current darshan schedule locally, especially during Navratri."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & travel services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Temple facilities, water, basic pilgrim services, route shops/refreshments, local
              transport, and Billawar stays. Billawar has guest houses, a dak bungalow, and private
              hotels; taxis/local vehicles can be arranged. Carry water and basic snacks.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Outdoor experience
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              This is a spiritual/heritage destination rather than a long trek: enjoy hill walking,
              the step pilgrimage, nature exploration, hilltop views, and landscape photography.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Mahabilvakeshwar Temple · Billawar · Sarthal · Basohli
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Khatta · Ambal · Kaladi Kulcha · Dogri tea. Photograph the temple from
              the steps, surrounding hills, countryside, shrine details, and morning/late-afternoon
              light; follow sanctum rules.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "Is it a trek?",
              "It is a hillock pilgrimage reached by flights of steps, not a long wilderness trek.",
            ],
            ["Where is it?", "Sukrala near Billawar, Kathua."],
            ["Distance from Billawar?", "Approximately 9.6 km."],
            ["Distance from Kathua?", "Approximately 75 km."],
            ["How high is it?", "Around 3,500 feet."],
            ["What is it associated with?", "Mal Devi, regarded as Sharda Devi's reincarnation."],
            ["When is it busiest?", "Navratri."],
            [
              "Can it be a day trip?",
              "Yes, from Jammu or nearby towns, especially with Billawar heritage.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Sukrala, Kathua · near Billawar · 3,500
          feet · 9.6 km from Billawar · 75 km from Kathua · historic/religious · Sukrala Mata · road
          plus steps · best March–June &amp; October–November · Navratri · half/full day.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Sukrala Mata?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Sukrala unites faith, history, Dogra heritage, and peaceful hill country. The climb from
            Billawar to its green hilltop shrine gives travellers a meaningful spiritual stop beyond
            the usual routes.
          </p>
        </div>
      </section>
    </>
  );
}

function DeviPindiGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Starting area"
          value="Painthal / Ladda, Reasi"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Trek difficulty"
          value="Easy to moderate"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal trip"
          value="Half day to 1 day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A sacred trail through Reasi&apos;s hills
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Devi Pindi blends spirituality, nature, and short mountain trekking among Reasi&apos;s
              green hills. The Devi Pindi Mata Mandir is traditionally linked with Mata Vaishno
              Devi, offering a quieter, more offbeat alternative to the large Vaishno Devi route.
            </p>
            <p>
              Forest, rock, stream, green hills, narrow paths, and viewpoints make the journey as
              important as temple darshan. Published local descriptions vary: about 3 km beside a
              stream, or two routes around 2.5 km and 5 km depending on the trailhead.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Religious significance & trek
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Devotees worship the Divine Mother here in the form of Pindies, and the secluded setting
            makes the approach part of its spiritual experience.
          </p>
          <p>
            The trek is easy to moderate depending on route, weather, and fitness. A shorter
            Koda-village route is roughly 2.5 km, while a nursery/canal approach is around 5 km;
            trails connect. Rain can make rocks and paths slippery.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Suggested day trip
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu / Katra → Painthal / Ladda → Trek → Mandir
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Arrive early, follow the designated/local trail, and enjoy forest, streams, hills, and
              views. After darshan and rest, return to the trailhead in daylight, then head toward
              Katra or Jammu. Devi Pindi is commonly described as around 15 km from Katra, though
              the road approach depends on the exact trailhead.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Devi Pindi Mandir · forest trek · water stream · green hills · rocky paths · quiet ·
              spiritual experience · photography · short adventure · offbeat Katra destination
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Pray at the Mandir · forest trek · enjoy streams and greenery · photograph trail,
              rock, temple and mountains · rest/picnic only where allowed and keep the area clean.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, comfortable
              beginners/families. <strong className="text-ink">July–September:</strong> lush with
              flowing water but slippery rock and higher streams; check weather.{" "}
              <strong className="text-ink">October–November:</strong> clear, comfortable,
              photographic. <strong className="text-ink">December–February:</strong> cooler and
              quieter.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport → Jammu → Katra/Udhampur Road → Painthal/Ladda."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Shri Mata Vaishno Devi Katra station, then Painthal/Ladda and the trek."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Jammu/Katra → Katra/Udhampur Road → Painthal/Ladda. Katra area distance is about 15 km; trek is 2.5–5 km by trail."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Temple entry is generally free; voluntary religious offerings are welcome."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Temple arrangements can vary; begin trekking 6:00 AM–3:00 PM so return is complete in daylight."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Basic temple facilities, local water sources, limited roadside services, and possible
              trailhead parking. Bring water, snacks, first aid, torch/phone light, trekking shoes,
              and rain protection. Katra is the practical base for hotels, food, medical care, and
              services. Local support includes Jammu/Katra transport, Devi Pindi trek, sightseeing,
              Vaishno Devi, Nau Devi, Baba Dhansar, Shiv Khori, Reasi, and custom pilgrimages.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Trek safety
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Start early, check weather, wear proper shoes, carry water/snacks/charged phone/power
              bank, avoid trekking alone, stay on local trail, take care on wet rocks, avoid swollen
              streams/wildlife, do not litter, and never begin the return late — forest sections are
              hard to navigate after dark.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Vaishno Devi · Nau Devi Mata · Deva Mai · Bhimgarh Fort · Baba Dhansar · Shiv Khori
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              After the trek try Rajma Chawal, Kaladi Kulcha, Dogri food, Chole, breads, tea, Kahwa,
              and snacks around Katra/Reasi. Carry your own trail food/water. Photograph forest,
              water, rock, temple, hills, and green valleys early; monsoon is vivid but slippery.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "Why is Devi Pindi famous?",
              "Religious importance, forest trek, and peaceful Reasi setting.",
            ],
            ["Where is it?", "Painthal/Ladda area, Reasi."],
            ["How far from Katra?", "About 15 km, varying by trailhead."],
            [
              "How long is the trek?",
              "Different approaches range about 2.5–5 km, with a published stream route around 3 km.",
            ],
            [
              "Suitable for beginners?",
              "For reasonably fit beginners, but rain makes it more difficult.",
            ],
            [
              "Can children go?",
              "Older children comfortable on uneven trail may go; assess weather and conditions.",
            ],
            ["Year-round?", "The area can be visited, but trail weather matters greatly."],
            [
              "Can I stay overnight?",
              "No established temple accommodation; use Katra, or confirm permitted camping locally.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Painthal/Ladda, Reasi · Spiritual &amp;
          Trekking · Devi Pindi Mata Mandir · Katra approx. 15 km · trek 2.5–5 km · easy–moderate ·
          Katra station/Jammu Airport · half day–1 day · best March–June and October–November.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Devi Pindi?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Devi Pindi is where a spiritual journey meets offbeat mountain adventure. Forest paths,
            flowing water, mountain scenery, and the sacred temple make a distinctive Reasi
            experience beyond the busiest pilgrimage routes.
          </p>
        </div>
      </section>
    </>
  );
}

function DevaMaiGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Near Katra, Reasi District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Classification"
          value="Spiritual, Heritage & Nature"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal visit"
          value="1–2 hours"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Where faith meets Katra&apos;s quiet hills
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In the Shivalik hills near Katra, Deva Mai is a peaceful, spiritually significant
              Reasi destination. The temple is dedicated to the Divine Mother and traditionally
              connected to Mata Vaishno Devi.
            </p>
            <p>
              Away from central Katra&apos;s busier areas, it offers a quieter experience of faith,
              greenery, hill views, and local tradition. It is regarded as the second Darshan in a
              traditional sequence beginning at Kol Khandoli and continuing toward Vaishno Devi.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          History & local beliefs
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Local tradition associates Deva Mai with Mata Vaishno Devi&apos;s early spiritual
            journey. Accounts describe the Divine Mother as having lived here in the form of a young
            girl, giving the temple an important place in Katra&apos;s religious heritage.
          </p>
          <p>
            Trees and Shivalik landscapes reinforce its calm atmosphere, and the shrine has become a
            significant stop for the wider Katra–Vaishno Devi pilgrimage region.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Suggested route & plan
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → Katra → Deva Mai
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Deva Mai is approximately 4 km from Katra through a short detour off the Jammu–Katra
              road; the exact distance varies by starting point. Jammu–Katra is about 50 km, making
              Jammu–Deva Mai around 54–60 km.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">Suggested day:</strong> Morning Katra → temple darshan →
              surroundings; afternoon Katra lunch/sightseeing; evening market, rest, or Vaishno Devi
              preparation.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Deva Mai Temple · Vaishno Devi traditions · Shivalik surroundings · quiet faith ·
              pilgrimage circuit · greenery · views · photography · short Katra excursion
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Pray at the temple · enjoy hill surroundings · photograph landscape · walk
              respectfully around the site · include it in a broader Katra and Trikuta spiritual
              circuit.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time & festivals
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, easy family visits.{" "}
              <strong className="text-ink">July–September:</strong> fresh monsoon scenery; check
              slippery hill roads. <strong className="text-ink">October–November:</strong> clear,
              peaceful, photo-friendly. <strong className="text-ink">December–February:</strong>{" "}
              cooler and quiet. Navratri and Durga Puja are especially important and can bring
              larger crowds.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport → Jammu → Katra → Deva Mai; Jammu–Katra is approximately 50 km."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Shri Mata Vaishno Devi Katra station; taxi/local vehicle makes the short final journey."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private car, taxi, rental, and suitable local transport via Jammu–Katra and the local detour."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="No separate temple entry fee is generally associated; donations are voluntary and current rules apply."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Best visited in daylight; timings can vary in festivals and religious occasions."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Deva Mai is a smaller religious stop, so use Katra for hotels, restaurants, medical
              services, shops, ATMs, transport, and tourist support. Services include Jammu Airport,
              Katra rail, local sightseeing, temple, Vaishno Devi assistance, Nau Devi, Baba
              Dhansar, Shiv Khori, Reasi, and custom pilgrimages.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Vaishno Devi Shrine · Nau Devi Mata Mandir · Baba Dhansar · Bhimgarh Fort · Siyad Baba
              · Shiv Khori
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Katra offers Rajma Chawal, Kaladi Kulcha, Dogri food, Chole, breads, tea, Kahwa, and
              snacks. Photograph temple architecture, hills, forest, entrance, and religious details
              in morning or warm evening light; respect sanctum restrictions.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Travel tips
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Dress respectfully, follow temple customs, avoid loud behaviour/littering, carry water
              and good footwear, check festival crowds, respect photography restrictions, and keep
              cash for small expenses.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "Why is Deva Mai famous?",
              "Its religious link with Mata Vaishno Devi and quiet Shivalik setting.",
            ],
            ["Where is it?", "Reasi district, close to Katra."],
            ["How far from Katra?", "Approximately 4 km, varying by starting point/route."],
            [
              "Can I combine it with Vaishno Devi?",
              "Yes, easily as part of a Katra pilgrimage itinerary.",
            ],
            ["Family friendly?", "Yes, as a short spiritual and sightseeing excursion."],
            [
              "Is there a trek?",
              "It is reached by road via a short detour; follow current local access rather than assuming a trekking route.",
            ],
            ["How long should I stay?", "Around 1–2 hours depending on darshan and crowds."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Near Katra, Reasi · Spiritual/Heritage
          · Deva Mai Temple · Vaishno Devi association · 4 km from Katra · 55–60 km from Jammu ·
          Jammu Airport · Katra Rail · 1–2 hours · year-round.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Deva Mai?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Deva Mai is a quiet spiritual experience beyond Katra&apos;s busiest routes. Its Vaishno
            Devi traditions, green hills, and convenient location make it a meaningful addition to
            any Katra pilgrimage.
          </p>
        </div>
      </section>
    </>
  );
}

function ChinkaValleyGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Chinka/Chinkah, Arnas, Reasi District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Classification"
          value="Nature, Lakeside & Adventure"
        />
        <InfoCard icon={<CalendarDays className="h-5 w-5" />} label="Ideal trip" value="1 day" />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Where mountains meet the waters of Chenab
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Chinka Valley is an emerging Reasi destination around the Salal Dam backwaters on the
              Chenab River. Mountain scenery, expansive water, rural hills, forests, and open
              landscapes create a quieter side of Jammu &amp; Kashmir.
            </p>
            <p>
              It is being developed for nature, adventure, and water-based tourism. The reservoir
              gives the valley its signature character, appealing to photographers, families, and
              travellers seeking scenic exploration away from crowded routes.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          History & local character
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Chinka lies in Reasi&apos;s Arnas area, among mountain and rural communities. The Salal
            Hydroelectric Project shaped the modern landscape by forming the Salal reservoir on the
            Chenab.
          </p>
          <p>
            Today the water and hills define a lesser-known Reasi attraction, alongside district
            efforts to grow adventure, nature, and spiritual tourism.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Suggested route
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → Katra → Reasi → Chinka
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Katra–Reasi is approximately 24–30 km; Reasi–Chinka about 20 km. Use an approximate
              Katra distance of 45–50 km because viewpoints within Chinka vary. Jammu–Chinka is
              approximately 95–105 km via Katra and Reasi, through mountain roads and rural scenery
              to the Salal reservoir.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Chinka Valley · Salal backwaters · Chenab scenery · mountains · green hills · villages
              · photography · walks · sunsets · adventure and water-recreation potential
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore scenic areas · enjoy reservoir views · photograph mountains, water, villages,
              roads, sunset and reflections · take suitable nature walks while respecting
              local/private land · picnic where permitted · use only authorised water/adventure
              activities.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, family and
              photography. <strong className="text-ink">July–September:</strong> lush with fuller
              water views; check rain/road conditions.{" "}
              <strong className="text-ink">October–November:</strong> clear, autumn, fewer crowds.{" "}
              <strong className="text-ink">December–February:</strong> cool and peaceful with winter
              scenery.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport → Jammu → Katra → Reasi → Chinka, around 100 km depending on endpoint."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Shri Mata Vaishno Devi Katra station; then Katra–Reasi–Chinka, around 45–50 km."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Jammu–Katra–Reasi–Chinka. Taxis, private/rental vehicles and local transport to Reasi are available."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="No reliably published general fee. Parking, authorised activities, water recreation, and local services may cost separately."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="No established valley-wide timetable; 8:00 AM–6:00 PM daylight travel is recommended."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              An emerging destination with local shops, small refreshment options, basic services,
              suitable parking, and developing Reasi facilities. Katra/Reasi are more practical for
              stays and restaurants. Services: Katra/Jammu pickup, Katra–Reasi sightseeing, Chinka
              day trip, Salal reservoir, Shiv Khori, Vaishno Devi, Reasi, and custom tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Adventure & safety
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Possible regional experiences include rafting, trekking, walks, photography, water
              activities, adventure sports, camping where permitted, and exploration. Use authorised
              providers only and follow reservoir safety instructions.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Katra · Vaishno Devi · Bhim Garh Fort · Siyad Baba · Shiv Khori · Dera Baba Banda
              Bahadur · Salal Dam &amp; Reservoir
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Kaladi · Dogri dishes · Makki di Roti · Sarson da Saag · breads · Kahwa
              · tea · snacks. Photograph reservoir viewpoints, hills, village roads, reflections,
              and sunset; mornings are clearer, evenings are golden.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Travel tips
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Check weather/roads; carry water, snacks, cash, and comfortable shoes; avoid
              littering/restricted areas; respect local communities; do not enter water unless an
              activity is officially permitted.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Why is Chinka famous?", "Salal backwaters, mountains, and quiet Reasi scenery."],
            ["Where is it?", "Chinka/Chinkah in Reasi's Arnas area."],
            ["Distance from Katra?", "Approximately 45–50 km depending on the local endpoint."],
            ["Distance from Reasi?", "Approximately 20 km."],
            ["Can it be a day trip?", "Yes, from Katra or Reasi for sightseeing and photography."],
            [
              "Family-friendly?",
              "Yes for scenery; water/adventure activities should be authorised.",
            ],
            ["Is it crowded?", "It is still developing and quieter than Katra/Vaishno Devi."],
            ["Good for photos?", "Yes — reservoir, hills, villages, and water reflections."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Chinka, Reasi · Nature &amp; Adventure
          · Salal backwaters/mountains · nearest town Reasi · nearest rail Katra · nearest airport
          Jammu · Katra 45–50 km · Reasi 20 km · one day · best March–June &amp; October–November.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Chinka Valley?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Chinka is where Reasi&apos;s mountains meet Chenab water. For travellers going beyond
            the Katra–Vaishno Devi circuit, it adds quiet villages, reservoir panoramas, mountain
            roads, and a peaceful scenic experience.
          </p>
        </div>
      </section>
    </>
  );
}

function ShivKhoriGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Ransoo, Pouni, Reasi District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,500 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1 day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            The sacred cave of Lord Shiva
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In Reasi&apos;s hills near Ransoo village, Shiv Khori is a revered Lord Shiva cave
              shrine with a naturally formed Shivling and divine rock formations. Its name means
              “Abode of Lord Shiva,” and the cave extends deep into the mountain.
            </p>
            <p>
              Thousands visit year-round, especially at Maha Shivratri. Forest, hills, villages, and
              the spiritual trek make it a meaningful combination of faith, adventure, and Jammu
              scenery, often combined with Vaishno Devi.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          History & faith
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Hindu belief associates this ancient cave with Shiva&apos;s meditation and several
            divine stories. The naturally formed Shivling is the centre of devotion and the cave is
            held to reveal Shiva&apos;s presence.
          </p>
          <p>
            The annual pilgrimage has grown with improved pilgrim facilities, establishing Shiv
            Khori as one of Jammu &amp; Kashmir&apos;s most visited religious sites.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Suggested route
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → Katra → Reasi → Pouni → Ransoo → Cave
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Jammu: 140 km · Katra: 80 km · Reasi: 45 km. Jammu–Katra passes foothills, villages,
              forest, and Trikuta views. Katra–Reasi brings Chenab, hills, valleys, and villages.
              Ransoo is the base, followed by a scenic 3.5 km trek with rest areas, shops, and
              pilgrim facilities.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Holy Cave · natural Shivling · divine rock formations · Shiva pilgrimage · Himalayan
              views · Ransoo · Shivratri · mountain trek
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Seek blessings · darshan of the Shivling · join Shivratri · trek Ransoo route · enjoy
              mountains · visit nearby religious/natural sights · experience village culture.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant and good for trekking.{" "}
              <strong className="text-ink">July–September:</strong> green, occasional rain.{" "}
              <strong className="text-ink">October–November:</strong> cool, comfortable pilgrimage.{" "}
              <strong className="text-ink">December–February:</strong> cold but suitable with
              preparation.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 140 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Shri Mata Vaishno Devi Katra station, about 80 km; Jammu Tawi is an alternative."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Buses, taxis, tourist and personal vehicles via Jammu–Katra–Reasi–Pouni–Ransoo."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Temple entry is free; registration may be needed in special pilgrimage periods."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Generally open year-round, recommended 6:00 AM–8:00 PM; times can change for festivals/weather."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Water, shelters, food stalls, special-occasion langar, medical/security support, rest
              areas, parking, possible pony/palanquin, and souvenir shops. Services: Jammu
              Airport/Rail, Katra, Vaishno Devi, Shiv Khori, Reasi, Bhairav Ghati, Patnitop, and
              custom pilgrimage packages.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Trek support
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Pony, palki, local guide, and senior-citizen assistance are available subject to
              provider and route charges.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Vaishno Devi, Katra · Bhim Garh/Reasi Fort · Salal Dam · Chenab River · Baba Dhansar ·
              Jhajjar Kotli · Nau Devi Temple
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Kaladi Kulcha · Dogra Thali · Patisa · Khatta Meat · Lassi · sweets.
              Cave photography may be restricted; photograph mountains, trek, Ransoo, villages, and
              viewpoints early or at golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["What is Shiv Khori famous for?", "Natural Shivling and sacred Lord Shiva cave."],
            ["How long is the trek?", "Approximately 3.5 km from Ransoo."],
            [
              "Suitable for seniors?",
              "Yes, with pony/palki where available, though health and fitness matter.",
            ],
            ["Can it be combined with Vaishno Devi?", "Yes, many pilgrims combine both."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Ransoo, Reasi · 1,500 metres · 140 km
          from Jammu · 80 km from Katra · natural Shivling/Cave · best March–June &amp;
          September–November · 1 day · Jammu Airport and Katra station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Shiv Khori?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Shiv Khori is more than pilgrimage: sacred cave, rock formations, hill trail, and
            peaceful mountains create a memorable journey for Shiva devotees and anyone exploring
            Jammu&apos;s spiritual heritage.
          </p>
        </div>
      </section>
    </>
  );
}

function LoranValleyGuide() {
  const facts = [
    ["Location", "Loran Valley, Poonch District"],
    ["Region", "Pir Panjal Mountains"],
    ["Ideal trip duration", "1–2 days"],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        {facts.map(([label, value]) => (
          <InfoCard key={label} icon={<MapPin className="h-5 w-5" />} label={label} value={value} />
        ))}
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A peaceful hidden valley of Poonch
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Located in Poonch&apos;s Pir Panjal mountains, Loran Valley is a peaceful,
              lesser-known destination of high mountains, green forest, flowing streams, and
              traditional villages. Near Mughal Road, it offers an untouched Himalayan experience
              away from crowded tourist places.
            </p>
            <p>
              The Loran River, green meadows, pine and deodar forest, snow-covered winter peaks, and
              quiet village life suit nature lovers, photographers, adventurers, and offbeat travel.
              Historically it was an important mountain route linking Poonch and Kashmir.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Loran was traditionally connected with trade and travel between Poonch and Kashmir
            through Pir Panjal high-altitude routes. Mughal emperors used the nearby historic Mughal
            Road while travelling between the plains and Kashmir.
          </p>
          <p>
            The valley preserves Pahari and Gujjar heritage in local architecture, agriculture,
            cultural practices, and mountain life.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px] grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Suggested route
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → Rajouri → Poonch → Loran
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Jammu: 230–250 km · Poonch: 30–35 km · Rajouri: 120–130 km · Srinagar via Mughal Road:
              200–220 km. Jammu–Rajouri passes hills, Chenab scenery, mountain roads and forest;
              Rajouri–Poonch crosses Pir Panjal valleys and villages; the final stretch has pines,
              deodar, streams, and viewpoints.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Pir Panjal scenery · Loran River · meadows · pine/deodar forest · villages · snow
              peaks · peace · photography · Mughal Road connection
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore village · photograph mountains · walk rivers and streams · experience culture
              · explore forest · picnic · visit nearby valleys · enjoy village life · watch
              sunrise/sunset · camp with local guidance.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant and green.{" "}
              <strong className="text-ink">July–September:</strong> fresh streams and vibrant
              valley; be careful in heavy rain.{" "}
              <strong className="text-ink">October–November:</strong> autumn, clear views,
              photography. <strong className="text-ink">December–February:</strong> cold and
              possible snow; check roads before travel.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar Airport: 200–220 km via Mughal Road; Jammu Airport: 230–250 km."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Jammu Tawi, approximately 230–250 km; continue by road to Poonch."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Taxi, tourist, or private vehicle via Jammu–Rajouri–Poonch; mountain driving experience is recommended."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Free; parking, camping, and local activities may vary."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination; daytime 8:00 AM–6:00 PM is recommended."
          />
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & travel services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Facilities are limited: small shops, homestays, local food, parking, and local help.
              Carry water, snacks, medicine, power bank, warm clothing, and shoes. Services include
              Jammu pickup, Poonch sightseeing, Loran, Mughal Road, Pir Panjal, Rajouri–Poonch, and
              custom mountain tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Walks & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Short hikes, forest walks, village trails, meadow exploration, and photography walks
              are suitable. Longer Pir Panjal routes need local guidance.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Poonch Fort · Dehra Ki Gali · Peer Ki Gali · Mughal Road · Noori Chamb · Nandishool
              Waterfall · Shahdara Sharief · Darhal Valley · Surankote
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Makki di Roti · Sarson da Saag · Kaladi Kulcha · Dogra and Pahari
              dishes · Kahwa · sweets. Photograph mountains, streams, green valleys, forest trails,
              village life, snow peaks, and sunsets early or at golden hour.
            </p>
          </div>
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
                "What is Loran famous for?",
                "Peaceful scenery, forest, river, villages, and Pir Panjal beauty.",
              ],
              ["Where is it?", "Poonch district, Jammu & Kashmir."],
              ["Family friendly?", "Yes, for families, photographers, and nature lovers."],
              [
                "How much time?",
                "A Poonch day trip is possible; overnight is better for the full valley.",
              ],
              [
                "Is trekking available?",
                "Short hikes and walks are possible; longer routes need local guidance.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Loran Valley, Poonch · Pir Panjal ·
            30–35 km from Poonch · 230–250 km from Jammu · valley, forest, river, Mughal Road ·
            March–November · 1–2 days · Jammu/Srinagar Airport and Jammu Tawi.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Loran Valley?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Loran is a quiet Pir Panjal treasure of mountains, streams, forests, and traditional
            villages — a memorable route into Poonch&apos;s hidden Himalayan side.
          </p>
        </div>
      </section>
    </>
  );
}

function PanchariGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Panchari, Udhampur District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,000 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1–2 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A quiet tourist village in the Jammu hills
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Panchari is an emerging Udhampur hill destination among green forest, meadow, and
              mountain landscapes. Its cool climate, peaceful atmosphere, and natural beauty provide
              a calm alternative to crowded hill towns.
            </p>
            <p>
              At around 2,000 metres, the area has pine and deodar forest, traditional villages,
              ridges, village tourism, home stays, walks, and photography. It is a hidden Jammu gem
              for families and travellers wanting quiet Himalayan foothills.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Panchari is a mountain settlement shaped by Dogra and Pahari culture. Local villages
            have maintained food, customs, and hillside life for generations.
          </p>
          <p>
            Promotion as a tourist village brought attention to rural stays and Udhampur nature.
            Nearby Shankri Devta Temple, on a meadow-and-forest hillock, adds spiritual and cultural
            significance.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Suggested route
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → Udhampur → Chenani → Panchari
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Jammu: 90–100 km · Udhampur: 40–45 km · Katra: 70–80 km. Jammu to Udhampur passes
              plains, foothills, Chenab-region scenery, and highway landscapes. From Udhampur,
              winding roads pass forest, green valleys, villages, and viewpoints into cool Panchari.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Hill landscapes · meadows · deodar and pine · quiet mountain environment · tourist
              village · Dogra/Pahari culture · Shankri Devta · homestays · photography · cool
              summers
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore village · walk in nature · visit meadows · experience village life · stay in
              homestays · photograph · visit Shankri Devta · explore forest trails · enjoy local
              cuisine · relax with family.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, ideal outdoors.{" "}
              <strong className="text-ink">July–September:</strong> fresh, cloudy, monsoon beauty;
              take care in heavy rainfall. <strong className="text-ink">October–November:</strong>{" "}
              clear autumn and photography. <strong className="text-ink">December–February:</strong>{" "}
              cold, possible higher snow, ideal for winter lovers.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, 95–110 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Udhampur Railway Station, 40–50 km; Jammu Tawi is another option."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Taxi, tourist/private vehicle, or bus via Jammu–Udhampur–Chenani."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Free; parking, stay, and activity costs may apply."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open hill destination; daylight visits, 8:00 AM–6:00 PM recommended."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Homestays · guest houses · shops · food · tourist assistance · parking. Bring water,
              warm layers, medicine, power bank, good shoes, and supplies. Services: Jammu
              Airport/city, Udhampur, Panchari, Shankri Devta, Chenani, and custom mountain tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Walks & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              No major famous trek, but short nature/forest walks, village hikes, meadow
              exploration, and photo walks are available with local guidance.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Shankri Devta · Sudh Mahadev · Mantalai · Patnitop · Nathatop · Sanasar · Krimchi
              Temples · Udhampur
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Makki di Roti · Saag with desi ghee · Rajma Chawal · Kaladi Kulcha · Dogra food ·
              Kahwa · sweets. Capture slopes, forest, villages, sunrise, misty hills, traditional
              homes, and seasonal change at early morning or golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Panchari famous for?",
              "Peaceful hill atmosphere, forests, meadows, cool climate, and tourist village experience.",
            ],
            ["Where is it?", "Udhampur district, Jammu & Kashmir."],
            ["Family friendly?", "Yes, for families, photographers, and quiet mountain travel."],
            [
              "How much time?",
              "A Jammu day trip works; overnight offers more mountain atmosphere.",
            ],
            ["Is trekking available?", "No major route, but short hikes and walks are possible."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Panchari, Udhampur · 2,000 metres ·
          90–100 km from Jammu · forest, meadow, village tourism, cool air · best March–November ·
          1–2 days · Jammu Airport and Udhampur station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Panchari?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Panchari is a refreshing offbeat weekend escape — green forest, village traditions, cool
            hills, and quiet scenery make it a relaxed way to experience a lesser-known side of
            Jammu &amp; Kashmir.
          </p>
        </div>
      </section>
    </>
  );
}

function TulipGardenGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Srinagar, at Zabarwan foothills"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,600 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Tulip season"
          value="March–April · dates vary annually"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Kashmir&apos;s brief season of colour
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              The Indira Gandhi Memorial Tulip Garden overlooks Dal Lake from the Zabarwan
              foothills. Its large, ordered flower beds and mountains form one of Jammu &amp;
              Kashmir&apos;s most celebrated spring scenes.
            </p>
            <p>
              Previously called Model Floriculture Centre, the garden displays millions of tulips in
              varied colour and has become a major spring attraction for visitors from India and
              abroad. Unlike regular gardens, its famed tulip show lasts only a short period each
              year.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Seasonal nature & history
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Tulips typically bloom in March–April, with opening based on temperature, winter snow,
            growth, and weather. Winter closure allows bulbs the cold conditions they need;
            gardeners prepare beds before spring opening. Peak bloom is only a few weeks, and after
            flowering the garden may remain visitable without the signature display.
          </p>
          <p>
            Established in 2007 to promote floriculture and tourism, the garden was built into
            Zabarwan slopes for both cultivation and scenic travel. The annual Tulip Festival
            celebrates spring with flowers, Kashmiri culture, crafts, and traditions.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Travel route
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Srinagar → Boulevard Road → Dal Lake → Tulip Garden
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              City centre: 8–10 km · Airport: 20–25 km · Railway Station: 10–12 km. The approach
              crosses Srinagar city, markets, Dal Lake scenery, Boulevard Road, Mughal-garden
              surroundings, Zabarwan views, and colourful beds.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Millions of tulips · Zabarwan backdrop · Dal Lake views · spring bloom · Tulip
              Festival · flower displays · family experience · photography
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Walk flower fields · photograph tulips · capture mountains · join the festival · visit
              Dal Lake and Mughal gardens · try Kashmiri food · shop handicrafts.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–April:</strong> full tulip season, colour, spring
              weather. <strong className="text-ink">May–June:</strong> tulips end but garden remains
              pleasant with some other flowers. <strong className="text-ink">July–February:</strong>{" "}
              not for the famous tulip display; winter preparation period.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar International Airport, 20–25 km; taxis readily available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Srinagar Railway Station, 10–12 km; Jammu Tawi connects outside the region."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Taxi, tourist vehicle, auto, or personal car via Srinagar and Boulevard Road."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Ticket required during tulip season; annual prices vary and online booking may be offered."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Tulip season typically 9:00 AM–6:00 PM; early visits have less crowd and better light."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Parking, ticket counters, water, rest areas, food, washrooms, visitor support, and
              photography areas. Bring shoes, sunglasses, water, camera, and a light spring jacket.
              Services: Srinagar Airport, city, Tulip Garden, Dal Lake, Mughal Gardens, spring
              packages, custom tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Walks & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              No trekking inside the garden; take short garden walks, explore Zabarwan foothills, or
              nearby scenic paths.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Dal Lake · Mughal Gardens · Nishat · Shalimar · Chashme Shahi · Pari Mahal · Hazratbal
              · Boulevard Road
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Wazwan · Rogan Josh · Dum Aloo · Kahwa · Kaladi Kulcha · bakery · sweets. Capture
              tulip rows, Zabarwan, Dal, sunrise, close-ups, and portraits early or at golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "Why is it seasonal?",
              "Tulips bloom only in spring and the display lasts a few weeks.",
            ],
            ["When does it open?", "Usually March–April, depending on flowering conditions."],
            ["Where is it?", "Near Dal Lake at the Zabarwan foothills in Srinagar."],
            ["How much time?", "Around 1–2 hours."],
            ["Family friendly?", "Yes, one of Srinagar's most family-friendly attractions."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Srinagar · 1,600 metres · tulips,
          spring, Zabarwan · season March–April · 1–2 hours · Srinagar Airport and Railway Station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Tulip Garden?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Colourful flowers, Dal Lake, and the Zabarwan range create an extraordinary Kashmir
            spring scene. For first-time visitors, families, nature lovers, and photographers, it is
            a brief seasonal experience worth planning around official bloom dates.
          </p>
        </div>
      </section>
    </>
  );
}

function AmarnathYatraGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Amarnath Cave, Anantnag/Ganderbal"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 3,888 metres (12,756 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Yatra nature"
          value="Seasonal pilgrimage · official summer dates"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A sacred journey to the ice Shivling
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              The Amarnath Yatra leads devotees through Jammu &amp; Kashmir&apos;s high Himalayas to
              Amarnath Cave, where the naturally formed ice Shivling is worshipped. At about 3,888
              metres, the cave is surrounded by mountains, glaciers, and dramatic Himalayan scenery.
            </p>
            <p>
              This is not a year-round tourist attraction but a limited summer pilgrimage. It joins
              faith, adventure, natural beauty, and high-altitude exploration for pilgrims from
              India and abroad.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Seasonal nature
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            The Yatra normally operates about 40–50 days in summer, generally June–August, on dates
            announced officially each year. Winter snow, extreme cold, and unpredictable weather
            close the cave and routes outside the season.
          </p>
          <p>
            Before opening, authorities prepare routes, facilities, security, medical care, and
            rescue support. Pilgrims must register officially and follow that season&apos;s
            guidelines.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              History & religious importance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Hindu tradition says Shiva revealed the Amar Katha, the secret of immortality, to
              Parvati in this cave. The ice Shivling symbolises Lord Shiva. Centuries of pilgrims
              and the support of agencies, security forces, medical teams, and Shri Amarnathji
              Shrine Board made it one of India&apos;s largest organised pilgrimages.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Holy Cave · Ice Shivling · Himalayan scenery · Lidder Valley · Sheshnag Lake ·
              Panchtarni · Baltal Valley · spiritual atmosphere · high-altitude adventure
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Complete darshan · experience pilgrimage trails · enjoy mountains · visit Pahalgam or
              Sonamarg · experience Kashmiri culture · participate spiritually · photograph
              Himalayan scenery where allowed.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">June–July:</strong> beginning, pleasant daytime, snowy
              surroundings. <strong className="text-ink">July–August:</strong> main period and
              better route access, but more pilgrims.{" "}
              <strong className="text-ink">After August:</strong> colder and Yatra closes per
              official dates. <strong className="text-ink">Winter:</strong> not open due to snow and
              extreme cold.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Two pilgrimage routes
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="Pahalgam · traditional route"
            value="Srinagar → Pahalgam → Chandanwari → Pissu Top → Sheshnag → Panchtarni → Cave. Srinagar–Pahalgam 90–100 km; 36–40 km trek. Gradual, scenic Lidder Valley ascent."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="Baltal · shorter route"
            value="Srinagar → Sonamarg → Baltal → Domel → Barari → Sangam → Cave. Srinagar–Baltal 90–100 km; 14–16 km trek. Shorter but steeper, for experienced walkers."
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="Pahalgam journey"
            value="Pampore, Anantnag, Lidder River, then Chandanwari. Trek via Pissu Top, Sheshnag Lake, and Panchtarni amid glaciers and alpine landscape."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="Baltal journey"
            value="Through Ganderbal and Sonamarg to Baltal, then steep paths via Domel, Barari, and Sangam."
          />
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar Airport; Pahalgam and Baltal are each about 90–100 km by road."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Jammu Tawi; then 250–300 km by road toward Srinagar and base camps."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Pahalgam: Jammu–Srinagar–Anantnag–Pahalgam. Baltal: Jammu–Srinagar–Sonamarg–Baltal. Taxis, buses, and Yatra transport available."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Registration & fee"
            value="Official registration, compulsory health certificate, ID, and current instructions are required. Darshan is free; registration and services may cost separately."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings & safety"
            value="Follow official schedule, start trekking early, observe camp timings, and avoid bad-weather travel."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities & preparation
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Seasonal base camps, medical camps, langars, security, tents, pony/palki/rescue
            services, and water points. Carry warm layers, rain gear, trekking shoes, medicine, ID,
            power bank, and water.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Srinagar/Jammu pickup · Yatra packages · Pahalgam and Baltal stay · pony/palki · Kashmir
            sightseeing · custom pilgrimage tours.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Trekking & assistance
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Pahalgam trek: 36–40 km, moderate, via Chandanwari/Pissu/Sheshnag/Panchtarni. Baltal:
            14–16 km, moderate to difficult, shorter and steep. Pony, palki, local guide, and
            medical assistance are available.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Pahalgam · Betaab Valley · Aru · Baisaran · Sonamarg · Thajiwas Glacier · Lidder Valley
            · Srinagar
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Wazwan · Rogan Josh · Dum Aloo · Rajma Chawal · Kaladi Kulcha · Kahwa · bakery · sweets;
            during Yatra, langar, tea, and simple vegetarian food. Photograph peaks, trails,
            streams, Sheshnag, Panchtarni, sunrise, and pilgrimage atmosphere on clear days.
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
                "Why is it seasonal?",
                "High altitude, winter snow, extreme weather, and seasonal safety preparations.",
              ],
              [
                "Where is the cave?",
                "In the Anantnag region of Jammu & Kashmir, at about 3,888 metres.",
              ],
              [
                "Pahalgam or Baltal?",
                "Pahalgam is longer, gradual, scenic; Baltal is shorter but steeper.",
              ],
              ["How many days?", "Usually 3–5, depending on route, plan, and fitness."],
              [
                "Is it difficult?",
                "It requires fitness for altitude, walking distance, and changing weather.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Amarnath Cave · 3,888 metres ·
            Anantnag/Ganderbal · Ice Shivling · seasonal 40–50 days · Pahalgam and Baltal · official
            summer dates · Srinagar Airport and Jammu Tawi.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why undertake Amarnath Yatra?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Amarnath combines devotion, challenging trails, and extraordinary Himalayan scenery. For
            pilgrims and travellers, its journey to the holy cave represents faith, courage, and a
            profound connection with the mountains.
          </p>
        </div>
      </section>
    </>
  );
}

function KeranBorderGuide() {
  const route = [
    [
      "Srinagar to Sopore",
      "Kashmir Valley, orchards, fields, and villages; Sopore is the northern districts gateway.",
    ],
    ["Sopore to Kupwara", "Green valleys, mountain roads, forests, and traditional villages."],
    ["Kupwara to Kralpora", "Mountain views, pine forest, river scenes, and a quiet gateway stop."],
    [
      "Kralpora to Keran",
      "Narrow roads, forest, Kishanganga views, snowy peaks, and remote villages open to an unforgettable valley.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Keran, Kupwara District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 5,000–6,000 feet"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="2 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Kishanganga River at the frontier
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Keran is a distinctive North Kashmir border destination on the Kishanganga (Neelum)
              River in Kupwara, framed by the Shamsabari range, forest, and mountains near the Line
              of Control.
            </p>
            <p>
              A peaceful village of wooden homes, river scenery, traditional culture, and mountain
              adventure, it blends nature and border tourism more quietly than many strategic
              frontier areas. It remains a hidden Kupwara gem for travellers seeking a less-explored
              Himalayan experience.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Keran has long been a frontier region. Before 1947, mountain routes linked communities
            and cultural traditions around the valley. After Partition, it became a border area
            divided by political boundaries.
          </p>
          <p>
            The Kishanganga shaped Keran&apos;s identity, separating the Indian side from areas
            across the LoC. Remoteness and security made access limited for years; its natural
            character now supports border tourism.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Srinagar → Sopore → Kupwara → Kralpora → Keran
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Srinagar: 160–170 km · Kupwara: 60 km · Sopore: 100 km · Kralpora: 45–50 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Kishanganga River · border landscape · LoC viewpoints · Keran Valley · forests ·
              villages · Kashmiri lifestyle · riverside scenery · photography · offbeat Kashmir
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore Keran · enjoy the river · experience border tourism from permitted places ·
              visit viewpoints · photograph · walk village lanes · learn local culture · relax by
              water · explore nearby forest and valleys · stay in homestays.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">May–June:</strong> pleasant and green.{" "}
              <strong className="text-ink">July–September:</strong> lush valley and river, great
              photography. <strong className="text-ink">October–November:</strong> autumn, clear,
              quieter. <strong className="text-ink">December–April:</strong> possible heavy snow,
              difficult roads, and potential border-route restrictions.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar International Airport, 160–170 km; taxis available toward Kupwara and Keran."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Srinagar/Nowgam Railway Station; Jammu Tawi is another option from outside the region."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxi, tourist, or personal vehicle via the main route. Check current road and permission requirements before departure."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="No general tourist fee; border permissions and parking may apply and change with security guidelines."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination; day visits 8:00 AM–5:00 PM recommended due to roads and weather."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Homestays · guest houses · small food shops · parking · local guides · basic tourist
              facilities. Carry water, warm clothes, medicines, power bank, valid ID, comfortable
              shoes, and supplies. Services: Srinagar Airport/city, Kupwara, Keran Border, Lolab,
              Bangus, and custom North Kashmir border tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Walks & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Nature walks, forest trails, village hikes, photography walks, and mountain
              exploration are possible. Use local guidance for remote routes.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Lolab Valley · Bangus Valley · Kalaroos Caves · Teetwal Border · Tangdhar · Sadhna
              Pass · Kupwara · Machil Valley
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Wazwan · Rogan Josh · Rajma Chawal · Makai Roti · Kaladi Kulcha · Kahwa · bakery · red
              rice and village food. Photograph river, reflections, border scenery, forest roads,
              villages, peaks, sunrise, and golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Keran famous for?",
              "Its beautiful valley, Kishanganga, border setting, forest, and untouched nature.",
            ],
            ["Where is it?", "Kupwara district near the LoC."],
            [
              "Family-friendly?",
              "Yes, for families, photographers, nature and adventure travellers.",
            ],
            [
              "How much time is needed?",
              "Two days from Srinagar for the valley and nearby places.",
            ],
            [
              "Is permission needed?",
              "Check latest rules before travel: permissions can apply in border areas.",
            ],
            [
              "Is trekking available?",
              "Short walks and hikes are possible; longer routes need local guidance.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Keran, Kupwara · 5,000–6,000 feet ·
          160–170 km from Srinagar · Kishanganga, LoC views, forests, border tourism · best
          May–October · 2 days · Srinagar Airport and Railway Station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Keran?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Keran uniquely brings together river, mountain, village, history, and border culture. It
            is an unforgettable Kupwara frontier journey for anyone wanting an offbeat Kashmir
            landscape beyond the usual tourist circuit.
          </p>
        </div>
      </section>
    </>
  );
}

function ShahdaraDarhalGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Thanna Mandi & Darhal, Rajouri"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Classification"
          value="Spiritual, Historical & Natural"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1–2 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Faith and waterfalls in Pir Panjal
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In Rajouri&apos;s Pir Panjal mountains, Shahdara Sharief Dargah and Darhal Waterfall
              bring together spirituality, history, and natural scenery. Shahdara Sharief, the
              Ziyarat of Baba Ghulam Shah Badshah (R.A.), lies in Thanna Mandi around 5,800 feet,
              with green mountains and forest around it.
            </p>
            <p>
              Darhal Waterfall offers flowing water, mountain surroundings, and a peaceful stop in
              the hidden Pir Panjal landscape. Together, they create a rewarding blend of shrine
              visit and nature exploration.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Shahdara Sharief is associated with Baba Ghulam Shah Badshah (R.A.) and has drawn people
            from different communities for generations. The area was historically called Sein Dara,
            and its quiet mountain setting adds to its spiritual meaning.
          </p>
          <p>
            Darhal has long been connected with Pir Panjal villages, forests, and local culture. Its
            streams and waterfalls have made it an emerging attraction for nature lovers.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Jammu → Rajouri → Thanna Mandi → Shahdara Sharief → Darhal
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Jammu to Rajouri"
              value="Mountain highways, rivers, forest, and viewpoints; Rajouri is the western Pir Panjal gateway."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Rajouri to Thanna Mandi"
              value="Green hills, pine forest, villages, and valleys toward the shrine route."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="To Shahdara Sharief"
              value="Hill roads, forests, and quiet Pir Panjal views reveal the shrine."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="On to Darhal"
              value="Mountain and village scenery, forest, and streams to a refreshing waterfall stop."
            />
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Jammu: 160–190 km · Rajouri: 25–35 km · Thanna Mandi: 10–15 km · Darhal: 20–30 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Baba Ghulam Shah Badshah Dargah · Pir Panjal views · spiritual calm · Darhal Waterfall
              · green forest · villages · scenic roads · photography · Rajouri culture
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit the Dargah · experience its atmosphere · explore mountain scenery · see Darhal
              Waterfall · photograph · spend time by streams · enjoy Rajouri food/culture · visit
              historical places.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant and green.{" "}
              <strong className="text-ink">July–September:</strong> fresh greenery and waterfall,
              travel carefully in heavy rain.{" "}
              <strong className="text-ink">October–November:</strong> clear, comfortable,
              photographic. <strong className="text-ink">December–February:</strong> cold, with
              possible higher snow.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, about 160 km; taxis run toward Rajouri."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Jammu Tawi Railway Station, about 160 km; continue by road."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Jammu → Akhnoor → Rajouri → Thanna Mandi, by taxi, tourist vehicle, private car, or local transport."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Dargah entry is free and donations voluntary. Waterfall entry is usually free; parking/local charges can apply."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Dargah: morning to evening year-round. Waterfall: 8:00 AM–5:00 PM recommended for safe day visits."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Dargah: rest areas, pilgrim accommodation, medical support, food, parking. Waterfall
              facilities are limited; carry water, snacks, shoes, medicines, power bank, and warm
              clothing. Services: Jammu pickup, Rajouri, Shahdara, Darhal, Thanna Mandi, Pir Panjal,
              and custom Rajouri tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Walks & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              No major established trek; enjoy short nature, forest-side, village, photography, and
              mountain walks. Use local guidance for longer Pir Panjal hikes.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajouri Fort · Dehra Ki Gali · Thanna Mandi · Kotranka · Budhal · Nowshera · Mughal
              Road · Peer Ki Gali
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Kaladi Kulcha · Dogra food · Kashmiri Wazwan · Kahwa · bakery · sweets.
              Photograph shrine surroundings, mountains, forest roads, waterfall, villages, and
              sunset early or at golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Shahdara Sharief famous for?",
              "Baba Ghulam Shah Badshah Dargah and Pir Panjal setting.",
            ],
            ["Where is it?", "Thanna Mandi area, Rajouri district."],
            [
              "Is Darhal Waterfall worth visiting?",
              "Yes, as a quiet natural attraction with mountain scenery.",
            ],
            [
              "How much time is required?",
              "One day from Rajouri; from Jammu, allow a longer day or overnight.",
            ],
            [
              "Is trekking available?",
              "No major trek, but short walks and local exploration are possible.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Thanna Mandi &amp; Darhal, Rajouri ·
          Shahdara at about 5,800 feet · 160–190 km from Jammu · Dargah, waterfall, mountain scenery
          · best March–November · 1–2 days · Jammu Airport and Jammu Tawi.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Shahdara Sharief & Darhal?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            This route combines faith, history, and Pir Panjal nature: a peaceful Dargah and
            refreshing waterfall deliver an offbeat Rajouri experience for pilgrims, photographers,
            and lovers of mountain landscapes.
          </p>
        </div>
      </section>
    </>
  );
}

function SuchetgarhGuide() {
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Suchetgarh, R.S. Pura, Jammu District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Classification"
          value="Historical, Border & Cultural"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="Half day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            History and patriotism at the border
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Near R.S. Pura in Jammu district, Suchetgarh Border offers a distinct experience of
              border tourism, national history, and the rural Jammu plains near the India–Pakistan
              International Border.
            </p>
            <p>
              Its historic Octroi Post once served a key trade route before Partition in 1947. Today
              the area is developed for visitors to understand border history, see BSF ceremonial
              and security activity where permitted, and experience patriotic border culture amid
              open fields and villages.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Before Partition, Suchetgarh connected Jammu and Sialkot as a trade and communication
            route. Its Railway Station was linked to the India–Pakistan network, but service ended
            after 1947. The Octroi Post was a major pre-Partition customs point.
          </p>
          <p>
            After 1947, it became part of the international border. Tourism now helps visitors learn
            its history, witness border arrangements, and understand the region&apos;s significance.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Route & journey
            </p>
            <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
              Jammu → R.S. Pura → Suchetgarh
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              From Jammu: 30–35 km · R.S. Pura: 10–15 km · Jammu Airport: 25–30 km · Jammu Tawi: 35
              km. The drive crosses city outskirts, farmland, villages, open fields, and border
              settlements. R.S. Pura is known for fertile land and traditional rural life;
              installations become visible near the border.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              India–Pakistan border view · Octroi Post · BSF border experience · rural Jammu ·
              patriotism · history · photography · village life
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit the viewpoint · learn border history · observe BSF arrangements from permitted
              areas · explore Octroi Post · photograph · experience rural landscapes · combine
              nearby Jammu sights · learn Partition history.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant and easy sightseeing.{" "}
              <strong className="text-ink">July–September:</strong> green fields; plan for weather.{" "}
              <strong className="text-ink">October–November:</strong> comfortable, clear,
              photographic. <strong className="text-ink">December–February:</strong> cooler, carry
              layers.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 25–30 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Jammu Tawi Railway Station, approximately 35 km and connected to major cities."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxi, tourist, or personal vehicle via Jammu and R.S. Pura. Carry valid ID for border-area requirements."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Usually free; parking may apply and access depends on security permissions/current rules."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Daytime, recommended 10:00 AM–5:00 PM. Confirm locally because security restrictions can affect access."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Parking · viewing area · nearby small shops and food stalls · tourist assistance ·
              R.S. Pura restaurants. Carry water, valid identity documents, sun protection,
              comfortable shoes, and supplies. Services include Jammu Airport/city, Suchetgarh, R.S.
              Pura, religious and heritage tours, and custom day trips.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Border tourism note
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              There is no trekking. The destination focuses on historical exploration, border
              culture, rural sightseeing, and permitted photography.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Jammu City · Bahu Fort · Bagh-e-Bahu · Mubarak Mandi · Amar Mahal · Raghunath Temple ·
              R.S. Pura · Ranbireshwar Temple · Mansar Lake
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Kaladi Kulcha · Dogra food · Chole Bhature · sweets · Kahwa · Jammu
              bakery. Photograph border landscapes, historic structures, rural fields, village life,
              and sunset in morning or golden hour, respecting all restrictions.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Suchetgarh famous for?",
              "Border location, Octroi Post, BSF presence, and border tourism.",
            ],
            ["Where is it?", "Near R.S. Pura in Jammu district."],
            [
              "Family friendly?",
              "Yes, for families, students, history lovers, and visitors seeking a unique experience.",
            ],
            ["How much time?", "Half a day, including nearby attractions."],
            ["Is trekking available?", "No; this is a historical and border destination."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Suchetgarh, R.S. Pura, Jammu · 30–35 km
          from Jammu · border tourism, Octroi Post, India–Pakistan view · best March–November · half
          day · Jammu Airport and Jammu Tawi.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Suchetgarh?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Suchetgarh offers a different Jammu journey — history, patriotism, rural beauty, and
            border culture rather than mountains and valleys. It is a meaningful stop for travellers
            interested in history, distinctive photography, and India&apos;s border regions.
          </p>
        </div>
      </section>
    </>
  );
}

function PurthuMeadowGuide() {
  const route = [
    [
      "Jammu to Kathua",
      "Jammu plains, agricultural land, village scenery, and mountain views; Kathua is the Ravi Valley gateway.",
    ],
    [
      "Kathua to Basohli",
      "Hilly roads, forests, Ravi River landscapes, and traditional villages leading to historic Basohli.",
    ],
    [
      "Basohli to Purthu",
      "Mountain roads, greenery, forest surroundings, viewpoints, and relaxing open meadow country.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Purthu, Basohli Region, Kathua"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,000–1,500 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1 day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A quiet Ravi Valley meadow
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Near historic Basohli in Kathua, Purthu Meadow is an emerging offbeat Jammu &amp;
              Kashmir natural destination with open grassland, green hills, forest, fresh air, and
              quiet mountain scenery.
            </p>
            <p>
              Spring and summer bring vegetation and greenery; winter offers cool mountain
              atmosphere with occasional nearby higher snow. This peaceful Ravi Valley escape suits
              nature lovers, photographers, families, and weekend travellers away from crowded
              places.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Purthu belongs to Basohli&apos;s culturally rich landscape, connected to agriculture,
            forest, mountain life, and local communities. Basohli is famous for its world-renowned
            painting tradition, a significant part of Indian art history.
          </p>
          <p>
            Purthu has remained a lesser-known place for recreation and grazing. Growing interest in
            Basohli&apos;s nature, history, and offbeat travel is bringing it attention.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Jammu → Kathua → Lakhanpur → Basohli → Purthu
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Jammu: 150–170 km · Kathua: 70–80 km · Basohli: 10–20 km · Lakhanpur: 60–70 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Green meadows · Basohli landscapes · quiet nature · forest views · Ravi scenery ·
              photo viewpoints · offbeat trip · picnic spot · village atmosphere
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore meadow · photograph · relax in nature · picnic · nature walks · experience
              Basohli culture · visit scenic places · watch sunrise/sunset · explore Basohli town
              and nearby sights.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, good sightseeing.{" "}
              <strong className="text-ink">July–September:</strong> fresh monsoon greenery; plan
              cautiously in heavy rain. <strong className="text-ink">October–November:</strong>{" "}
              clear and photographic. <strong className="text-ink">December–February:</strong> cool
              and peaceful; carry warm layers.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, 150–170 km; taxis run toward Basohli."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Kathua Railway Station, 70–80 km; Jammu Tawi is another option."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxi, tourist, or personal vehicle via Jammu–Kathua–Basohli."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Free; parking and local activities may have charges."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination; 8:00 AM–6:00 PM day visits recommended."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Limited parking, nearby small shops, Basohli food, local assistance, nearby stay
              options. Carry water, snacks, medicine, power bank, good footwear, and supplies.
              Services include Jammu Airport, Basohli, Purthu, Ranjit Sagar Dam, Kathua, Ravi
              Valley, and custom nature tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Walks & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              No major established trek, but short meadow, village, photography, and forest-side
              walks are available; use local guidance to explore safely.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Basohli Town · Ranjit Sagar Dam · Basohli Fort area · Ravi River · Jasrota Wildlife
              Sanctuary · Lakhanpur · Kathua · Billawar
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Dogra food · Rajma Chawal · Kaladi Kulcha · Makki di Roti · sweets · Kahwa · bakery.
              Photograph meadows, mountains, forest, villages, seasonal greenery, sunrise, and
              golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Purthu famous for?",
              "Peaceful meadow, green scenery, natural beauty, and offbeat Basohli setting.",
            ],
            ["Where is it?", "Basohli region, Kathua district."],
            ["Family friendly?", "Yes, for families, photographers, and nature lovers."],
            [
              "How much time is needed?",
              "Half a day for Purthu; full day with Basohli and nearby sights.",
            ],
            [
              "Is trekking available?",
              "No major trail, but short walks and meadow hikes are possible.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Purthu, Basohli, Kathua · 1,000–1,500
          metres · 150–170 km from Jammu · meadows, greenery, peace, Basohli region · best
          March–November · one day · Jammu Airport and Kathua station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Purthu Meadow?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Purthu is a refreshing lesser-known Jammu getaway: meadow, hills, fresh air, and
            Basohli&apos;s cultural context make an ideal quiet escape for families, photography,
            and offbeat exploration.
          </p>
        </div>
      </section>
    </>
  );
}

function YusmargGuide() {
  const route = [
    [
      "Srinagar to Budgam",
      "Kashmir Valley landscapes, fields, villages, and mountains; Budgam is Central Kashmir's scenic gateway.",
    ],
    [
      "Budgam to Charar-e-Sharief",
      "Traditional villages, green scenery, mountain roads, and a major cultural and religious town.",
    ],
    [
      "Charar-e-Sharief to Yusmarg",
      "Pine forests, mountain roads, viewpoints, and the first memorable view of broad meadows.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Yusmarg, Budgam District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,400 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1 day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Central Kashmir&apos;s quiet meadow
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Yusmarg is one of Budgam&apos;s most peaceful mountain destinations, surrounded by
              broad green meadows, dense forest, snow-covered mountains, and flowing streams. Local
              belief gives the name the meaning “Meadow of Jesus,” linking the region with a visit
              by Jesus Christ.
            </p>
            <p>
              At about 2,400 metres, it has spring flowers, summer grass, and snowy winter scenery.
              It is also a base for trails toward Doodhpathri, Sang-e-Safed, and high-altitude lakes
              — a hidden Kashmir escape for nature, family time, photography, and trekking.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Yusmarg has long served shepherd communities as grazing land. In the British period,
            pleasant climate and scenery made it a retreat, later developing into tourism while
            retaining a quieter, less-commercial character.
          </p>
          <p>
            Its meadows, streams, forest, villages, and mountain life remain part of Central
            Kashmir&apos;s natural and cultural heritage.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Srinagar → Budgam → Charar-e-Sharief → Yusmarg
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Srinagar: 45–50 km · Budgam: 35–40 km · Gulmarg: 130–140 km · Pahalgam: around 150 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Green meadows · Pir Panjal views · Doodh Ganga · Sang-e-Safed · pine forests ·
              trekking · horse riding · winter snow · picnic spots · photography
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore meadows · photograph mountains and forests · walk by Doodh Ganga · ride horses
              · take nature walks · visit Sang-e-Safed · explore trails · enjoy winter snow
              activities · relax with family · experience Kashmiri culture.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, family and
              sightseeing. <strong className="text-ink">July–September:</strong> fresh meadow
              season, photography and trekking.{" "}
              <strong className="text-ink">October–November:</strong> autumn, clear, quieter.{" "}
              <strong className="text-ink">December–February:</strong> snow, winter photography and
              activities with equipment.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar International Airport, approximately 45–50 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Srinagar Railway Station, about 50 km; Jammu Tawi is an outside-region option."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxis, tourist vehicles, local buses, or personal cars via the main route."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Usually free; parking, horse riding, and activities are separate."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination; 8:00 AM–6:00 PM recommended for safe day visits."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Parking · food stalls · rest areas · pony services · shops · basic accommodation ·
              guides. Carry water, warm layers, medicine, power bank, shoes, and supplies. Services:
              Srinagar Airport, city, Yusmarg, Budgam, Charar-e-Sharief, Doodhpathri, Central
              Kashmir, custom nature packages.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Trekking & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Guides, horse support, nature walks, camping, and route assistance. Yusmarg →
              Sang-e-Safed is an easy 5–6 km, 2–3 hour meadow/forest walk; Yusmarg → Tosa Maidan is
              a moderate long hike into higher Pir Panjal terrain.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Doodhpathri · Charar-e-Sharief · Sang-e-Safed · Tosa Maidan · Nilnag Lake · Astanmarg
              · Budgam · Srinagar
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Wazwan · Rogan Josh · Dum Aloo · Rajma Chawal · Kaladi Kulcha · Kahwa · bakery items ·
              sweets. Photograph meadows, peaks, pines, streams, horses, villages, sunrise, and
              golden hour on clear days.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Yusmarg famous for?",
              "Meadows, forest, mountain views, peace, and trekking.",
            ],
            ["Where is it?", "Budgam district, 45–50 km from Srinagar."],
            ["Family-friendly?", "Yes, for families, photographers, couples, and nature lovers."],
            [
              "How much time is needed?",
              "One day for sightseeing; overnight for a slower mountain experience.",
            ],
            ["Is trekking available?", "Yes, including Sang-e-Safed and nearby mountain routes."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Yusmarg, Budgam · 2,400 metres · 45–50
          km from Srinagar · meadows, forests, trails, views · best March–October · 1 day · Srinagar
          Airport and Railway Station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Yusmarg?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Yusmarg is a calm and untouched Kashmir escape: endless meadow, clear stream, forest,
            and mountain backdrop provide natural beauty, family relaxation, photography, and
            adventure away from the city.
          </p>
        </div>
      </section>
    </>
  );
}

function BangusValleyGuide() {
  const route = [
    [
      "Srinagar to Sopore",
      "Kashmir Valley landscapes, apple orchards, agricultural fields, and mountain views; Sopore is a North Kashmir gateway.",
    ],
    [
      "Sopore to Handwara",
      "Countryside, forests, traditional villages, and mountain roads to the main access point.",
    ],
    [
      "Handwara to Bangus",
      "Pine and conifer forests, mountain roads, viewpoints, remote landscapes, and the first wide meadow view.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Bangus Valley, Kupwara District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Around 10,000 feet"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1–2 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            North Kashmir&apos;s untouched meadow country
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Bangus, or Bungus, Valley is a spectacular and lesser-explored high-altitude meadow in
              Handwara, Kupwara. Vast grasslands, conifer forests, streams, and Himalayan scenery
              form a raw, peaceful natural landscape.
            </p>
            <p>
              At around 10,000 feet, it has two principal areas: Bodh Bangus (Big Bangus) and Lokut
              Bangus (Small Bangus). Alpine terrain, wildflowers, grazing fields, and quiet
              surroundings make it an offbeat eco-tourism escape beyond Kashmir&apos;s more
              commercial destinations.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Bangus has long been valued for forests and seasonal grazing meadows used by local
            shepherd communities. Its name reflects the character of this meeting of grassland and
            forest.
          </p>
          <p>
            Remoteness kept the valley less explored for years. It is now gaining eco-tourism
            interest while continuing to represent traditional mountain life and Himalayan
            ecosystems.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Srinagar → Sopore → Handwara → Bangus
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            Alternative: Srinagar → Kupwara → Chowkibal → Bangus. Srinagar: 130–150 km · Kupwara:
            40–45 km · Handwara: 30 km · Sopore: 70–80 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Bodh Bangus · Lokut Bangus · high meadows · conifer forests · streams · Himalayan
              landscapes · wildflowers · quiet · photo viewpoints · offbeat Kashmir
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore meadows · photograph mountains · relax by streams and forests · walk in nature
              · camp where allowed · observe shepherd life · birdwatch · visit Kupwara sights ·
              enjoy untouched North Kashmir.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">May–June:</strong> pleasant and increasingly green.{" "}
              <strong className="text-ink">July–September:</strong> peak: fully green meadows,
              wildflowers, clear views, photography and camping.{" "}
              <strong className="text-ink">October–November:</strong> autumn and fewer crowds.{" "}
              <strong className="text-ink">December–April:</strong> snow can make roads difficult;
              check locally and prepare.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar International Airport, 130–150 km; taxis available toward Kupwara/Handwara."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Baramulla Railway Station, 60–70 km from Kupwara side; Jammu is another outside-state option."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxis, tourist vehicles, personal cars, and local transport until Handwara/Kupwara."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="No regular fee; parking and local permissions may apply by current conditions."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination, recommended 7:00 AM–6:00 PM; day travel suits mountain terrain."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Limited parking, local guides, seasonal food arrangements, permitted camping, and
              nearby Handwara/Kupwara stays. Carry water, snacks, layers, medication, power bank,
              shoes, and supplies. Taxi services cover Srinagar Airport, city, Bangus, Kupwara,
              Handwara, Lolab, North Kashmir, and custom nature tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Trekking & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Meadow walks, hiking, forest trails, photography walks, and local routes. The wide
              landscapes offer good trekking potential for adventure lovers.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Lolab Valley · Kalaroos Caves · Kupwara · Handwara · Seemab Valley · Keran Valley ·
              Sadhna Pass · Wular Lake
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Wazwan · Rogan Josh · Dum Aloo · Rajma Chawal · Kaladi Kulcha · Kahwa · bakery items ·
              village food. Photograph endless meadows, mountains, forests, streams, wildflowers,
              shepherd scenes, and sunrise/sunset in clear weather.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Bangus famous for?",
              "High meadows, forests, streams, mountains, and untouched natural beauty.",
            ],
            ["Where is it?", "Kupwara district near Handwara."],
            [
              "Family friendly?",
              "Yes, for families, photographers, and nature lovers prepared for limited facilities.",
            ],
            [
              "How long is needed?",
              "A full-day Srinagar trip, with a nearby overnight stay for a fuller experience.",
            ],
            [
              "Is trekking available?",
              "Short hikes and walks are possible; it is mainly a meadow destination.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Bangus, Kupwara · around 10,000 feet ·
          130–150 km from Srinagar · Bodh and Lokut Bangus · best May–October · 1–2 days · Srinagar
          Airport and Baramulla station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Bangus Valley?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Bangus is a rare, peaceful North Kashmir escape: endless meadows, silent forests, clear
            streams, and mountain air. It is made for travellers seeking less-explored Himalayan
            beauty, photography, and adventure.
          </p>
        </div>
      </section>
    </>
  );
}

function SudhMahadevGuide() {
  const route = [
    [
      "Jammu to Udhampur",
      "Jammu hills, mountain landscapes, Chenab region views, and green valleys.",
    ],
    ["Udhampur to Chenani", "Pine forests, villages, river valleys, and Himalayan foothills."],
    [
      "Chenani to Sudh Mahadev",
      "Winding roads, dense forest, traditional villages, scenic viewpoints, and a peaceful temple approach.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Sudhmahadev, Chenani, Udhampur"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,225 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1 day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A sacred Shiva shrine in the Chenani hills
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In Udhampur&apos;s Chenani mountains, Sudh Mahadev is among Jammu &amp; Kashmir&apos;s
              most sacred ancient Shiva temples. Forests, Himalayan scenery, and a peaceful setting
              make it both a pilgrimage and a scenic escape.
            </p>
            <p>
              The temple is known for its ancient Shivling, sacred Trishul, mythological importance,
              and thousands of years of belief. Nearby Gauri Kund is associated with Goddess
              Parvati&apos;s worship. The annual Sudh Mahadev Mela brings thousands for ritual,
              prayer, and cultural activity.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          History & faith
        </p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Legend says Parvati worshipped Shiva here and a demon named Sudh disturbed her prayers.
            Shiva appeared to protect her, and the place became Sudh Mahadev. The sacred Trishul is
            regarded as a symbol of divine power and faith.
          </p>
          <p>
            Gauri Kund is sacred to Parvati, while nearby Mantalai is traditionally connected with
            the marriage of Shiva and Parvati. The temple and annual fair preserve Dogra religious
            heritage across centuries.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Jammu → Udhampur → Chenani → Sudh Mahadev
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            From Jammu: 120 km · Udhampur: 45–50 km · Patnitop: 25–30 km · Srinagar: 200–220 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Ancient Shiva Temple · Shivling · Lord Shiva&apos;s Trishul · Gauri Kund · Sudh
              Mahadev Mela · Mantalai · Himalayan views · forests · spiritual atmosphere ·
              photography · peaceful picnics
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Pray at the temple · see the Trishul · visit Gauri Kund · explore Mantalai ·
              photograph mountains · walk forest trails · experience traditions · visit Patnitop ·
              attend the mela.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, easy mountain
              travel. <strong className="text-ink">July–September:</strong> lush, festival season,
              great views. <strong className="text-ink">October–November:</strong> clear, quiet,
              good photography. <strong className="text-ink">December–February:</strong> cold with
              nearby snow; pack warm clothes.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 120 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Udhampur Railway Station, 45–50 km; Jammu Tawi is an alternative."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxis, tourist vehicles, buses, and personal vehicles via Jammu–Udhampur–Chenani."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Temple entry is free; donations voluntary and parking can apply."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open year-round; recommended 6:00 AM–8:00 PM, especially morning and evening."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Parking, temple seating, small shops, food stalls, basic nearby stays, transport, and
              extra mela facilities. Carry water, warm layers, medicine, power bank, comfortable
              footwear, and supplies. Services include Jammu Airport, temple, Gauri Kund, Mantalai,
              Patnitop, Chenani, Udhampur, religious packages, and custom hill tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Light trails & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Walking guides, forest-trail support, village exploration, and photo walks. Sudh
              Mahadev → Gauri Kund is an easy 2–3 km round trip, 1–2 hour religious nature walk with
              streams and forest. The Sudh Mahadev → Mantalai trail is easy to moderate, 2–3 hours,
              through pine forests and village paths.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Trekking tips
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Carry proper shoes, water, a light jacket, snacks, and camera. March–November mornings
              are best; avoid slippery forest routes in heavy rain.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Gauri Kund · Mantalai · Patnitop · Nathatop · Sanasar · Chenani Tunnel · Udhampur ·
              Krimchi Temples · Kud · Batote
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Kaladi Kulcha · Dogra cuisine · Patisa · Kahwa · sweets · bakery.
              Photograph temple, Trishul, forests, mountains, Gauri Kund, festivals, and villages
              early, at golden hour, or on fair days.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is it famous for?",
              "Ancient Shiva shrine, Trishul, mythology, and peaceful Himalayan setting.",
            ],
            ["Where is it?", "Near Chenani, Udhampur district."],
            ["Family friendly?", "Yes — for families, seniors, pilgrims, and nature lovers."],
            [
              "How much time?",
              "Half day for temple and Gauri Kund; full day adds Mantalai and nearby attractions.",
            ],
            ["Can I trek nearby?", "Yes, short easy routes around Gauri Kund and Mantalai."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Sudhmahadev, Chenani · 1,225 metres ·
          120 km from Jammu · ancient temple, Trishul, Gauri Kund, Mantalai · best March–November ·
          1 day · Jammu Airport and Udhampur station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Sudh Mahadev?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Sudh Mahadev brings together Jammu&apos;s spiritual heritage and natural beauty: an
            ancient Shiva shrine, forests, mountains, and short walks give pilgrims, photographers,
            historians, and nature lovers a meaningful Himalayan journey.
          </p>
        </div>
      </section>
    </>
  );
}

function AharbalWaterfallGuide() {
  const route = [
    [
      "Srinagar to Pampore",
      "Kashmir Valley landscapes, saffron fields, agricultural areas, and mountain views.",
    ],
    [
      "Pampore to Pulwama",
      "Rice fields, apple orchards, villages, foothills, and Pulwama's agricultural beauty.",
    ],
    [
      "Pulwama to Shopian",
      "Forests, mountain roads, green valleys, and Kashmiri villages; Shopian is the key gateway.",
    ],
    [
      "Shopian to Aharbal",
      "Pine forests, mountain streams, viewpoints, and the sound of the falls announcing arrival.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Aharbal, Kulgam District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,200 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1 day"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            The Niagara Falls of Kashmir
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In South Kashmir&apos;s mountains, Aharbal Waterfall is a spectacular Kulgam
              attraction on the Veshaw River, known for powerful water, quiet forests, and Himalayan
              scenery. Often called the “Niagara Falls of Kashmir,” it drops roughly 25 metres
              through rocky cliffs into a blue pool.
            </p>
            <p>
              Pines, meadows, and mountains make it a natural paradise for photographers and
              adventurers. It is also the starting point for the Kausar Nag Lake trek in Pir Panjal,
              source region of the Veshaw River, with trekking, fishing, camping, and exploration
              opportunities.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Aharbal has been naturally significant to communities for centuries, tied to forest
            life, mountain routes, and seasonal village activity. The Veshaw River originates around
            Kausar Nag and is an important South Kashmir water source.
          </p>
          <p>
            Its beauty, peaceful environment, and access from Srinagar and South Kashmir helped
            establish Aharbal as a nature destination of forests, waterfalls, trails, and adventure.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Srinagar → Pampore → Pulwama → Shopian → Aharbal
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            From Srinagar: 70–75 km · Kulgam: 25–30 km · Shopian: 25 km · Anantnag: 50 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Aharbal Waterfall · Niagara Falls of Kashmir · Veshaw River · pine and fir forests ·
              Himalayan views · Kausar Nag trail · photography · fishing · nature walks · picnic
              setting
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit and photograph the waterfall · spend time by river and forest · explore trails ·
              plan Kausar Nag · walk in nature · fish where permitted · picnic · explore South
              Kashmir.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant and green.{" "}
              <strong className="text-ink">July–September:</strong> the waterfall is most
              impressive, fresh and photographic.{" "}
              <strong className="text-ink">October–November:</strong> autumn, clear views, quieter.{" "}
              <strong className="text-ink">December–February:</strong> cold and possibly snowy;
              prepare properly.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar International Airport, 70–75 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Anantnag Railway Station, 45–50 km; Jammu Tawi is an alternative."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxis, tourist vehicles, buses, and personal cars via Srinagar–Pampore–Pulwama–Shopian."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Waterfall entry is free; parking charges and trekking/camping permissions may apply."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination; 8:00 AM–6:00 PM recommended for safety and sightseeing."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Parking · rest areas · food stalls · basic stay options · forest rest facilities
              nearby · local guides · picnic areas. Carry water, warm clothes, medicines, power
              bank, and supplies. Services include Srinagar Airport, city, Aharbal, Shopian, Kulgam,
              Kausar Nag support, and custom nature tours.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Trekking assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Local guides, camping, route support, and walks. Main route: Aharbal → Kungwattan →
              Mahinag → Kausar Nag Lake; suitable for experienced trekkers with preparation.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Kausar Nag Lake · Shopian Valley · Mughal Road · Heerpora Wildlife Sanctuary · Kulgam
              Valley · Pulwama · Kokernag · Verinag
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Wazwan · Rogan Josh · Dum Aloo · Rajma Chawal · Kaladi Kulcha · Kahwa · bakery items ·
              sweets. Capture waterfall, river, pine forests, mountains, misty mornings, autumn, and
              trails early or at golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Aharbal famous for?",
              "Its roughly 25-metre waterfall, forests, scenery, and Niagara Falls of Kashmir nickname.",
            ],
            ["Where is it?", "Kulgam district, on the Veshaw River."],
            ["Family friendly?", "Yes, for families, photographers, and nature lovers."],
            ["How much time is needed?", "Half to one day for the falls; trekking needs more."],
            ["Can I visit Kausar Nag?", "Yes, Aharbal is the Kausar Nag trek starting point."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Aharbal, Kulgam · 2,200 metres · 70–75
          km from Srinagar · waterfall, Veshaw, forests, trekking · best March–October · one day ·
          Srinagar Airport and Anantnag station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Aharbal?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Aharbal is a refreshing escape into hidden South Kashmir: roaring water, forests, river,
            and Himalayan surroundings. It rewards nature lovers, photographers, and adventure
            seekers with untouched scenery.
          </p>
        </div>
      </section>
    </>
  );
}

function SanasarGuide() {
  const route = [
    [
      "Jammu to Udhampur",
      "Shivalik hills, river valleys, mountains, and small towns; Udhampur is a gateway to Patnitop and Sanasar.",
    ],
    ["Udhampur to Chenani", "Green mountains, pine forests, villages, and Chenab Valley scenery."],
    [
      "Chenani to Patnitop",
      "Curving mountain roads, dense forests, viewpoints, and scenic valleys.",
    ],
    [
      "Patnitop to Sanasar",
      "Conifer forests, open meadows, peaks, and the famous adventure meadow.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Sanasar, Ramban District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,050 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1–2 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Jammu&apos;s Mini Gulmarg
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In the Chenab Valley Himalayas, Sanasar is a scenic and peaceful Jammu hill
              destination with green meadows, conifer forests, outdoor adventure, and mountain
              views. Its name comes from the nearby Sana and Sar villages, and the large cup-shaped
              meadow framed by tall pines gives it a distinct Himalayan setting.
            </p>
            <p>
              Called “Mini Gulmarg of Jammu,” it is loved for paragliding, trekking, camping,
              climbing, horse rides, and walks. Fresh air, panoramas, and relaxed surroundings suit
              families, couples, photographers, and adventure seekers.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Sanasar was traditionally a quiet settlement among forest and grazing land, where
            communities preserved their local culture and connection to the Himalayas. Nearby Shankh
            Pal Temple, on its ridge and dedicated to Nag Shankh Pal, is an old religious trekking
            destination.
          </p>
          <p>
            Natural terrain and meadows gradually made Sanasar an adventure tourism hub; it is now
            one of Jammu &amp; Kashmir&apos;s notable offbeat hills.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Jammu → Udhampur → Chenani → Patnitop → Sanasar
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            From Jammu: approximately 120 km · Udhampur: 90 km · Patnitop: 20 km · Srinagar: 190 km.
            Sanasar is around 20 km west of Patnitop.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Sanasar Meadow · Sana and Sar villages · Himalayan views · paragliding · 9-hole golf
              course · trekking · Shankh Pal trek · pine forests · camping · adventure tourism
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Explore the meadow · paraglide · trek to Shankh Pal ridge · camp · try climbing and
              rappelling · horse ride · photograph mountains · walk pine forests · visit Patnitop
              and Nathatop · watch sunrise and sunset.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, best for outdoor
              activities. <strong className="text-ink">July–September:</strong> fresh, cool, for
              nature. <strong className="text-ink">October–November:</strong> clear views, fewer
              crowds, photography. <strong className="text-ink">December–February:</strong> snowy
              winter landscapes with preparation.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Jammu Airport, approximately 120 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Udhampur Railway Station, approximately 90 km; Jammu Tawi is another option."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Bus, taxi, tourist, or personal vehicle via Jammu–Udhampur–Chenani–Patnitop."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Valley entry free; adventure activities and parking have separate charges."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination, recommended 8:00 AM–6:00 PM; activities run in daylight."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Hotels, guest houses, tourist huts, restaurants, food stalls, parking, adventure
              operators, guides, and basic medical facilities. Services: Jammu Airport/Rail pickup,
              Patnitop, Sanasar, Nathatop, Sudh Mahadev, Chenani, and custom Jammu packages.
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Trekking & assistance
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Local trek guides, camping assistance, instructors, and walk guides. Routes include
              Sanasar–Shankh Pal Temple, Shankh Pal Ridge, and forest trails.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Patnitop · Nathatop · Madhatop · Shankh Pal Temple · Sudh Mahadev Temple · Mantalai ·
              Chenani–Nashri Tunnel · Kud
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Rajma Chawal · Kaladi Kulcha · Dogra Thali · Patisa · Kahwa · local breads · Jammu
              sweets. Capture meadows, forests, peaks, village life, adventure, and snow at early
              morning or golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Sanasar famous for?",
              "Meadows, conifer forests, paragliding, trekking, adventure, and quiet Himalayan scenery.",
            ],
            ["Where is it?", "Ramban district, around 20 km west of Patnitop."],
            ["Why Mini Gulmarg?", "The mountain-and-forest-ringed meadow recalls Gulmarg."],
            [
              "Family friendly?",
              "Yes, for families, couples, photographers, and adventure lovers.",
            ],
            ["How long is enough?", "1–2 days; longer for trekking and nearby attractions."],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Sanasar, Ramban · 2,050 metres · 120 km
          from Jammu, 20 km from Patnitop · meadows, paragliding, trekking · best March–June &amp;
          September–November · Jammu Airport and Udhampur station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Sanasar?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Sanasar brings adventure and natural beauty together: peaceful meadow, forests, mountain
            views, and outdoor activities create a memorable Himalayan escape beyond the usual Jammu
            destinations.
          </p>
        </div>
      </section>
    </>
  );
}

function DuduValleyGuide() {
  const highlights = [
    "Dudu Valley landscapes",
    "Green meadows",
    "Vasuki Naag Temple",
    "Natural waterfall",
    "Dudu–Basantgarh views",
    "Himalayan forests",
    "Village life",
    "Trekking routes",
    "Peaceful environment",
    "Offbeat travel",
  ];
  const things = [
    "Visit Vasuki Naag Temple.",
    "Explore the waterfall near the temple.",
    "Take mountain photographs.",
    "Walk forest trails.",
    "Experience village culture.",
    "Enjoy scenic road trips.",
    "Explore Basantgarh landscapes.",
    "Camp in suitable locations.",
    "Watch sunrise and sunset.",
    "Enjoy the peaceful Himalayan atmosphere.",
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Dudu, Udhampur District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,800–2,500 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="1–2 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            An offbeat Chenani–Dudu escape
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              In Udhampur&apos;s remote mountains, Dudu Valley is a hidden gem of untouched green
              landscapes, forests, waterfalls, and quiet Himalayan surroundings. In the higher
              Chenani–Dudu reaches, it is a tranquil escape from busier destinations.
            </p>
            <p>
              Mountains, traditional villages, valleys, temples, and trails lead on toward
              Basantgarh. The sacred Vasuki Naag Temple and a waterfall nearby add spiritual and
              natural interest. Dudu is emerging as a compelling offbeat destination for nature,
              adventure, and serenity.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Dudu has been a mountain settlement for centuries, with strong Dogra cultural,
            traditional, and religious connections. The region is associated with Vasuki Naag
            worship; the ancient temple is an important centre for nearby communities and pilgrims.
          </p>
          <p>
            Its remote setting preserved local customs and natural environment, with forests and
            routes supporting farming, livestock rearing, and seasonal movement. It is now gaining
            recognition for unexplored Himalayan scenery.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested travel route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Jammu → Udhampur → Chenani → Sudhmahadev → Latti → Dudu
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Jammu to Udhampur"
              value="Shivalik foothills, river valleys, mountain landscapes, and small towns."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Udhampur to Chenani"
              value="Green hills, forests, villages, and Himalayan scenery before higher mountains."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Chenani to Latti"
              value="Forests, meadows, villages, fresh air, and increasingly scenic higher terrain."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Latti to Dudu"
              value="Green valleys, streams, slopes, and remote settlements to a peaceful destination."
            />
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            From Jammu: 140–160 km; Udhampur: approximately 100 km; Chenani: approximately 60 km.
            Dudu is reached through mountain roads via Chenani and Ramnagar routes.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
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
            ["March–June", "Pleasant weather, greenery, sightseeing, and comfortable drives."],
            ["July–September", "Fresh greenery and active waterfalls for nature lovers."],
            ["October–November", "Cool autumn, good photography."],
            ["December–February", "Cold, possible snowfall, requiring winter preparation."],
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
            value="Jammu Airport, approximately 150 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Udhampur Railway Station, approximately 100 km; Jammu Tawi is an alternative."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Jammu → Udhampur → Chenani → Latti → Dudu, by taxi, bus, tourist vehicle, or private car; mountain driving experience is recommended."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Valley and temple entry are free; some parking charges may apply."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination; daytime travel recommended, 7:00 AM–6:00 PM."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities & preparation
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Limited basic accommodation, guest houses, small shops, local food, temple facilities,
            parking, and guides. Carry medicine, water, power banks, warm clothing, and essentials.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel & trekking services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Jammu/Udhampur pickup and drop · Dudu, Basantgarh, Sudhmahadev, Patnitop, Chenani ·
            custom adventure packages. Local guides, trek help, camping, village guides, and walks
            are available for Dudu–Basantgarh trails, forests, and meadows.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Sudh Mahadev Temple · Mantalai · Patnitop · Basantgarh Valley · Latti Village · Shiv
            Gali Pass · Chenani · Udhampur Town
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Rajma Chawal · Kaladi Kulcha · Dogra Thali · breads · sweets · Kahwa · mountain dishes.
            Photograph valleys, waterfalls, forests, village life, temple surroundings, sunrise,
            sunset, and winter snow peaks early or at golden hour.
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
                "What is Dudu famous for?",
                "Natural beauty, green landscapes, waterfalls, forests, and Vasuki Naag Temple.",
              ],
              ["Where is it?", "Udhampur district, Jammu & Kashmir."],
              ["Family-friendly?", "Yes, for nature, sightseeing, and quiet mountain experiences."],
              ["Best season?", "March–June and September–November for comfortable travel."],
              [
                "Is trekking required?",
                "No: Dudu is road-accessible, with nearby hiking and trekking options.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Dudu, Udhampur · 1,800–2,500 metres ·
            150 km from Jammu · 100 km from Udhampur · valleys, falls, Vasuki Naag, Himalayan
            scenery · 1–2 days · Jammu Airport and Udhampur Railway Station.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Dudu Valley?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Dudu is where nature, spirituality, and adventure come together: streams, green
            mountains, traditional villages, and quiet roads make a memorable escape into
            lesser-known Himalayan Jammu.
          </p>
        </div>
      </section>
    </>
  );
}

function VerinagGuide() {
  const route = [
    [
      "Srinagar to Pampore",
      "Countryside, rice fields, apple orchards, mountain views, and rural villages. Pampore is renowned for saffron fields.",
    ],
    [
      "Pampore to Awantipora",
      "Historical monuments, green landscapes, river valleys, foothills, and Awantipora's archaeological remains.",
    ],
    [
      "Awantipora to Anantnag",
      "Villages, green fields, mountain scenery, and traditional settlements. Anantnag is the base for nearby sights.",
    ],
    [
      "Anantnag to Verinag",
      "Forest landscapes, mountain views, fresh Himalayan air, and the Pir Panjal foothills lead to the spring and Mughal garden.",
    ],
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Verinag, Anantnag District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 1,850 metres"
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
            The spring where the Jhelum begins
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              At the Pir Panjal foothills in Anantnag, Verinag is a beautiful natural destination
              famous for its clear spring, Mughal architecture, and peaceful surroundings. It is the
              source of the Jhelum River and an important historical and cultural landmark.
            </p>
            <p>
              The name comes from Sanskrit “Virah” and the local spring name. Jahangir built the
              celebrated octagonal stone basin around the natural spring in the 17th century. Pine
              forests, mountains, and maintained gardens frame its blue water and create a fine
              blend of nature, history, and Mughal heritage.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Jahangir was deeply impressed by Verinag and developed it as a royal retreat in the 17th
            century, creating the octagonal spring structure and Persian-style Mughal garden. He
            considered Kashmir among the world&apos;s most beautiful places and had a special
            attachment to this site.
          </p>
          <p>
            Mughal rulers used it as a resting place during Kashmir visits. For centuries its
            waters, historic structure, and quiet surroundings have remained a defining natural and
            cultural landmark.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Srinagar → Pampore → Awantipora → Anantnag → Verinag
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {route.map(([a, b]) => (
              <InfoCard key={a} icon={<Compass className="h-5 w-5" />} label={a} value={b} />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            From Srinagar: approximately 80 km · Anantnag: 26 km · Pahalgam: 50 km.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Top highlights
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Verinag Spring · Jhelum source · Mughal Garden · stone architecture · clear blue water
              · Pir Panjal views · quiet surroundings · photography · South Kashmir sightseeing
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Things to do
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Visit the spring · explore garden · take peaceful walks · photograph scenery · learn
              Mughal history · enjoy mountain views · explore Anantnag nearby sights · experience
              Kashmiri culture and villages.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Best time to visit
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              <strong className="text-ink">March–June:</strong> pleasant, green, comfortable
              sightseeing. <strong className="text-ink">July–September:</strong> fresh, lush
              surroundings. <strong className="text-ink">October–November:</strong> autumn colour
              and photography. <strong className="text-ink">December–February:</strong> cold,
              possible nearby snow; bring warm clothing.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By air"
            value="Srinagar International Airport, approximately 80 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Banihal Railway Station, around 55–60 km; Jammu Tawi is an alternative."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Buses, taxis, tourist vehicles, and personal vehicles via Srinagar–Pampore–Awantipora–Anantnag."
          />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="A nominal garden fee and parking charges may apply; structures can change seasonally."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Usually open year-round, recommended 9:00 AM–6:00 PM. Morning and evening suit views and photography."
          />
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Facilities & services
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Parking · drinking water · garden · nearby food stalls · rest areas · shops · visitor
              support · security. Services: Srinagar Airport/drop, Srinagar sightseeing, Verinag,
              Anantnag, Pahalgam, Kokernag, Achabal, and custom Kashmir packages. Verinag is
              primarily sightseeing; local guides, photography help, and transport support are
              available.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Nearby attractions
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Mughal Gardens · Achabal Garden · Pahalgam · Kokernag Spring · Martand Sun Temple ·
              Anantnag Town · Daksum Valley · Betaab Valley
            </p>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
              Food & photography
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Wazwan · Rogan Josh · Dum Aloo · Rajma Chawal · Kaladi Kulcha · Kahwa · bakery items ·
              sweets. Photograph the blue spring, Mughal architecture, gardens, mountains, forests,
              and autumn colours early or at golden hour.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
          Frequently asked questions
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "What is Verinag famous for?",
              "Its spring, Mughal garden, and status as Jhelum's source.",
            ],
            ["Where is Verinag?", "Anantnag district, Jammu & Kashmir."],
            [
              "Who built the garden?",
              "Emperor Jahangir developed the spring structure and garden in the Mughal period.",
            ],
            [
              "Family friendly?",
              "Yes — peaceful and suitable for families, children, and senior citizens.",
            ],
            [
              "How much time is needed?",
              "A half day, or combine it with South Kashmir attractions.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border border-border bg-paper p-5">
              <p className="font-semibold text-ink">{q}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-ink-soft">
          <strong className="text-ink">Quick facts:</strong> Verinag, Anantnag · 1,850 metres · 80
          km from Srinagar, 26 km from Anantnag · spring and Mughal garden · best March–June &amp;
          September–November · Srinagar Airport and Banihal Railway Station.
        </p>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Verinag?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Verinag harmonises Kashmir&apos;s natural beauty and historic heritage: sparkling water,
            Mughal architecture, peaceful gardens, and mountain surroundings. It is a must-visit
            South Kashmir stop for history, culture, and a quiet escape.
          </p>
        </div>
      </section>
    </>
  );
}

function WarwanValleyGuide() {
  const highlights = [
    "Untouched Himalayan valley",
    "Warwan River",
    "Alpine meadows",
    "Margan Top",
    "Traditional villages",
    "Remote lifestyle",
    "Warwan Valley Trek",
    "Snow-covered mountains",
    "Forest landscapes",
    "Photography paradise",
  ];
  const activities = [
    "Explore Warwan villages.",
    "Take scenic mountain drives.",
    "Visit alpine meadows and rivers.",
    "Experience village life.",
    "Photograph landscapes.",
    "Trek remote Himalayan trails.",
    "Camp under stars.",
    "Meet local communities.",
    "Explore nearby valleys and viewpoints.",
    "Enjoy quiet away from crowded places.",
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Kishtwar District, Jammu & Kashmir"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,000–3,000 metres"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="Ideal duration"
          value="3–5 days"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            A remote Himalayan wilderness
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Hidden deep in Kishtwar&apos;s Himalayan mountains, Warwan Valley is among the
              region&apos;s most remote and untouched valleys, known for rivers, green meadows,
              dense forests, and traditional mountain villages. Between Kashmir Valley and Ladakh,
              it remains isolated for winter months because of snow.
            </p>
            <p>
              Its peaceful atmosphere, simple life, and scenery reward trekkers, photographers, and
              offbeat travellers. The famous Warwan Valley Trek crosses high passes, meadows,
              rivers, glaciers, and landscapes connecting Kashmir with Ladakh&apos;s Suru Valley — a
              rare meeting of adventure, nature, culture, and tranquility.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Indigenous mountain communities have lived in Warwan for centuries through farming,
            livestock rearing, and seasonal migration. Its remoteness preserved local architecture,
            customs, and a close connection with nature.
          </p>
          <p>
            Traditional routes across Warwan linked Kashmir, Kishtwar, and Ladakh for shepherds,
            traders, and communities. Recent interest in offbeat tourism has brought trekkers and
            nature lovers while retaining the valley&apos;s untouched character.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested travel route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Srinagar → Kokernag → Sinthan Top → Kishtwar → Margan Top → Inshan → Warwan
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Srinagar to Kokernag"
              value="Countryside, apple orchards, green valleys, villages, streams, and rivers."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Kokernag to Sinthan"
              value="Alpine landscapes, snowy peaks, forests, high meadows, and panoramic viewpoints."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Sinthan to Kishtwar"
              value="Deep valleys, river landscapes, remote villages, forested slopes; Kishtwar is a key gateway."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Kishtwar to Warwan"
              value="Remote roads via Margan Top, high passes, crossings, pastures, villages, and Himalayan scenery."
            />
          </div>
          <p className="mt-5 text-sm leading-7 text-ink-soft">
            From Srinagar: approximately 250–300 km; from Kishtwar: 100–120 km; from Anantnag:
            150–180 km. Margan Top is considered the gateway to Warwan Valley.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
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
              {activities.map((x) => (
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
            [
              "July–September",
              "Best travel season: accessible roads, green meadows, flowers, trekking, photography.",
            ],
            [
              "October–November",
              "Cool weather, autumn landscapes, fewer visitors; suited to experienced travellers.",
            ],
            [
              "December–April",
              "Heavy snowfall and likely closures; only for winter-adventure planning.",
            ],
            [
              "May–June",
              "Snow melts and scenery is beautiful, though some routes can remain difficult.",
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
            value="Srinagar International Airport, 250–300 km; taxis can continue toward Kishtwar and Warwan."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Jammu Tawi Railway Station, about 350–400 km; then continue by road via Kishtwar."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Private taxis, tourist vehicles, local transport, or personal vehicles via the main route; experienced local drivers are recommended."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Free; forest or camping permissions may apply in some areas."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Open natural destination. Daytime travel is recommended, ideally 7:00 AM–5:00 PM; conditions depend on weather."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities & preparation
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Facilities are limited: basic guest houses, homestays, food arrangements, small shops,
            guides, limited medical care, patchy mobile connectivity, and camping. Carry essential
            medicines, power banks, warm clothing, and basic supplies.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Srinagar/Jammu pickup and drop · Kishtwar sightseeing · Warwan tour · Margan Top ·
            Sinthan Top · Himalayan road trips · Custom adventure packages.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Trekking & assistance
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Local trekking guides · Camping support · Porters · Route assistance · Trek planning.
            The Warwan Trek needs good fitness, proper equipment, and experienced guidance.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Sinthan Top · Kishtwar National Park · Paddar Valley · Chenab Valley · Machail Mata
            Temple · Kishtwar Town · Anantnag Valley · Kokernag Springs
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Rajma Chawal · Wazwan dishes · Kaladi Kulcha · Dum Aloo · Kahwa · breads · dairy
            products · seasonal mountain food. Photograph meadows, villages, Warwan River, snowy
            peaks, shepherd scenes, houses, sunrise, and golden hour.
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
                "What is Warwan famous for?",
                "Untouched landscapes, alpine meadows, rivers, villages, and trekking.",
              ],
              ["Where is it?", "Kishtwar district, Jammu & Kashmir."],
              [
                "Best season?",
                "July to September, when roads are open and greenery is at its best.",
              ],
              [
                "Family-friendly?",
                "Yes, if prepared for long mountain journeys and limited facilities.",
              ],
              [
                "Is trekking required?",
                "No for some road-accessible areas, but deeper Himalayan routes require trekking.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Kishtwar · 2,000–3,000 metres ·
            250–300 km from Srinagar · 100–120 km from Kishtwar · famous for meadows, rivers,
            trekking, untouched nature · best July–September · 3–5 days · Srinagar Airport and Jammu
            Tawi.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Warwan Valley?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Warwan is an unforgettable journey into untouched Himalayan wilderness: villages, green
            meadows, rivers, trails, and a traditional way of life. For travellers seeking hidden
            beauty away from tourist crowds, it offers a rare, authentic adventure.
          </p>
        </div>
      </section>
    </>
  );
}

function DoodpathriGuide() {
  const highlights = [
    "Doodpathri Meadows",
    "Shaliganga River",
    "Alpine landscapes",
    "Pine and deodar forests",
    "Snow-covered mountains",
    "Scenic viewpoints",
    "Horse riding",
    "Picnic spots",
    "Walking trails",
    "Photography locations",
  ];
  const things = [
    "Walk through green meadows.",
    "Sit beside the Shaliganga River.",
    "Try horse riding around the valley.",
    "Enjoy family picnics.",
    "Photograph mountain scenery.",
    "Explore nearby forests.",
    "Have Kashmiri tea and snacks.",
    "Experience snowfall in winter.",
    "Spend peaceful time in nature.",
  ];
  return (
    <>
      <section className="mx-auto grid max-w-[1220px] gap-4 px-5 py-10 sm:grid-cols-3 lg:px-10 lg:py-14">
        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Khansahib Area, Budgam District"
        />
        <InfoCard
          icon={<Compass className="h-5 w-5" />}
          label="Altitude"
          value="Approximately 2,730 metres (8,957 feet)"
        />
        <InfoCard
          icon={<CalendarDays className="h-5 w-5" />}
          label="From Srinagar"
          value="Approximately 40–45 km · 1.5–2 hours"
        />
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Overview
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Kashmir&apos;s Valley of Milk
          </h2>
          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              Doodpathri, in Budgam&apos;s Khansahib area, is one of Kashmir&apos;s most beautiful
              lesser-explored valleys. Known as the “Valley of Milk,” it is famed for wide green
              meadows, crystal-clear streams, pine and deodar forests, and Himalayan views.
            </p>
            <p>
              At approximately 2,730 metres (8,957 feet), it offers a peaceful alternative to
              crowded destinations. Snowy peaks, alpine landscapes, and rivers make an ideal setting
              for nature lovers, photographers, families, and adventurers. The approach through
              villages, forests, and mountain roads is part of the experience.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">History</p>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-ink-soft">
          <p>
            Local tradition links the name to “Dood” (milk) and “Pathri” (stone). Kashmiri saint
            Sheikh-ul-Alam Sheikh Noor-ud-din Noorani is believed to have found a stream here whose
            water looked white as milk flowing over stones.
          </p>
          <p>
            Shepherd communities historically used the valley&apos;s lush meadows for grazing. Today
            it is an eco-tourism destination that retains its natural charm and peaceful
            mountain-community character.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Suggested route
          </p>
          <h2 className="display-serif mt-2 text-3xl text-ink sm:text-4xl">
            Srinagar → Budgam → Khansahib → Doodpathri
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Srinagar to Budgam"
              value="Kashmir villages, agricultural fields, traditional houses, and mountain landscapes — a quieter side of Kashmir."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Budgam to Khansahib"
              value="The road enters foothills with forest and mountain views alongside peaceful villages."
            />
            <InfoCard
              icon={<Compass className="h-5 w-5" />}
              label="Khansahib to Doodpathri"
              value="Pine forests, streams, winding roads, and green hills open into wide meadows surrounded by mountains."
            />
          </div>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
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
            ["April–June", "Pleasant weather, green meadows, families and sightseeing."],
            ["July–September", "Lush landscapes for photography and walks."],
            ["October–November", "Autumn colours and fewer crowds."],
            ["December–March", "Snow-covered beauty; roads depend on snowfall."],
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
            value="Srinagar International Airport, 40–45 km; taxis available."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By train"
            value="Srinagar Railway Station (Nowgam), approximately 45 km."
          />
          <InfoCard
            icon={<Compass className="h-5 w-5" />}
            label="By road"
            value="Srinagar → Budgam → Khansahib → Doodpathri by taxi, rental, tourist cab, or local transport to nearby areas."
          />
        </div>
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Stamp className="h-5 w-5" />}
            label="Entry fee"
            value="Free; pony rides, activities, and parking can have charges."
          />
          <InfoCard
            icon={<CalendarDays className="h-5 w-5" />}
            label="Timings"
            value="Daylight visits, recommended 8:00 AM–6:00 PM; winter access depends on road conditions."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-12 lg:grid-cols-2 lg:px-10 lg:py-16">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Facilities & travel services
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Parking · Local food stalls · Tea shops · Pony services · Guides · Rest areas · Limited
            nearby accommodation · Limited washrooms. Services include Srinagar Airport, city tour,
            Doodpathri day trip, Gulmarg, Pahalgam, Sonamarg, Budgam, and custom Kashmir packages.
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Adventure activities
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Horse riding · Nature walks · Trekking · Photography · Camping where permitted ·
            Birdwatching · Picnics
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Nearby attractions
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Yusmarg · Khansahib · Budgam · Tosamaidan · Srinagar City · Dal Lake · Pari Mahal ·
            Mughal Gardens
          </p>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-burgundy">
            Food & photography
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Kashmiri Wazwan · Rogan Josh · Gushtaba · Yakhni · Kahwa · Noon Chai · Kashmiri breads ·
            Kaladi Kulcha. Photograph Shaliganga, meadows, trails, viewpoints, and horse-riding
            areas; morning gives clear mountains and evening gives golden valley light.
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
                "Why is Doodpathri famous?",
                "Green meadows, streams, forests, and peaceful Himalayan scenery.",
              ],
              [
                "How much time is needed?",
                "A Srinagar day trip works, while an overnight stay is more peaceful.",
              ],
              [
                "Is it family friendly?",
                "Yes, thanks to open spaces, scenery, and peaceful atmosphere.",
              ],
              [
                "Is it better than crowded destinations?",
                "It is ideal for travellers who prefer untouched nature and fewer crowds.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border border-border bg-paper p-5">
                <p className="font-semibold text-ink">{q}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-soft">
            <strong className="text-ink">Quick facts:</strong> Khansahib, Budgam · 2,730 metres ·
            40–45 km from Srinagar · meadows, Shaliganga, forests, scenery · best April–September ·
            1 day · Srinagar Airport and Railway Station.
          </p>
        </div>
      </section>
      <section className="bg-burgundy-deep px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1220px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
            Why visit Doodpathri?
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/80">
            Doodpathri is one of Kashmir&apos;s most peaceful valleys — nature, adventure, and
            tranquillity without crowds. Endless meadows, rivers, forests, and mountain views create
            an authentic Himalayan escape where simplicity and serenity meet.
          </p>
        </div>
      </section>
    </>
  );
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
