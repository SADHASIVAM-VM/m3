
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StatsSection from "@/components/StatsSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import DonationSection from "@/components/DonationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <Features />
        <ProjectShowcase />
        <Testimonials />
        <PricingSection />
        <DonationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
