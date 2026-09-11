const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Praise", href: "#praise" },
];

export function SiteHeader() {
  return (
    <header
      className="absolute inset-x-0 top-0 z-20"
      style={{ animation: "magical-fade 1.2s ease-out 200ms both" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a
          href="#top"
          className="font-serif text-xl font-medium tracking-wide text-primary-foreground drop-shadow-sm md:text-2xl"
        >
          Evermore <span className="text-accent">&amp;</span> Co.
        </a>

        <ul className="hidden items-center gap-10 text-sm uppercase tracking-[0.2em] text-primary-foreground/90 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-primary-foreground/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground md:text-sm"
        >
          Enquire
        </a>
      </nav>
    </header>
  );
}
