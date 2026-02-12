/**
 * Footer Component - Pie de página elegante y minimalista
 * Diseño: Elegancia Contemporánea
 * - Información de contacto
 * - Enlaces rápidos
 * - Redes sociales
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-cormorant font-bold text-gray-900 mb-4">
              Bailarines del Mañana
            </h3>
            <p className="text-sm font-lato text-gray-600 leading-relaxed">
              Abriendo oportunidades internacionales para jóvenes bailarines de ballet talentosos.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-sm font-cormorant font-bold text-gray-900 mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Creador", "Ganadores", "Escuelas"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-lato text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-sm font-cormorant font-bold text-gray-900 mb-4">
              Información
            </h4>
            <ul className="space-y-2">
              {["Inscripción", "FAQ", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-lato text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-cormorant font-bold text-gray-900 mb-4">
              Contacto
            </h4>
            <p className="text-sm font-lato text-gray-600 mb-2">
              Email: info@bailarinesdelmanana.com
            </p>
            <p className="text-sm font-lato text-gray-600">
              Síguenos en redes sociales
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs font-lato text-gray-500 text-center">
            © 2026 Bailarines del Mañana. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
