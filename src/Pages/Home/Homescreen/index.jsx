import AboutUs from "../AboutUs";
import ContactUs from "../JoinUs";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Events from "../Events";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Events />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
