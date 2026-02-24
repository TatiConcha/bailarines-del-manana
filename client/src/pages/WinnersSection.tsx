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
      description: [
        "En la edición 2024 se otorgaron becas a través de nueve escuelas internacionales de prestigio.",
        "Las oportunidades fueron entregadas tanto en Chile como en Perú."
      ],

      chile: [
        "Eloísa Quevedo — Melbourne Academy of the Arts, Australia",
        "Emilia Mansilla — La Superior, México",
        "Javiera Concha — Lizt Alfonso Dance, Cuba",
        "Josefa Almaraz — North County Academy of Dance, Estados Unidos",
        "Manuel Espinoza — Ballet West, Estados Unidos",
        "María Gutiérrez — Boston Ballet, Estados Unidos",
        "Renata Silva — Cary Ballet Conservatory, Estados Unidos",
        "Tatiana Duque — Nashville Classical Ballet Academy, Estados Unidos",
        "Valentina Estévez — Cary Ballet Conservatory, Estados Unidos",
      ],

      peru: [
        "Ariana Andrade — Melbourne Academy of the Arts, Australia",
        "Bryana Rabines — Boston Ballet, Estados Unidos",
        "Cristina Huerta — Cary Ballet Conservatory, Estados Unidos",
        "Erika Ramírez — Lizt Alfonso Dance, Cuba",
        "María Ibérico — North County Academy of Dance, Estados Unidos",
        "Mayra Rosadio — La Superior, México",
        "Valentino León — Ballet West, Estados Unidos",
        "Yaiza Arteaga — Nashville Classical Ballet Academy, Estados Unidos",
      ],
    },
  ];

  return (
    <section id="ganadores" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título principal */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl 
                       font-cormorant font-semibold 
                       tracking-tight text-gray-900 
                       mb-8 text-center">
          Estudiantes Ganadores
        </h2>

        {/* Subtítulo editorial */}
        <p className="text-lg md:text-xl font-lato 
                      text-gray-600 text-center 
                      max-w-3xl mx-auto leading-relaxed mb-20">
          Conoce a los talentosos bailarines que han sido beneficiarios
          <span className="block mt-2">
            con becas internacionales a través de nuestro programa.
          </span>
        </p>

        <div className="space-y-28">
          {winners.map((winnerYear) => (
            <div key={winnerYear.year} className="bg-white rounded-sm">

              {/* Encabezado año */}
              <div className="px-8 md:px-14 pt-14 pb-10 border-b border-gray-200">

                <p className="text-xs uppercase tracking-[0.3em] 
                              text-gray-500 font-lato mb-4">
                  Edición {winnerYear.year}
                </p>

                <h3 className="text-3xl md:text-5xl 
                               font-cormorant font-semibold 
                               text-gray-900 mb-6 leading-tight">
                  {winnerYear.title}
                </h3>

                <div className="space-y-4 max-w-2xl">
                  {winnerYear.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-lg font-lato text-gray-600 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contenido */}
              <div className="px-8 md:px-14 py-14 space-y-20">

                {/* Chile */}
                <div>
                  <h4 className="text-xl md:text-2xl 
                                 font-cormorant font-semibold 
                                 text-gray-900 mb-8 tracking-tight">
                    Chile
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                    {winnerYear.chile.map((school, idx) => (
                      <p
                        key={idx}
                        className="text-base font-lato 
                                   text-gray-700 leading-relaxed"
                      >
                        {school}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Perú */}
                {winnerYear.peru && (
                  <div>
                    <h4 className="text-xl md:text-2xl 
                                   font-cormorant font-semibold 
                                   text-gray-900 mb-8 tracking-tight">
                      Perú
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                      {winnerYear.peru.map((school, idx) => (
                        <p
                          key={idx}
                          className="text-base font-lato 
                                     text-gray-700 leading-relaxed"
                        >
                          {school}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Imagen */}
        <div className="mt-32 group">
          <div className="overflow-hidden rounded-sm">
            <img
              src="/images/bailarinaenbarrablancoynegro.jpg"
              alt="Bailarina de ballet apoyada en barra"
              loading="lazy"
              decoding="async"
              className="w-full object-cover 
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

      </div>
    </section>
  );
}