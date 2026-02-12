import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import CreatorSection from "./CreatorSection";
import WinnersSection from "./WinnersSection";
import SchoolsSection from "./SchoolsSection";
import RegistrationSection from "./RegistrationSection";
import FAQSection from "./FAQSection";

/**
 * Home Page - Página principal de Bailarines del Mañana
 * Diseño: Elegancia Contemporánea
 * - Integración de todas las secciones
 * - Navegación fluida
 * - Experiencia visual coherente
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-0">
        <HeroSection />
        <CreatorSection />
        <WinnersSection />
        <SchoolsSection />
        <RegistrationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
