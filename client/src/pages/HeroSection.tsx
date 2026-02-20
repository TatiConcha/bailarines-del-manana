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
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
/>

        {/* Overlay oscuro sutil */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido */}
        <div className="relative z-10 text-center text-white max-w-xl md:max-w-2xl px-6">
          <p className="text-sm uppercase tracking-widest mb-4">
              Bailarines del Mañana · Programa Internacional
           </p>
           <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-6 leading-tight">
              Audición de Ballet 2026
             <span className="block">
               Becas en Estados Unidos
             </span>
           </h1>
            <p className="text-xl md:text-2xl font-lato font-light mb-8 leading-relaxed">
             Audiciona por becas internacionales
             <span className="block">
              y participa en una clase magistral exclusiva.
            </span>
            </p>
          <a href="#inscripcion" className="inline-block">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-cormorant text-lg px-8 py-6 rounded-none border-2 border-white"
            >
              Inscríbete ahora
            </Button>
          </a>
          {/* Microcopy de urgencia */}
          <p className="text-sm mt-4 opacity-90">
           Audición presencial en Chile (abril) y en Perú (agosto) • Cupos limitados • Convocatoria 2026
          </p>
        </div>
        </div>
    </section>
  );
}
