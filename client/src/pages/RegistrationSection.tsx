import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


type CuposResponse = {
  santiago: {
    clase: number;
    junior: number;
    senior: number;
  };
  concon: {
    clase: number;
    junior: number;
    senior: number;
  };
};

const MAX_CUPOS = {
  clase: 22,
  junior: 22,
  senior: 22,
} as const;

const INSCRIPCIONES_CERRADAS = true;

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

  const [cupos, setCupos] = useState<CuposResponse | null>(null);
  const [loadingCupos, setLoadingCupos] = useState(true);

  const isAudition = formData.activity === "audicion" || formData.activity === "ambas";
  const isClaseOnly = formData.activity === "clase";

  // ✅ Precios (AJUSTA ESTOS MONTOS A LOS REALES)
  const PRICES = {
    audicion: 42000,
    clase: 27000,
    ambas: 57000,
  } as const;

  const amount = formData.activity
    ? PRICES[formData.activity as keyof typeof PRICES]
    : 0;

  // 🔹 Función profesional para calcular edad real
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

    useEffect(() => {
    const fetchCupos = async () => {
      try {
        setLoadingCupos(true);

        const res = await fetch("https://api.sebastianvinet.com/cupos");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "Error al verificar disponibilidad. Intenta nuevamente.");
        }

        setCupos(data);
      } catch (error) {
        console.error(error);
        toast.error("Error al verificar disponibilidad. Intenta nuevamente.");
      } finally {
        setLoadingCupos(false);
      }
    };

    fetchCupos();
  }, []);
   
     const getCuposOcupados = (city: string, type: "clase" | "junior" | "senior") => {
    if (!cupos) return 0;
    if (city !== "santiago" && city !== "concon") return 0;
    return cupos[city][type];
  };

  const hasClaseCupo = (city: string) => {
    if (!city) return true;
    return getCuposOcupados(city, "clase") < MAX_CUPOS.clase;
  };

  const hasAuditionCupo = (city: string, category: string) => {
    if (!city || !category) return true;
    if (category !== "junior" && category !== "senior") return true;
    return getCuposOcupados(city, category) < MAX_CUPOS[category];
  };

  const claseDisponible = useMemo(() => {
    if (!formData.city) return true;
    return hasClaseCupo(formData.city);
  }, [formData.city, cupos]);

  const auditionDisponible = useMemo(() => {
    if (!formData.city || !formData.category) return true;
    return hasAuditionCupo(formData.city, formData.category);
  }, [formData.city, formData.category, cupos]);

  const currentBlockMessage = useMemo(() => {
    if (!formData.city || !formData.activity) return "";

    if (formData.activity === "clase") {
      if (!claseDisponible) {
        return "✨ Los cupos para esta categoría ya se encuentran completos.";
      }
    }

    if (formData.activity === "ambas") {
      if (!claseDisponible) {
        return "✨ Los cupos para esta categoría ya se encuentran completos.";
      }

      if (formData.category && !auditionDisponible) {
        return "✨ Los cupos para esta categoría ya se encuentran completos.";
      }
    }

    if (formData.activity === "audicion") {
      if (formData.category && !auditionDisponible) {
        return "✨ Los cupos para esta categoría ya se encuentran completos.";
      }
    }

    return "";
  }, [formData.city, formData.activity, formData.category, claseDisponible, auditionDisponible]);

  const isSelectionBlocked = useMemo(() => {
    if (!formData.city || !formData.activity) return false;

    if (formData.activity === "clase") {
      return !claseDisponible;
    }

    if (formData.activity === "ambas") {
      if (!claseDisponible) return true;
      if (formData.category && !auditionDisponible) return true;
      return false;
    }

    if (formData.activity === "audicion") {
      if (formData.category && !auditionDisponible) return true;
      return false;
    }

    return false;
  }, [formData.city, formData.activity, formData.category, claseDisponible, auditionDisponible]);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
        // Si cambia a audicion/ambas y ya hay birthDate, recalcular
        if ((value === "audicion" || value === "ambas") && updated.birthDate) {
          const age = calculateAge(updated.birthDate);
          updated.age = age.toString();

          if (age >= 12 && age <= 15) updated.category = "junior";
          else if (age >= 16 && age <= 18) updated.category = "senior";
          else updated.category = "";
        }
      }

      // 🔹 Cambio de fecha de nacimiento
      if (name === "birthDate") {
        // Ojo: aquí usamos el value nuevo y miramos la actividad elegida (prev.activity)
        const willBeAudition = updated.activity === "audicion" || updated.activity === "ambas";
        if (!willBeAudition) return updated;

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

        if (loadingCupos) {
      toast.error("Error al verificar disponibilidad. Intenta nuevamente.");
      return;
    }

    if (isSelectionBlocked) {
      toast.error(currentBlockMessage || "✨ Los cupos para esta categoría ya se encuentran completos.");
      return;
    }

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

    if (!amount || amount <= 0) {
      toast.error("Selecciona una actividad para calcular el pago.");
      return;
    }

        if (isAudition) {
      const age = Number(formData.age);
      if (Number.isNaN(age)) {
        toast.error("Ingresa una fecha de nacimiento válida.");
        return;
      }
      if (age < 12 || age > 18) {
        toast.error("La edad permitida para audición es entre 12 y 18 años");
        return;
      }
      if (!formData.category) {
        toast.error("No se pudo determinar la categoría de audición.");
        return;
      }
      if (!hasAuditionCupo(formData.city, formData.category)) {
        toast.error("✨ Los cupos para esta categoría ya se encuentran completos.");
        return;
      }
    }

    if ((formData.activity === "clase" || formData.activity === "ambas") && !hasClaseCupo(formData.city)) {
      toast.error("✨ Los cupos para esta categoría ya se encuentran completos.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ Llamamos al backend que crea el pago en Flow
      const res = await fetch("https://api.sebastianvinet.com/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          email: formData.email,
          nombre: formData.fullName,
          phone: formData.phone,
          city: formData.city,
          activity: formData.activity,
          category: formData.category,
          birthDate: formData.birthDate,
          school: formData.school,
          experience: formData.experience
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error /create-payment:", data);
        toast.error(data?.error || "Error al iniciar el pago. Intenta nuevamente.");
        return;
      }

      // ✅ Flow suele devolver { url, token }
      const paymentUrl = data?.url && data?.token ? `${data.url}?token=${data.token}` : null;

      if (!paymentUrl) {
        console.error("Respuesta inesperada de Flow:", data);
        toast.error("No se pudo generar la URL de pago.");
        return;
      }

      // ✅ Redirigir a Flow para pagar
      window.location.href = paymentUrl;
    } catch (error) {
      console.error(error);
      toast.error("Error al conectar con el sistema de pago. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

    if (INSCRIPCIONES_CERRADAS) return null;
    
  return (
    <section id="inscripcion" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-gray-900 mb-4 text-center">
          Inscripción Audiciones Chile 2026
        </h2>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
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
              <label className="block text-sm font-cormorant font-bold mb-3">Email *</label>
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

<option
  value="clase"
  disabled={
    (formData.city === "santiago" && !!cupos && cupos.santiago.clase >= MAX_CUPOS.clase) ||
    (formData.city === "concon" && !!cupos && cupos.concon.clase >= MAX_CUPOS.clase)
  }
>
  Clase magistral
</option>

<option
  value="ambas"
  disabled={
    (formData.city === "santiago" && !!cupos && cupos.santiago.clase >= MAX_CUPOS.clase) ||
    (formData.city === "concon" && !!cupos && cupos.concon.clase >= MAX_CUPOS.clase)
  }
>
  Audición + Clase magistral
</option>
              </select>

              {/* ✅ Resumen precio */}
              {formData.activity && (
                <div className="mt-4 p-4 bg-gray-100 rounded-sm">
                  <p className="font-cormorant font-bold text-lg">
                    Total a pagar: ${amount.toLocaleString("es-CL")}
                  </p>
                </div>
              )}
            </div>

                           {currentBlockMessage && (
                <div className="mt-4 p-4 rounded-sm border border-red-200 bg-red-50 text-red-700">
                  {currentBlockMessage}
                </div>
              )}


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
                Edad (sólo para audición, calculada automáticamente)
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
                Categoría (sólo para audición, calculada automáticamente)
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
               disabled={isSubmitting || loadingCupos || isSelectionBlocked}
                className="w-full bg-gray-900 text-white py-6"
                 >
               {loadingCupos
  ? "Cargando cupos..."
  : isSubmitting
    ? "Redirigiendo..."
    : isSelectionBlocked
      ? "Sin cupos disponibles"
      : formData.activity
        ? `Pagar ahora $${amount.toLocaleString("es-CL")}`
        : "Pagar"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}