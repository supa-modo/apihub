import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../sections/Trust";
import Services from "../components/Services";
import Specialization from "../sections/Specialization";
import Process from "../components/Process";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Specialization />
      <Process />
      <Projects />
      <TechStack />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
