/**
 * WinnersSection - Sección de ganadores de audiciones anteriores
 * Diseño: Elegancia Contemporánea
 * - Ganadores de 2022 y 2024
 * - Información de becas otorgadas
 * - Galería visual
 */
export default function WinnersSection() {
  const winners = [
    {
      year: 2024,
      title: "Ganadores 2024",
      description:
        "En la edición 2024, se otorgaron becas a través de 9 escuelas internacionales de prestigio.",
      highlights: [
        {
          name: "Emilia Mancilla",
          school: "Escuela Superior de Música y Danza de Monterrey",
          country: "México",
          award: "Beca 100%",
        },
      ],
      schools: [
        "Melbourne Academy of the Arts (Australia)",
        "Boston Ballet (EE.UU.)",
        "Escuela Superior de Música y Danza de Monterrey (México)",
        "Cary Ballet Conservatory (EE.UU.)",
        "Nashville Classical Ballet Academy (EE.UU.)",
        "North County Academy of Dance (EE.UU.)",
        "Ballet West (EE.UU.)",
        "Australian National Youth Ballet",
        "Lizt Alfonso Dance Cuba (Cuba)",
      ],
    },
    {
      year: 2022,
      title: "Ganadores 2022",
      description:
        "La primera edición de Bailarines del Mañana reunió a talento joven en audiciones presenciales.",
      highlights: [
        {
          name: "Múltiples ganadores",
          school: "ABT JKO School, Jacqueline's School of Ballet, Rock School",
          country: "EE.UU.",
          award: "Becas de verano",
        },
      ],
      schools: [
        "ABT JKO School (Nueva York)",
        "Jacqueline's School of Ballet (Salt Lake City)",
        "Rock School for Dance Education (Filadelfia)",
      ],
    },
  ];

  return (
    <section id="ganadores" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Ganadores de Jornadas Anteriores
        </h2>
        <p className="text-lg font-lato text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Conoce a los talentosos bailarines que han ganado becas internacionales a través de nuestro programa
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
                {/* Ganadores Destacados */}
                <div className="mb-12">
                  <h4 className="text-2xl font-cormorant font-bold text-gray-900 mb-6">
                    Ganadores Destacados
                  </h4>
                  <div className="space-y-4">
                    {winnerYear.highlights.map((winner, idx) => (
                      <div
                        key={idx}
                        className="border-l-4 border-gray-400 pl-6 py-4"
                      >
                        <p className="text-lg font-cormorant font-bold text-gray-900">
                          {winner.name}
                        </p>
                        <p className="text-sm font-lato text-gray-600 mb-2">
                          {winner.school}
                        </p>
                        <p className="text-sm font-lato font-semibold text-gray-900">
                          {winner.award}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Escuelas Participantes */}
                <div>
                  <h4 className="text-2xl font-cormorant font-bold text-gray-900 mb-6">
                    Escuelas Participantes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {winnerYear.schools.map((school, idx) => (
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
              </div>
            </div>
          ))}
        </div>

        {/* Imagen de ganadores */}
        <div className="mt-20">
          <img
            src="/images/ballet_winners.jpg"
            alt="Ganadores de becas celebrando"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
