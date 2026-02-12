/**
 * SchoolsSection - Sección de escuelas de ballet participantes
 * Diseño: Elegancia Contemporánea
 * - Descripción de cada escuela
 * - Ubicación geográfica
 * - Imágenes de las instalaciones
 */
export default function SchoolsSection() {
  const schools = [
    {
      name: "Boston Ballet",
      country: "Estados Unidos",
      city: "Boston, Massachusetts",
      description:
        "Una de las compañías de ballet más prestigiosas de América del Norte, conocida por su excelencia técnica y su compromiso con la innovación artística.",
      image: "/images/ballet_school_1.jpg",
      programs: ["Cursos de verano", "Residencias", "Programas anuales"],
    },
    {
      name: "Escuela Superior de Música y Danza de Monterrey",
      country: "México",
      city: "Monterrey",
      description:
        "Institución de excelencia en la formación de bailarines, con un enfoque en la técnica clásica y la expresión artística contemporánea.",
      image: "/images/ballet_school_2.jpg",
      programs: ["Cursos de verano", "Residencias", "Becas integrales"],
    },
    {
      name: "Melbourne Academy of the Arts",
      country: "Australia",
      city: "Melbourne",
      description:
        "Centro de formación de clase mundial que combina la tradición del ballet clásico con técnicas modernas y contemporáneas.",
      image: "/images/ballet_school_1.jpg",
      programs: ["Cursos de verano", "Residencias", "Programas especializados"],
    },
    {
      name: "Lizt Alfonso Dance Cuba",
      country: "Cuba",
      city: "La Habana",
      description:
        "Escuela de danza de renombre internacional que mantiene la tradición del ballet cubano y ofrece formación de nivel superior.",
      image: "/images/ballet_school_2.jpg",
      programs: ["Cursos de verano", "Residencias", "Intercambios culturales"],
    },
  ];

  return (
    <section id="escuelas" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Escuelas Participantes
        </h2>
        <p className="text-lg font-lato text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Instituciones de prestigio internacional que ofrecen becas a través de nuestro programa
        </p>

        <div className="space-y-20">
          {schools.map((school, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Imagen */}
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={school.image}
                  alt={`${school.name} - ${school.city}`}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>

              {/* Contenido */}
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <div className="mb-4">
                  <p className="text-sm font-lato font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    {school.country}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-cormorant font-bold text-gray-900 mb-2">
                    {school.name}
                  </h3>
                  <p className="text-lg font-lato text-gray-600">{school.city}</p>
                </div>

                <p className="text-lg font-lato text-gray-600 mb-8 leading-relaxed">
                  {school.description}
                </p>

                <div>
                  <h4 className="text-sm font-cormorant font-bold text-gray-900 mb-4 uppercase tracking-widest">
                    Programas Disponibles
                  </h4>
                  <ul className="space-y-3">
                    {school.programs.map((program, pidx) => (
                      <li
                        key={pidx}
                        className="flex items-center gap-3 text-sm font-lato text-gray-700"
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
