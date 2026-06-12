import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import Features from "../components/Features/Features";
import Collections from "../components/Collections/Collections";
import Brands from "../components/Brands/Brands";
import Testimonials from "../components/Testimonials/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton.jsx";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import LuxuryBanner from "../components/LuxuryBanner/LuxuryBanner";
import MapSection from "../components/MapSection/MapSection";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <Features />
      <Collections />
      <Brands />
      <Testimonials />
      <Contact />
      <MapSection />
      <LuxuryBanner />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Home;