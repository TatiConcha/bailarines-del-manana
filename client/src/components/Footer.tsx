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
        <div className="grid md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-xl font-cormorant font-semibold mb-4">
              Bailarines del Mañana
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Programa internacional de audición para becas de ballet en
              prestigiosas escuelas de Estados Unidos.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <nav aria-label="Enlaces principales">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Enlaces
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Síguenos
            </h4>

            <a
              href="https://www.instagram.com/bailarines_del_manana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Bailarines del Mañana"
              className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {/* SVG Instagram */}
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

        {/* Línea inferior */}
        <div className="border-t mt-16 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Bailarines del Mañana. Todos los derechos reservados.
          </p>

          <p className="mt-2">
            Diseño & Desarrollo Web —{" "}
            <span className="font-medium text-gray-700">
              La Rubia Digital
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
