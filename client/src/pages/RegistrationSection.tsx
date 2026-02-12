import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

/**
 * RegistrationSection - Formulario de inscripción elegante
 * Diseño: Elegancia Contemporánea
 * - Campos de información personal
 * - Validación de datos
 * - Confirmación de envío
 */
export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    school: "",
    experience: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.age ||
      !formData.country
    ) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("¡Inscripción recibida! Nos pondremos en contacto pronto.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        school: "",
        experience: "",
        country: "",
      });
    } catch (error) {
      toast.error("Error al enviar el formulario. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inscripcion" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Inscripción
        </h2>
        <p className="text-lg font-lato text-gray-600 text-center mb-16">
          Completa el formulario para participar en las audiciones de Bailarines del Mañana
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nombre Completo */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
                placeholder="tu@email.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                Teléfono *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Edad */}
            <div>
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                Edad *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
                placeholder="Entre 13 y 19 años"
                min="13"
                max="19"
              />
            </div>

            {/* País */}
            <div>
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                País *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
              >
                <option value="">Selecciona tu país</option>
                <option value="chile">Chile</option>
                <option value="argentina">Argentina</option>
                <option value="colombia">Colombia</option>
                <option value="peru">Perú</option>
                <option value="mexico">México</option>
                <option value="cuba">Cuba</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {/* Escuela Actual */}
            <div>
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                Escuela de Ballet Actual
              </label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
                placeholder="Nombre de tu escuela"
              />
            </div>

            {/* Experiencia */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                Años de Experiencia en Ballet
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-lato"
                placeholder="Cuéntanos sobre tu experiencia en ballet..."
              />
            </div>
          </div>

          {/* Términos y Condiciones */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-xs font-lato text-gray-600 mb-6">
              Al enviar este formulario, aceptas que tus datos serán utilizados para
              procesar tu inscripción a Bailarines del Mañana. Tus datos serán tratados
              con confidencialidad.
            </p>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white hover:bg-gray-800 font-cormorant text-lg py-6 rounded-none border-2 border-gray-900"
            >
              {isSubmitting ? "Enviando..." : "Enviar Inscripción"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
