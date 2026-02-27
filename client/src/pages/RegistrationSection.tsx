import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    birthDate: "",
    category: "",
    city: "",
    activity: "",
    school: "",
    experience: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAudition =
    formData.activity === "audicion" ||
    formData.activity === "ambas";

  const isClaseOnly = formData.activity === "clase";

  // 🔹 Función profesional para calcular edad real
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // 🔹 Cambio de actividad
      if (name === "activity") {
        if (value === "clase") {
          updated.age = "";
          updated.birthDate = "";
          updated.category = "";
        }
      }

      // 🔹 Cambio de fecha de nacimiento
      if (name === "birthDate") {
        if (!isAudition) return updated;

        const age = calculateAge(value);
        updated.age = age.toString();

        if (age >= 12 && age <= 15) {
          updated.category = "junior";
        } else if (age >= 16 && age <= 18) {
          updated.category = "senior";
        } else {
          updated.category = "";
        }
      }

      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.activity ||
      !formData.school ||  
      !formData.experience ||
      (!isClaseOnly && !formData.birthDate)
    ) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    if (isAudition) {
      const age = Number(formData.age);

      if (age < 12 || age > 18) {
        toast.error("La edad permitida para audición es entre 12 y 18 años");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "¡Inscripción recibida! Te contactaremos pronto con los detalles de pago."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        birthDate: "",
        category: "",
        city: "",
        activity: "",
        school: "",
        experience: "",
      });
    } catch (error) {
      toast.error(
        "Error al enviar el formulario. Intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inscripcion" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Inscripción Audiciones Chile 2026
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Nombre */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold mb-3">
                Nombre Completo del Participante *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-sm"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Teléfono Celular *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-sm"
              />
            </div>

            {/* Actividad */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold mb-3">
                Actividad en la que participas *
              </label>
              <select
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-sm"
              >
                <option value="">Selecciona una opción</option>
                <option value="audicion">Audición para beca</option>
                <option value="clase">Clase magistral</option>
                <option value="ambas">Audición + Clase magistral</option>
              </select>
            </div>

            {/* Fecha de nacimiento */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Fecha de nacimiento * (sólo para audición)
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                disabled={isClaseOnly}
                required={isAudition}  
                className="w-full px-4 py-3 border rounded-sm disabled:bg-gray-100"
              />
            </div>

            {/* Edad (automática) */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Edad  (sólo para audición, calculada automáticamente)
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                readOnly
                disabled
                className="w-full px-4 py-3 border rounded-sm bg-gray-100"
              />
            </div>

            {/* Categoría */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold mb-3">
                Categoría  (sólo para audición, calculada automáticamente)
              </label>
              <select
                name="category"
                value={formData.category}
                disabled
                className="w-full px-4 py-3 border rounded-sm bg-gray-100"
              >
                <option value="">Selecciona categoría</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            {/* Ciudad */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Ciudad en la que participas *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-sm"
              >
                <option value="">Selecciona ciudad</option>
                <option value="santiago">Santiago</option>
                <option value="concon">Concón</option>
              </select>
            </div>

            {/* Escuela */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Escuela de Ballet Actual *
              </label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-sm"
              />
            </div>

            {/* Experiencia */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold mb-3">
                Años de experiencia en Ballet y Contemporáneo *
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border rounded-sm"
              />
            </div>

          </div>

          <div className="mt-8 pt-8 border-t">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-6"
            >
              {isSubmitting ? "Enviando..." : "Enviar Inscripción y Pagar"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}