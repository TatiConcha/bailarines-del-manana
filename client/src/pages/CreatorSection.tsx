/**
 * CreatorSection - Sección sobre Sebastián Vinet
 * Diseño: Elegancia Contemporánea
 * - Imagen del creador
 * - Biografía elegante
 * - Logros y trayectoria
 */
export default function CreatorSection() {
  return (
    <section id="creador" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Imagen */}
          <div className="order-2 md:order-1">
            <img
              src="/images/sebastian_vinet_placeholder.jpg"
              alt="Sebastián Vinet, bailarín y creador"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Contenido */}
          <div className="order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-6">
              Sebastián Vinet
            </h2>
            <p className="text-lg font-lato text-gray-600 mb-6 leading-relaxed">
              Bailarín clásico internacional nacido en Santiago de Chile, Sebastián Vinet es una figura destacada en el mundo del ballet contemporáneo. Su trayectoria ha incluido actuaciones en compañías de renombre mundial como Houston Ballet, San Francisco Ballet y la Compañía Nacional de Danza de México.
            </p>

            <p className="text-lg font-lato text-gray-600 mb-8 leading-relaxed">
              Con una visión clara de apoyar el talento emergente, Sebastián creó <span className="font-semibold">Bailarines del Mañana</span>, un programa de becas internacionales que conecta a jóvenes bailarines con las mejores escuelas de ballet del mundo. Su compromiso es abrir puertas y crear oportunidades para que el talento latinoamericano brille en la escena internacional.
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-gray-400 pl-4">
                <p className="text-sm font-cormorant font-bold text-gray-900 mb-1">
                  Formación
                </p>
                <p className="text-sm font-lato text-gray-600">
                  Escuela de Ballet del Teatro Municipal de Santiago, Houston Ballet Academy
                </p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <p className="text-sm font-cormorant font-bold text-gray-900 mb-1">
                  Experiencia
                </p>
                <p className="text-sm font-lato text-gray-600">
                  Maestro invitado en ABT, Hong Kong Ballet, Les Ballet de Monte Carlo
                </p>
              </div>

              <div className="border-l-2 border-gray-400 pl-4">
                <p className="text-sm font-cormorant font-bold text-gray-900 mb-1">
                  Rol Actual
                </p>
                <p className="text-sm font-lato text-gray-600">
                  Jurado en YAGP, Prix de Lausanne y creador de Bailarines del Mañana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
