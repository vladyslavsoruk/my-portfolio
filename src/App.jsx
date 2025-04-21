import { useInView } from "motion/react";
import { lazy, Suspense, useRef } from "react";
import HeroSectionSkeleton from "./components/heroSection/HeroSectionSkeleton";
import { ThemeProvider } from "./providers/ThemeProvider";

const HeroSection = lazy(() => import("./components/heroSection/HeroSection"));
const PortfolioSection = lazy(() =>
  import("./components/portfolioSection/PortfolioSection")
);
const ServicesSection = lazy(() =>
  import("./components/servicesSection/ServicesSection")
);
const ContactSection = lazy(() =>
  import("./components/contactSection/ContactSection")
);

function App() {
  const heroRef = useRef();
  const heroIsInView = useInView(heroRef, { margin: "-200px", once: true });

  const serviceRef = useRef();
  const serviceIsInView = useInView(serviceRef, {
    margin: "-200px",
    once: true,
  });

  const portfolioRef = useRef();
  const portfolioIsInView = useInView(portfolioRef, {
    once: true,
  });

  const contactRef = useRef();
  const contactIsInView = useInView(contactRef, {
    margin: "-200px",
    once: true,
  });

  return (
    <ThemeProvider>
      <div className="container">
        <section id="hero" ref={heroRef}>
          {/* <HeroSectionSkeleton /> */}
          <Suspense fallback={<HeroSectionSkeleton />}>
            {heroIsInView && <HeroSection />}
          </Suspense>
        </section>
        <section id="services" ref={serviceRef}>
          <Suspense fallback={"loading ServicesSection..."}>
            {serviceIsInView && <ServicesSection />}
          </Suspense>
        </section>
        {/* <div ref={portfolioRef}>
          <Suspense fallback={"loading PortfolioSection..."}>
            {portfolioIsInView && <PortfolioSection />}
          </Suspense>
        </div>
        <section id="contact" ref={contactRef}>
          <Suspense fallback={"loading ContactSection..."}>
            {contactIsInView && <ContactSection />}
          </Suspense>
        </section> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
