import { Reveal } from "./reveal";

const services = [
  {
    title: "Full Design & Planning",
    description:
      "From the very first idea to the final farewell, we shape every detail — the mood, the moments, the logistics — into one seamless celebration.",
  },
  {
    title: "Creative Direction",
    description:
      "A cohesive visual story told through florals, tablescapes, stationery, and light. Distinctive, intentional, and unmistakably you.",
  },
  {
    title: "Day-Of Coordination",
    description:
      "You've done the dreaming. We hold every thread on the day itself, so you and your guests can simply be present in the joy.",
  },
  {
    title: "Destination Weddings",
    description:
      "Vineyards, coastlines, and far-flung chapels. We handle the travel, the vendors, and the timezone tangles with calm precision.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            What We Do
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance text-foreground md:text-5xl">
            Every celebration, tended with intention
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 120}
              className="group bg-card p-8 md:p-10"
            >
              <span className="block h-px w-12 bg-accent transition-all duration-500 group-hover:w-20" />
              <h3 className="mt-6 font-serif text-2xl font-medium text-card-foreground md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
