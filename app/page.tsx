import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { ContactCta, SiteFooter } from "@/components/contact-cta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
