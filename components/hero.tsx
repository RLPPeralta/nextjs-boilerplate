import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <Image
        src="/images/hero-reception.png"
        alt="Elegant outdoor wedding reception at dusk with floral tables and string lights"
        fill
        priority
        className="object-cover"
        style={{ animation: "magical-fade 1.8s ease-out both" }}
      />
      {/* Warm plum scrim for legibility: radial focus behind the text over a vertical wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 50% 45%, rgba(46,26,36,0.72), rgba(46,26,36,0.20) 70%, transparent), linear-gradient(to bottom, rgba(46,26,36,0.62), rgba(109,58,78,0.55) 45%, rgba(30,18,24,0.78))",
          animation: "magical-fade 1.8s ease-out both",
        }}
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <p
          className="mb-6 text-xs uppercase text-primary-foreground/90 md:text-sm"
          style={{
            animation: "shimmer-in 1.4s cubic-bezier(0.22,1,0.36,1) 400ms both",
          }}
        >
          Bespoke Wedding Planning
        </p>

        <h1
          className="font-serif text-5xl font-light leading-[1.05] text-balance text-primary-foreground md:text-7xl lg:text-8xl"
          style={{
            animation:
              "magical-rise 1.2s cubic-bezier(0.22,1,0.36,1) 700ms both",
          }}
        >
          Where forever
          <br />
          <span className="italic text-accent">begins beautifully</span>
        </h1>

        <p
          className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/90 md:text-lg"
          style={{
            animation:
              "magical-rise 1.2s cubic-bezier(0.22,1,0.36,1) 1000ms both",
          }}
        >
          We craft weddings that feel unmistakably yours — thoughtfully
          designed, effortlessly run, and quietly magical from the first hello
          to the last dance.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{
            animation:
              "magical-rise 1.2s cubic-bezier(0.22,1,0.36,1) 1250ms both",
          }}
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3 text-sm uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Begin Your Story
          </a>
          <a
            href="#portfolio"
            className="text-sm uppercase tracking-[0.2em] text-primary-foreground underline-offset-8 transition-colors hover:text-accent hover:underline"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
