import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "They understood our vision before we could even finish explaining it. Our wedding felt like a living version of us — every corner considered, nothing left to chance.",
    name: "Amara & James",
    detail: "Rosewood Estate, June",
  },
  {
    quote:
      "I didn't check my phone once on the day. That is the greatest gift a planner can give. We simply lived it, and they handled everything behind the scenes.",
    name: "Priya & Daniel",
    detail: "Amalfi Coast, September",
  },
  {
    quote:
      "Elegant, warm, and endlessly calm under pressure. Our families are still talking about how effortless the whole day felt.",
    name: "Sofia & Marcus",
    detail: "Willow Hall, October",
  },
];

export function Testimonials() {
  return (
    <section id="praise" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Kind Words
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance text-foreground md:text-5xl">
            Loved by the couples we serve
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 140}
              className="flex flex-col rounded-sm border border-border bg-card p-8"
            >
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none text-accent"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 font-serif text-xl font-light leading-relaxed text-card-foreground">
                {t.quote}
              </blockquote>
              <footer className="mt-8 border-t border-border pt-5">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  {t.detail}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
