import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { UseCases } from "@/components/sections/UseCases";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Credibility } from "@/components/sections/Credibility";
import { CTA } from "@/components/sections/CTA";

export function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <TrustIndicators />
        <Services />
        <Process />
        <UseCases />
        <WhyChooseUs />
        <Credibility />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
