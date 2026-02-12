import { Button } from "@/components/ui/button";

/**
 * HeroSection - Sección inicial elegante con imagen de ballet
 * Diseño: Elegancia Contemporánea
 * - Imagen de ballet a sangre
 * - Título y subtítulo elegantes
 * - Botón de acción
 */
export default function HeroSection() {
  return (
    <section id="inicio" className="relative pt-24 pb-0 overflow-hidden">
      {/* Contenedor con imagen a sangre */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <img
          src="/images/hero_ballet.jpg"
          alt="Bailarina de ballet en pose elegante"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro sutil */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Contenido */}
        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <h1 className="text-6xl md:text-7xl font-cormorant font-bold mb-6 leading-tight">
            Bailarines del Mañana
          </h1>
          <p className="text-xl md:text-2xl font-lato font-light mb-8 leading-relaxed">
            Becas internacionales para jóvenes bailarines talentosos en las mejores escuelas del mundo
          </p>
          <a href="#inscripcion" className="inline-block">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-cormorant text-lg px-8 py-6 rounded-none border-2 border-white"
            >
              Inscribirse Ahora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
