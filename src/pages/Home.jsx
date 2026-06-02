import Navbar from "../components/Navbar";
import Ticker from "../components/Ticker";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Logos from "../components/Logos";
import Services from "../components/Services";
import Process from "../components/Process";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <Metrics />
      <Logos />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <WhyUs />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;