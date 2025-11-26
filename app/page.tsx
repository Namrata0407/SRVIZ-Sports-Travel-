import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedEvent from "@/components/FeaturedEvent";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import ItinerarySlider from "@/components/ItinerarySlider";
import AddOns from "@/components/AddOns";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import packagesData from "@/data/packages.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <FeaturedEvent event={packagesData.featuredEvent} />
      <Packages packages={packagesData.packages} />
      <WhyChooseUs stats={packagesData.stats} />
      <ItinerarySlider items={packagesData.itinerary} />
      <AddOns addons={packagesData.addons} />
      <LeadForm />
      <Footer />
    </main>
  );
}

