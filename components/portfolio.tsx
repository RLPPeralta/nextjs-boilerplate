import Image from "next/image";
import { Reveal } from "./reveal";

const gallery = [
  {
    src: "/images/gallery-ceremony.png",
    alt: "Floral ceremony arch in a garden with a petal-strewn aisle",
    caption: "Rosewood Estate",
    tag: "Garden Ceremony",
    span: "sm:col-span-2 sm:row-span-2",
    ratio: "aspect-[4/5] sm:aspect-auto sm:h-full",
  },
  {
    src: "/images/gallery-florals.png",
    alt: "Lush blush and white wedding floral arrangement",
    caption: "The Details",
    tag: "Floral Design",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/gallery-tablescape.png",
    alt: "Candlelit fine dining wedding tablescape with gold accents",
    caption: "Twilight Dinner",
    tag: "Tablescape",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/gallery-couple.png",
    alt: "Couple sharing a first dance under warm string lights at dusk",
    caption: "The First Dance",
    tag: "The Moment",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-primary px-6 py-24 text-primary-foreground md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Selected Work
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-5xl">
              Celebrations we&apos;ve had the honour of shaping
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-primary-foreground/70">
            A glimpse into the weddings we&apos;ve designed — each one rooted in
            its couple, its place, and its own quiet kind of magic.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 100}
              className={`group relative overflow-hidden rounded-sm ${item.span}`}
            >
              <div className={`relative w-full ${item.ratio}`}>
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {item.tag}
                  </p>
                  <p className="mt-1 font-serif text-2xl">{item.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
