import { useInView } from "motion/react";
import { lazy, Suspense, useContext, useRef } from "react";
import HeroSectionSkeleton from "./components/heroSection/HeroSectionSkeleton";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LinearProgress } from "@mui/material";
import {
  LanguageContext,
  LanguageProvider,
} from "./providers/LanguageProvider";

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

const LoadingSkeleton = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="loading-skeleton">
      <p>{t("loadingText")}</p>
      <LinearProgress />
    </div>
  );
};

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
      <LanguageProvider>
        <div className="container">
          <section id="hero" ref={heroRef}>
            <Suspense fallback={<LoadingSkeleton></LoadingSkeleton>}>
              {heroIsInView && <HeroSection />}
            </Suspense>
          </section>
          <section id="services" ref={serviceRef}>
            <Suspense fallback={<LoadingSkeleton></LoadingSkeleton>}>
              {serviceIsInView && <ServicesSection />}
            </Suspense>
          </section>
          <div ref={portfolioRef}>
            <Suspense fallback={<LoadingSkeleton></LoadingSkeleton>}>
              {portfolioIsInView && <PortfolioSection />}
            </Suspense>
          </div>
          <section id="contact" ref={contactRef}>
            <Suspense fallback={<LoadingSkeleton></LoadingSkeleton>}>
              {contactIsInView && <ContactSection />}
            </Suspense>
          </section>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
