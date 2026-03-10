import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/home/Hero";
import FeaturedBrand from "@/components/home/FeaturedBrand";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HardwareSpotlight from "@/components/home/HardwareSpotlight";
import ServicesPreview from "@/components/home/ServicesPreview";
import Roadmap from "@/components/home/Roadmap";
import CreativeSection from "@/components/home/CreativeSection";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depro Trading | Premium Interior & Infrastructure Hardware Malappuram",
  description: "Experience excellence with Depro Trading, Malappuram's leading supplier of premium hardware solutions. Specialized in interior works, aluminum fabrication, and wholesale supply.",
};

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <FeaturedBrand />
        <WhyChooseUs />
        <ServicesPreview />
        <Roadmap />
        <CreativeSection />
        <FAQ />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
