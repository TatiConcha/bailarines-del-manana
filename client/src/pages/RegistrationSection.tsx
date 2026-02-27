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

      if (name === "activity") {
        if (value === "clase") {
          updated.age = "";
          updated.birthDate = "";
          updated.category = "";
        }
      }

      if (name === "birthDate") {
        if (!value) {
          updated.age = "";
          updated.category = "";
          return updated;
        }

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

    // 🔴 Validación obligatoria absoluta
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.activity ||
      !formData.school ||
      !formData.experience ||
      (isAudition && !formData.birthDate)
    ) {
      toast.error("Debes completar TODOS los campos obligatorios.");
      return;
    }

    if (isAudition) {
      const age = Number(formData.age);

      if (age < 12 || age > 18) {
        toast.error(
          "La edad permitida para audición es entre 12 y 18 años."
        );
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
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
          Inscripción Audiciones Chile 2026
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="md:col-span-2">
              <label className="block font-bold mb-3">
                Nombre Completo *
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

            <div>
              <label className="block font-bold mb-3">
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

            <div>
              <label className="block font-bold mb-3">
                Teléfono *
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

            <div className="md:col-span-2">
              <label className="block font-bold mb-3">
                Actividad *
              </label>
              <select
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-sm"
              >
                <option value="">Selecciona una opción</option>
                <option value="audicion">Audición</option>
                <option value="clase">Clase magistral</option>
                <option value="ambas">Audición + Clase</option>
              </select>
            </div>

            <div>
              <label className="block font-bold mb-3">
                Fecha de nacimiento *
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required={isAudition}
                disabled={isClaseOnly}
                className="w-full px-4 py-3 border rounded-sm disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-bold mb-3">
                Edad (automática)
              </label>
              <input
                type="number"
                value={formData.age}
                readOnly
                disabled
                className="w-full px-4 py-3 border rounded-sm bg-gray-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-bold mb-3">
                Ciudad *
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

            <div>
              <label className="block font-bold mb-3">
                Escuela de Ballet *
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

            <div className="md:col-span-2">
              <label className="block font-bold mb-3">
                Experiencia *
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