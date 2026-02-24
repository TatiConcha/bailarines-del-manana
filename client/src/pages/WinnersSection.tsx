/**
 * WinnersSection - Sección de ganadores de audiciones anteriores
 * Diseño: Elegancia Contemporánea
 * - Ganadores 2024
 * - Información de becas otorgadas
 * - Galería visual
 */

export default function WinnersSection() {
  const winners = [
    {
      year: 2024,
      title: "Estudiantes ganadores de una beca 2024",
      description:
        "En la edición 2024, se otorgaron becas a través de 9 escuelas internacionales de prestigio, las cuales fueron entregadas tanto en Chile como en Perú.",
      chile: [
        "Eloísa Quevedo: Melbourne Academy of the Arts, Australia",
        "Emilia Mansilla: La Superior, México",
        "Javiera Concha: Lizt Alfonso Dance, Cuba",
        "Josefa Almaraz: North County Academy of Dance, Estados Unidos",
        "Manuel Espinoza: Ballet West, Estados Unidos",
        "María Gutiérrez: Boston Ballet, Estados Unidos",
        "Renata Silva: Cary Ballet Conservatory, Estados Unidos",
        "Tatiana Duque: Nashville Classical Ballet Academy, Estados Unidos",
        "Valentina Estévez: Cary Ballet Conservatory, Estados Unidos",
      ],
      peru: [
        "Ariana Andrade: Melbourne Academy of the Arts, Australia",
        "Bryana Rabines: Boston Ballet, Estados Unidos",
        "Cristina Huerta: Cary Ballet Conservatory, Estados Unidos",
        "Erika Ramírez: Lizt Alfonso Dance, Cuba",
        "María Ibérico: North County Academy of Dance, Estados Unidos",
        "Mayra Rosadio: La Superior, México",
        "Valentino León: Ballet West, Estados Unidos",
        "Yaiza Arteaga: Nashville Classical Ballet Academy, Estados Unidos",
      ],
    },
  ];

  return (
    <section id="ganadores" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Estudiantes Ganadores de una Beca
        </h2>

        <p className="text-lg font-lato text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          Conoce a los talentosos bailarines que han sido beneficiarios con becas internacionales
          <br className="hidden md:block" />
          a través de nuestro programa
        </p>

        <div className="space-y-20">
          {winners.map((winnerYear) => (
            <div
              key={winnerYear.year}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Encabezado */}
              <div className="bg-gray-100 px-8 py-8 border-b border-gray-200">
                <h3 className="text-4xl font-cormorant font-bold text-gray-900 mb-2">
                  {winnerYear.title}
                </h3>
                <p className="text-lg font-lato text-gray-600">
                  {winnerYear.description}
                </p>
              </div>

              {/* Contenido */}
              <div className="p-8 md:p-12">
                {/* Chile */}
                <div className="mb-12">
                  <h4 className="text-2xl font-cormorant font-bold text-gray-900 mb-6">
                    Chile
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {winnerYear.chile?.map((school, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-sm"
                      >
                        <span className="text-gray-400 font-cormorant font-bold mt-1">
                          •
                        </span>
                        <p className="text-sm font-lato text-gray-700">
                          {school}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Perú */}
                {winnerYear.peru && winnerYear.peru.length > 0 && (
                  <div>
                    <h4 className="text-2xl font-cormorant font-bold text-gray-900 mb-6">
                      Perú
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {winnerYear.peru.map((school, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-sm"
                        >
                          <span className="text-gray-400 font-cormorant font-bold mt-1">
                            •
                          </span>
                          <p className="text-sm font-lato text-gray-700">
                            {school}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Imagen de ganadores */}
        <div className="mt-2mt-32 group">
          <div className="relative overflow-hidden rounded-sm"></div>
          <img
            src="/images/bailarinaenbarrablancoynegro.jpg"
            alt="Bailarina de ballet apoyanda en barra"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover
                 transition-transform duration-[1800ms] ease-out
                 group-hover:scale-[1.04]"
          />
          {/* Máscara elegante */}
    <div className="absolute inset-0 
                    bg-gradient-to-t 
                    from-black/50 via-black/20 to-transparent
                    opacity-80">
    </div>
        </div>
      </div>
    </section>
  );
}