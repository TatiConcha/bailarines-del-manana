
const INSCRIPCIONES_CERRADAS = true;

/**
 * Footer Component - Pie de página elegante y minimalista
 * Diseño: Elegancia Contemporánea
 * - Información de contacto
 * - Enlaces rápidos
 * - Redes sociales
 */
export default function Footer() {
  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#fundador", label: "Fundador" },
    { href: "#escuelas", label: "Escuelas" },
    { href: "#ganadores", label: "Ganadores" },
    { href: "#inscripcion", label: "Inscripción" },
    { href: "#preguntasfrecuentes", label: "Preguntas" },
  ];

  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center md:text-left">

          {/* Marca */}
          <div className="mx-auto md:mx-0 max-w-sm">
            <h3 className="text-2xl font-cormorant font-semibold mb-4">
              Bailarines del Mañana
            </h3>

            <p className="text-sm text-gray-600 leading-7">
              Programa internacional de audición para becas de ballet
              <br className="hidden md:block" />
              en prestigiosas escuelas de Estados Unidos.
            </p>
          </div>

          {/* Enlaces */}
          <div className="mx-auto md:mx-0">
            <nav aria-label="Enlaces principales">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-gray-500">
                Enlaces
              </h4>

              <ul className="space-y-3">

             {quickLinks.map((link) => {
  const isInscripcion = link.label === "Inscripción";

  return (
    <li key={link.href}>
      <a
        href={isInscripcion && INSCRIPCIONES_CERRADAS ? "#" : link.href}
        onClick={(e) => {
          if (isInscripcion && INSCRIPCIONES_CERRADAS) {
            e.preventDefault();
          }
        }}
        className={`group relative inline-block text-sm transition-colors duration-300 ${
          isInscripcion && INSCRIPCIONES_CERRADAS
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {isInscripcion && INSCRIPCIONES_CERRADAS
          ? "Inscripciones cerradas"
          : link.label}

        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
})}
                

              </ul>
            </nav>
          </div>

          {/* Redes */}
          <div className="mx-auto md:mx-0">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-gray-500">
              Síguenos
            </h4>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.instagram.com/bailarines_del_manana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Bailarines del Mañana"
                className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>

                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t mt-16 pt-8 text-center text-xs text-gray-500 space-y-2">
          <p>
            © {new Date().getFullYear()} Bailarines del Mañana. Todos los
            derechos reservados.
          </p>

          <p>
            Diseño & Desarrollo Web —
            <a
             href="https://wa.me/56984301071?text=Hola%2C%20vi%20tu%20dise%C3%B1o%20y%20desarrollo%20web%20y%20me%20gustar%C3%ADa%20cotizar%20una%20p%C3%A1gina%20web%20contigo."
              target="_blank"
              rel="noopener noreferrer"
             className="font-medium text-gray-700 ml-1 hover:underline"
               >
              La Rubia Digital
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}