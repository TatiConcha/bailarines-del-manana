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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // 🔹 Si cambia actividad
      if (name === "activity") {
        if (value === "clase") {
          updated.category = "";
        }

        // Si cambia a audición y ya hay edad, recalcular categoría
        if (
          (value === "audicion" || value === "ambas") &&
          updated.age
        ) {
          const ageNum = Number(updated.age);

          if (ageNum >= 12 && ageNum <= 15) {
            updated.category = "junior";
          } else if (ageNum >= 16 && ageNum <= 18) {
            updated.category = "senior";
          } else {
            updated.category = "";
          }
        }
      }

      // 🔹 Si cambia edad
      if (name === "age") {
        const ageNum = Number(value);

        if (isAudition) {
          // Bloquear edad fuera de rango
          if (ageNum < 12 || ageNum > 18) {
            return prev;
          }

          if (ageNum >= 12 && ageNum <= 15) {
            updated.category = "junior";
          } else if (ageNum >= 16 && ageNum <= 18) {
            updated.category = "senior";
          }
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
      !formData.age ||
      !formData.birthDate ||
      !formData.city ||
      !formData.activity
    ) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    if (isAudition) {
      const age = Number(formData.age);

      if (!formData.category) {
        toast.error("Edad fuera del rango permitido (12-18)");
        return;
      }

      if (
        formData.category === "junior" &&
        (age < 12 || age > 15)
      ) {
        toast.error("La categoría Junior es entre 12 y 15 años");
        return;
      }

      if (
        formData.category === "senior" &&
        (age < 16 || age > 18)
      ) {
        toast.error("La categoría Senior es entre 16 y 18 años");
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

           <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4 px-2 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl font-lato text-gray-600 leading-relaxed sm:leading-loose">
             Las audiciones se realizarán el 11 de abril en Concón y el 12 de abril en Santiago.
            </p>

              <p className="text-base sm:text-lg md:text-xl font-lato text-gray-600 leading-relaxed sm:leading-loose">
               El mismo día se impartirá una clase magistral abierta a los participantes de las audiciones o a bailarines que solo quieran participar de la clase. Puedes inscribirte solo a la audición, solo a la clase magistral o a ambas actividades. El valor de inscripción varía según la opción seleccionada.
            </p>
           </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Nombre */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold text-gray-900 mb-3">
                Nombre Completo del Participante *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm"
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
                className="w-full px-4 py-3 border rounded-sm"
              >
                <option value="">Selecciona una opción</option>
                <option value="audicion">Audición para beca</option>
                <option value="clase">Clase magistral</option>
                <option value="ambas">Audición + Clase magistral</option>
              </select>
            </div>

            {/* Edad */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Edad *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min={isAudition ? 12 : undefined}
                max={isAudition ? 18 : undefined}
                className="w-full px-4 py-3 border rounded-sm"
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-cormorant font-bold mb-3">
                Categoría * (sólo para audición)
              </label>
              <select
                name="category"
                value={formData.category}
                disabled={formData.activity === "clase"}
                className="w-full px-4 py-3 border rounded-sm disabled:bg-gray-100"
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
                Escuela de Ballet Actual
              </label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-sm"
              />
            </div>

            {/* Experiencia */}
            <div className="md:col-span-2">
              <label className="block text-sm font-cormorant font-bold mb-3">
                Años de experiencia en Ballet y Contemporáneo
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
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
              {isSubmitting ? "Enviando..." : "Enviar Inscripción"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}