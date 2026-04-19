import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseUs from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ConsultationModal from "@/components/ConsultationModal";
import { ConsultationModalProvider } from "@/context/ConsultationModalContext";

const LandingPage: React.FC = () => {
  return (
    <ConsultationModalProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-700">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <SolutionsSection />
          <WhyChooseUs />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <ConsultationModal />
      </div>
    </ConsultationModalProvider>
  );
};

export default LandingPage;
