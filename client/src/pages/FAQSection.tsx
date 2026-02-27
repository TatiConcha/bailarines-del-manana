import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQSection - Sección de preguntas frecuentes
 * Diseño: Elegancia Contemporánea
 * - Acordeón elegante
 * - Preguntas y respuestas claras
 * - Animaciones suaves
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "¿Cuál es el rango de edad para participar de la AUDICIÓN?",
      answer:
        "Los participantes deben tener entre 12 y 15 años para la categoría JUNIOR y entre 16 y 18 años para la categoría SENIOR al momento de la audición. Esta edad es fundamental para que los bailarines puedan beneficiarse plenamente de los programas de formación ofrecidos por las escuelas internacionales.",
    },
    {
      question:
        "¿Cuál es el costo de inscripción a la AUDICIÓN en CHILE?",
      answer:
        "El costo de inscripción a la audición es de $42.000 CLP y el costo de inscripción a la audición más la clase magistral es de $57.000 CLP. Este monto cubre la evaluación de tu solicitud y la participación en las audiciones presenciales.",
    },
    {
      question: "¿Dónde y cuándo se realizan las AUDICIONES?",
      answer:
        "Las audiciones se realizan el 11 de abril 2026 en la Escuela de Ballet Andrea Aedo (Avenida Concón Reñaca 41, local 27) en Concón, Valparaíso y el 12 de abril 2026 en la Escuela Royal Dance Chile (Diego de Almagro 5326, metro Principe de Gales) en Ñuñoa, Santiago.",
    },
    {
      question: "¿Cuánto cubre la beca?",
      answer:
        "Las becas solo cubren la COLEGIATURA de los cursos de verano, no cubren pasaje, visas, hospedaje, a menos que esté especificado.",
    },
    {
      question:
        "¿Puedo audicionar sin experiencia profesional?",
      answer:
        "Sí, puedes audicionar si tienes el conocimiento básico de la técnica clásica y contemporánea universal. No es necesario tener experiencia profesional previa.",
    },
    {
      question:
        "¿Qué pasa después de ganar una beca?",
      answer:
        "Después de ganar, trabajaremos contigo para que te comuniques directo con la escuela correspondiente quienes te asesorarán en cómo acceder a tu beca para el curso de verano.",
    },
    {
      question:
        "¿Cuál es el rango de edad para participar de la CLASE MAGISTRAL?",
      answer: "No hay rango de edad.",
    },
    {
      question:
        "¿Cuál es el costo de inscripción a la CLASE MAGISTRAL en CHILE?",
      answer:
        "El costo de inscripción a la clase magistral es de $27.000 CLP.",
    },
    {
      question:
        "¿Dónde y cuándo se realizan las CLASES MAGISTRALES?",
      answer:
        "Las audiciones se realizan el 11 de abril 2026 en la Escuela de Ballet Andrea Aedo (Avenida Concón Reñaca 41, local 27) en Concón, Valparaíso y el 12 de abril 2026 en la Escuela Royal Dance Chile (Diego de Almagro 5326, metro Principe de Gales) en Ñuñoa, Santiago.",
    },
    {
      question:
        "¿Puedo participar de la CLASE MAGISTRAL sin experiencia profesional?",
      answer:
        "Sí, Lo importante es demostrar tu pasión, disciplina y potencial. No es necesario tener experiencia profesional previa.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="preguntasfrecuentes"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Preguntas Frecuentes
        </h2>

        <p className="text-lg font-lato text-gray-600 text-center mb-16">
          Respuestas a las dudas más comunes sobre nuestro programa de becas y clases magistrales
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-sm overflow-hidden hover:border-gray-400 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-left text-lg font-cormorant font-bold text-gray-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-base font-lato text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contacto adicional */}
        <div className="mt-16 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-cormorant font-bold text-gray-900 mb-4">
            ¿Tienes más preguntas?
          </h3>

          <p className="text-lg font-lato text-gray-600 mb-6">
            Contáctanos directamente para obtener más información
          </p>

          <a
            href="mailto:info@sebastianvinet.com"
            className="inline-block text-lg font-cormorant font-bold text-gray-900 hover:text-gray-600 transition-colors duration-300 relative group"
          >
            info@sebastianvinet.com
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
}