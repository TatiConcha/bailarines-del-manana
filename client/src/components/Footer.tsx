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
    { href: "#preguntasfrecuentes", label: "Preguntas frecuentes" },
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* Marca */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-cormorant font-semibold tracking-tight mb-6">
              Bailarines del Mañana
            </h3>

            <p className="text-base font-lato text-gray-600 leading-relaxed whitespace-pre-line">
              Programa internacional de audición para becas de ballet 
              en prestigiosas escuelas de Estados Unidos.

              Formación, proyección y oportunidades reales 
              para jóvenes talentos latinoamericanos.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <nav aria-label="Enlaces principales">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-700 mb-6">
                Navegación
              </h4>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base font-lato text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-700 mb-6">
              Conecta
            </h4>

            <a
              href="https://www.instagram.com/bailarines_del_manana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Bailarines del Mañana"
              className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6-1.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>

              <span className="text-base font-lato">
                Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-200 mt-20 pt-10 text-center">
          <p className="text-sm font-lato text-gray-500 leading-relaxed">
            © {new Date().getFullYear()} Bailarines del Mañana.

            Todos los derechos reservados.
          </p>

          <p className="mt-4 text-sm font-lato text-gray-500">
            Diseño & Desarrollo Web —

            <span className="ml-1 font-medium text-gray-700">
              La Rubia Digital
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}