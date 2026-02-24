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
      question: "¿Cuál es el rango de edad para participar de la audición?",
      answer: `Los participantes deben tener entre 12 y 15 años para la categoría JUNIOR 
y entre 16 y 18 años para la categoría SENIOR al momento de la audición.

Este rango es fundamental para que los bailarines puedan beneficiarse plenamente de los programas de formación ofrecidos por las escuelas internacionales.`,
    },
    {
      question: "¿Cuál es el costo de inscripción a la audición en Chile?",
      answer: `El costo de inscripción a la audición es de $40.000 CLP.

El costo de inscripción a la audición más la clase magistral es de $55.000 CLP.

Este monto cubre la evaluación de tu solicitud y la participación en las audiciones presenciales.`,
    },
    {
      question: "¿Dónde y cuándo se realizan las audiciones?",
      answer: `Las audiciones se realizan el 11 de abril de 2026 en la Escuela de Ballet Andrea Aedo (Avenida Concón Reñaca 41, local 27) en Concón, Valparaíso.

El 12 de abril de 2026 se realizan en la Escuela Royal Dance Chile (Diego de Almagro 5326, metro Príncipe de Gales) en Ñuñoa, Santiago.`,
    },
    {
      question: "¿Cuánto cubre la beca?",
      answer: `Las becas cubren únicamente la colegiatura de los cursos de verano.

No incluyen pasaje, visas ni hospedaje, salvo que esté expresamente especificado.`,
    },
    {
      question: "¿Puedo audicionar sin experiencia profesional?",
      answer: `Sí.

Puedes audicionar si cuentas con conocimientos básicos de técnica clásica y contemporánea universal.

No es necesario tener experiencia profesional previa.`,
    },
    {
      question: "¿Qué sucede después de ganar una beca?",
      answer: `Después de ganar, trabajaremos contigo para que te comuniques directamente con la escuela correspondiente.

Ellos te asesorarán sobre cómo acceder formalmente a tu beca para el curso de verano.`,
    },
    {
      question: "¿Cuál es el rango de edad para participar de la clase magistral?",
      answer: `No existe un rango de edad específico para participar en la clase magistral.`,
    },
    {
      question: "¿Cuál es el costo de inscripción a la clase magistral en Chile?",
      answer: `El costo de inscripción a la clase magistral es de $25.000 CLP.`,
    },
    {
      question: "¿Dónde y cuándo se realizan las clases magistrales?",
      answer: `Se realizan el 11 de abril de 2026 en la Escuela de Ballet Andrea Aedo en Concón, Valparaíso.

Y el 12 de abril de 2026 en la Escuela Royal Dance Chile en Ñuñoa, Santiago.`,
    },
    {
      question: "¿Puedo participar de la clase magistral sin experiencia profesional?",
      answer: `Sí.

Lo importante es demostrar pasión, disciplina y potencial.

No es necesario contar con experiencia profesional previa.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntasfrecuentes" className="py-28 md:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-cormorant font-semibold tracking-tight text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>

          <p className="text-lg md:text-xl font-lato text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Información esencial sobre el programa de becas,
            audiciones y clases magistrales.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-6 text-left group"
              >
                <h3 className="text-xl md:text-2xl font-cormorant font-semibold tracking-tight text-gray-900 leading-snug">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={22}
                  className={`mt-1 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="mt-6">
                  <p className="text-base md:text-lg font-lato text-gray-700 leading-loose whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contacto */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl md:text-3xl font-cormorant font-semibold tracking-tight text-gray-900 mb-6">
            ¿Tienes más preguntas?
          </h3>

          <p className="text-lg font-lato text-gray-600 mb-8">
            Contáctanos directamente para recibir orientación personalizada.
          </p>

          <a
            href="mailto:info@sebastianvinet.com"
            className="inline-block text-xl font-cormorant font-semibold tracking-wide text-gray-900 hover:text-gray-600 transition-colors duration-300 relative group"
          >
            info@sebastianvinet.com
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-500"></span>
          </a>
        </div>

      </div>
    </section>
  );
}