import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import heroImage from "@/assets/kashmir-hero.jpg";
import contactVisitImage from "@/assets/contact-visit.jpg";
import contactMapImage from "@/assets/contact-jk-map.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";

export const Route = createFileRoute("/contact-us")({ component: ContactUsPage });

const email = "jkexplorerpassport@gmail.com";
const whatsapp = "https://api.whatsapp.com/send?phone=919541012999";

function ContactUsPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General enquiry",
    message: "",
  });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello J&K Explorer,",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Subject: ${form.subject}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    setSent(true);
    window.setTimeout(() => {
      window.location.href = `${whatsapp}&text=${encodeURIComponent(message)}`;
    }, 350);
  };

  return (
    <main className="min-h-screen bg-background pb-16 text-foreground paper-texture lg:pb-0">
      <SiteNavigation />
      <section className="relative isolate min-h-[390px] overflow-hidden px-5 py-14 text-primary-foreground sm:min-h-[440px] lg:min-h-[480px] lg:px-10 lg:py-20">
        <img
          src={heroImage}
          alt="Kashmir mountain lake"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-burgundy-deep/90 via-burgundy-deep/55 to-burgundy-deep/15" />
        <div className="absolute right-[8%] top-10 hidden h-28 w-28 rotate-[-12deg] rounded-full border border-gold/70 p-4 text-center text-[9px] font-bold uppercase tracking-[0.16em] text-gold sm:grid sm:place-items-center">
          Explore
          <br />
          Discover
          <br />
          Collect
          <br />
          Remember
        </div>
        <div className="mx-auto flex min-h-[250px] max-w-[1220px] flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
            Get in touch
          </p>
          <h1 className="display-serif mt-3 text-5xl leading-none sm:text-6xl">Contact Us</h1>
          <p className="display-serif mt-3 text-2xl italic text-gold-soft sm:text-3xl">
            We&apos;d love to hear from you.
          </p>
          <p className="mt-5 max-w-md text-sm leading-6 text-primary-foreground/90">
            Have a question, suggestion, or want to share your travel story? We&apos;re here to
            help!
          </p>
        </div>
      </section>

      <section className="bg-paper-deep px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] gap-9 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="animate-in fade-in slide-in-from-left-4 duration-700">
            <SectionTitle>Our Contact Details</SectionTitle>
            <div className="mt-7 grid gap-6">
              <ContactItem
                icon={<Mail />}
                title="Email Us"
                text={email}
                note="We'll try to reply within 24–48 hours."
                href={`mailto:${email}`}
              />
              <ContactItem
                icon={<MessageCircle />}
                title="WhatsApp"
                text="Chat with us for quick queries."
                note="Usually the fastest way to reach us."
                href={whatsapp}
                external
              />
              <ContactItem
                icon={<MapPin />}
                title="Our Location"
                text="Jammu & Kashmir, India"
                note="We're based in the heart of the Himalayas."
              />
            </div>
            <div className="mt-7 border-t border-border pt-5">
              <p className="text-sm font-semibold text-ink">Follow Us</p>
              <div className="mt-3 flex gap-3 text-burgundy">
                <Social href="https://www.instagram.com/jkexplorerpassport/" label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Social>
                <Social
                  href="https://www.facebook.com/profile.php?id=61594089672478"
                  label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Social>
                <Social href="https://www.youtube.com/@Jkexplorerpassport" label="YouTube">
                  <Youtube className="h-4 w-4" />
                </Social>
                <Social href="https://x.com/jkexplorerp?s=11" label="X">
                  <Twitter className="h-4 w-4" />
                </Social>
              </div>
            </div>
            <p className="display-serif mt-10 text-2xl italic leading-tight text-burgundy">
              Drop us a message…
              <br />
              We&apos;d love to connect with you!
            </p>
          </aside>

          <form
            onSubmit={submit}
            className="relative overflow-hidden border border-border bg-paper p-5 shadow-[0_18px_45px_rgba(53,24,20,0.1)] sm:p-8 animate-in fade-in slide-in-from-right-4 duration-700"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-gold/40" />
            <SectionTitle>Send Us a Message</SectionTitle>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(value) => setForm({ ...form, name: value })}
                placeholder="Your name"
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(value) => setForm({ ...form, email: value })}
                placeholder="Your email address"
                required
              />
            </div>
            <label className="mt-4 block text-xs font-bold text-ink">
              Subject
              <select
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
                className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm text-ink outline-none transition-colors focus:border-burgundy"
              >
                <option>General enquiry</option>
                <option>Passport purchase</option>
                <option>Destination suggestion</option>
                <option>Partnership or collaboration</option>
              </select>
            </label>
            <label className="mt-4 block text-xs font-bold text-ink">
              Message
              <textarea
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Your message..."
                required
                rows={5}
                className="mt-2 w-full resize-y border border-border bg-background px-3 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-burgundy"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 bg-burgundy px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-burgundy-deep hover:shadow-lg"
            >
              {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}{" "}
              {sent ? "Opening WhatsApp" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <section className="border-y border-border bg-paper px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1220px] items-center gap-8 md:grid-cols-[0.75fr_1fr_0.7fr]">
          <figure className="mx-auto w-full max-w-[300px] overflow-hidden">
            <img
              src={contactMapImage}
              alt="Illustrated map of Jammu and Kashmir"
              className="w-full object-cover"
            />
          </figure>
          <div>
            <SectionTitle>Visit Us</SectionTitle>
            <p className="mt-5 max-w-lg text-sm leading-7 text-ink-soft">
              While we&apos;re mostly online, we&apos;d love to hear from you. Feel free to reach
              out for any support, collaboration, or travel-related enquiries.
            </p>
            <p className="display-serif mt-6 text-2xl italic text-burgundy">See you in J&amp;K!</p>
          </div>
          <figure className="relative mx-auto w-full max-w-[225px] rotate-[6deg] bg-paper p-3 shadow-[0_14px_25px_rgba(53,24,20,0.2)] transition-transform duration-500 hover:rotate-0">
            <img
              src={contactVisitImage}
              alt="Jammu and Kashmir mountain valley"
              className="aspect-[0.9] w-full object-cover"
            />
            <figcaption className="display-serif pt-3 text-center text-lg italic text-burgundy">
              Jammu &amp; Kashmir
            </figcaption>
          </figure>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="display-serif flex items-center gap-3 text-3xl text-ink sm:text-4xl">
      <span className="h-px w-7 bg-burgundy" />
      {children}
      <span className="h-px flex-1 bg-burgundy/25" />
    </h2>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block text-xs font-bold text-ink">
      {label}
      {required ? " *" : ""}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full border border-border bg-background px-3 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-burgundy"
      />
    </label>
  );
}

function ContactItem({
  icon,
  title,
  text,
  note,
  href,
  external,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  note: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream text-burgundy">
        {icon}
      </span>
      <span>
        <strong className="block text-sm text-ink">{title}</strong>
        <span className="mt-1 block text-xs text-ink-soft">{text}</span>
        <span className="mt-1 block text-[10px] leading-4 text-ink-soft">{note}</span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-4 transition-transform hover:translate-x-1"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-full border border-burgundy/30 transition hover:-translate-y-1 hover:bg-burgundy hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}
