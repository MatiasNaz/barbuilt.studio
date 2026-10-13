import SiteHeader from './components/Header';
import SiteFooter from './components/Footer';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import FeaturedWorkSection from './sections/FeaturedWorkSection';
import ProcessSection from './sections/ProcessSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ServicesSection />
        <FeaturedWorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
