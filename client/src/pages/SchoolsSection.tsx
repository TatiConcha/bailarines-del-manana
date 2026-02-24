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
      name: "Houston Ballet Academy",
      country: "Chile y Perú",
      city: "Texas, Estados Unidos",
      description:
        "Desde su fundación en 1955, Houston Ballet Academy ha brindado la más alta calidad de formación en ballet a bailarines aspirantes. Durante el verano, los estudiantes recibirán una formación que enriquecerá y complementará su educación previa en danza.",
      image: "/images/Houston-Ballet-Academy-image.jpg",
      program: ["Curso intensivo de verano 2026 (Chile), 2027 (Perú)"],
    },
    {
      name: "International Ballet Academy",
      country: "Chile y Perú",
      city: "Carolina del Norte, Estados Unidos",
      description:
        "IBA ofrece un programa intensivo de verano, diseñado para estudiantes que se encuentren en un nivel intermedio o superior. El objetivo es brindar oportunidades para que el bailarín crezca tanto a nivel técnico como artístico.",
      image: "/images/International-Ballet-Academy-image.jpg",
      program: ["Curso intensivo de verano 2026 (Chile), 2027 (Perú)"],
    },
    {
      name: "New Jersey Ballet",
      country: "Chile y Perú",
      city: "New Jersey, Estados Unidos",
      description:
        "El curso intensivo de verano está dirigido a estudiantes de ballet comprometidos, que sienten una verdadera pasión por la danza y están preparados para alcanzar un nuevo nivel de excelencia artística. Los estudiantes entrenarán en nuestras instalaciones de última generación bajo la guía de un distinguido equipo docente que incluirá maestros invitados de reconocimiento internacional.",
      image: "/images/New-Jersey-Ballet-image.jpg",
      program: ["Curso intensivo de verano 2026 (Chile), 2027 (Perú)"],
    },
    {
      name: "Rock School for Dance Education",
      country: "Chile y Perú",
      city: "Pensilvania, Estados Unidos",
      description:
        "El curso intensivo de verano 2026 de The Rock School ofrece atención personalizada por parte de un galardonado equipo docente en instalaciones de última generación.",
      image: "/images/Rock-School-for-Dance-Education-image.jpg",
      program: ["Curso intensivo de verano 2026 (Chile), 2027 (Perú)"],
    },
 {
      name: "Westchester Ballet Company",
      country: "Chile",
      city: "Nueva York, Estados Unidos",
      description:
        "Nuestras clases fortalecen el cuerpo y la confianza. Y nuestros programas de verano continúan abriendo nuevos caminos donde antes no los había. Este verano, bajo la dirección de Sebastián Vinet, cada alumno vivirá una experiencia formativa exigente, inspiradora y transformadora.",
      image: "/images/Westchester-Ballet-Company-image.jpg",
      program: ["Curso intensivo de verano 2026 (Chile), incluye hospedaje"],
    },
  ];

  return (
    <section id="escuelas" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Escuelas Partners Chile y Perú 2026
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
                    Programa Disponible
                  </h4>
                  <ul className="space-y-3">
                    {school.program.map((program, pidx) => (
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