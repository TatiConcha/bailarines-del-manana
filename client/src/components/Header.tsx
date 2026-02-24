import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component - Navegación elegante y minimalista
 * Diseño: Elegancia Contemporánea
 * - Logo/Título a la izquierda
 * - Navegación horizontal en desktop
 * - Menú hamburguesa en mobile
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Fundador", href: "#fundador" },
    { label: "Escuelas", href: "#escuelas" },
    { label: "Ganadores", href: "#ganadores" },
    { label: "Inscripción", href: "#inscripcion" },
    { label: "Preguntas frecuentes", href: "#preguntasfrecuentes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-7 flex justify-between items-center">

        {/* Marca */}
        <div>
          <h1 className="text-2xl md:text-3xl font-cormorant font-semibold tracking-tight text-gray-900">
            Bailarines del Mañana
          </h1>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-[0.15em] font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </nav>

        {/* Botón Mobile */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-8 flex flex-col gap-6">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-lato text-gray-700 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

          </div>
        </nav>
      )}
    </header>
  );
}