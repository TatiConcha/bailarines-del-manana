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
      question: "¿Cuál es el rango de edad para participar?",
      answer:
        "Los participantes deben tener entre 13 y 19 años al momento de la audición. Esta edad es fundamental para que los bailarines puedan beneficiarse plenamente de los programas de formación ofrecidos por las escuelas internacionales.",
    },
    {
      question: "¿Cuál es el costo de inscripción?",
      answer:
        "El costo de inscripción es de $30,000 CLP (aproximadamente USD $35). Este monto cubre la evaluación de tu solicitud y la participación en las audiciones presenciales.",
    },
    {
      question: "¿Dónde se realizan las audiciones?",
      answer:
        "Las audiciones se realizan en diferentes ciudades de Chile. Generalmente se llevan a cabo en Santiago, pero también en otras ciudades según la demanda. Las fechas y ubicaciones exactas se anuncian con anticipación en nuestro sitio web.",
    },
    {
      question: "¿Qué documentos necesito para inscribirme?",
      answer:
        "Necesitarás: una foto en posición de ballet (en quinta posición), un video de máximo 3 minutos mostrando tu técnica, información personal completa y comprobante de pago de la inscripción.",
    },
    {
      question: "¿Cuánto cubre la beca?",
      answer:
        "Las becas varían según la escuela y el programa. Algunas cubren el 100% de la matrícula, mientras que otras cubren un porcentaje. Algunas becas también incluyen hospedaje y otros gastos. Los detalles específicos se proporcionan después de ser seleccionado.",
    },
    {
      question: "¿Puedo participar si no tengo experiencia profesional?",
      answer:
        "Sí, puedes participar si estás estudiando ballet en una escuela reconocida. Lo importante es demostrar tu pasión, disciplina y potencial. No es necesario tener experiencia profesional previa.",
    },
    {
      question: "¿Cuál es el proceso de selección?",
      answer:
        "El proceso consta de dos fases: primero, se revisan las solicitudes digitales (fotos y videos). Los preseleccionados son invitados a audiciones presenciales donde demuestran su técnica ante un jurado de expertos internacionales.",
    },
    {
      question: "¿Puedo participar desde el extranjero?",
      answer:
        "Sí, puedes participar desde cualquier país. Sin embargo, si eres preseleccionado, deberás viajar a Chile para las audiciones presenciales. Algunas escuelas ofrecen audiciones virtuales en casos especiales.",
    },
    {
      question: "¿Cuándo son las próximas audiciones?",
      answer:
        "Las audiciones se realizan anualmente. Las fechas exactas se anuncian con varios meses de anticipación. Te recomendamos seguir nuestras redes sociales para estar actualizado.",
    },
    {
      question: "¿Qué pasa después de ganar una beca?",
      answer:
        "Después de ganar, trabajaremos contigo para coordinar tu viaje, trámites de visa (si es necesario) y tu llegada a la escuela. También te proporcionaremos apoyo durante tu estadía para asegurar una experiencia exitosa.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Preguntas Frecuentes
        </h2>
        <p className="text-lg font-lato text-gray-600 text-center mb-16">
          Respuestas a las dudas más comunes sobre nuestro programa de becas
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
            href="mailto:info@bailarinesdelmanana.com"
            className="inline-block text-lg font-cormorant font-bold text-gray-900 hover:text-gray-600 transition-colors duration-300 relative group"
          >
            info@bailarinesdelmanana.com
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
