import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component - Navegación elegante y minimalista
 * Diseño: Elegancia Contemporánea
 * - Logo/Título a la izquierda
 * - Navegación horizontal en desktop
 * - Menú hamburguesa en mobile
 */

const INSCRIPCIONES_CERRADAS = true;
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Fundador", href: "#fundador" },
    { label: "Escuelas", href: "#escuelas" },
    { label: "Ganadores", href: "#ganadores" },
    { label: "Inscripción", href: "#inscripcion" },
    { label: "Preguntas", href: "#preguntasfrecuentes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Logo / Título */}
        <div className="flex items-center">
          <h1 className="text-2xl font-cormorant font-bold text-gray-900 tracking-wide">
            Bailarines del Mañana
          </h1>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8">

         {navItems.map((item) => {
  const isInscripcion = item.label === "Inscripción";

  return (
    <a
      key={item.label}
      href={
        isInscripcion && INSCRIPCIONES_CERRADAS
          ? undefined
          : item.href
      }
      onClick={(e) => {
        if (isInscripcion && INSCRIPCIONES_CERRADAS) {
          e.preventDefault();
        }
      }}
      className={`text-sm font-lato transition-colors duration-300 relative group ${
        isInscripcion && INSCRIPCIONES_CERRADAS
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray-700 hover:text-gray-900"
      }`}
    >
      {isInscripcion && INSCRIPCIONES_CERRADAS
        ? "Inscripciones cerradas"
        : item.label}

      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
})}
          
        </nav>

        {/* Botón Menú Mobile */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-lato text-gray-700 hover:text-gray-900 transition-colors"
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