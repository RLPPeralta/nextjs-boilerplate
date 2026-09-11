import Image from "next/image";
import { Reveal } from "./reveal";

export function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <Image
        src="/images/gallery-couple.png"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-primary-foreground md:py-36">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Let&apos;s Begin
          </p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-balance md:text-6xl">
            Your day deserves to feel
            <span className="italic text-accent"> like magic</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-primary-foreground/85">
            We take on a limited number of weddings each season so every couple
            has our full heart. Tell us your date and your dream — we&apos;ll
            take it from there.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@evermoreandco.com"
              className="rounded-full bg-accent px-8 py-3 text-sm uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Request a Consultation
            </a>
            <a
              href="tel:+10000000000"
              className="text-sm uppercase tracking-[0.2em] underline-offset-8 transition-colors hover:text-accent hover:underline"
            >
              Call the Studio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-background px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <p className="font-serif text-lg text-foreground">
          Evermore <span className="text-accent">&amp;</span> Co.
        </p>
        <p className="tracking-wide">
          Bespoke wedding planning &amp; design
        </p>
        <p>
          &copy; {new Date().getFullYear()} Evermore &amp; Co. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
