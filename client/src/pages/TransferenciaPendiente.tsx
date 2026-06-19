import Header from "@/components/Header";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const ACTIVITY_LABELS: Record<string, string> = {
  audicion: "Audición para beca",
  clase: "Clase magistral",
  ambas: "Audición + Clase magistral",
};

const CATEGORY_LABELS: Record<string, string> = {
  junior: "Junior (12-15 años)",
  senior: "Senior (16-18 años)",
};

export default function TransferenciaPendiente() {

  const amount = localStorage.getItem("inscripcion_amount");
    const activity = localStorage.getItem("inscripcion_activity");
  const category = localStorage.getItem("inscripcion_category");
const name = localStorage.getItem("inscripcion_name");

 useEffect(() => {
    return () => {
      localStorage.removeItem("inscripcion_amount");
      localStorage.removeItem("inscripcion_activity");
       localStorage.removeItem("inscripcion_category");
      localStorage.removeItem("inscripcion_name");
    
    };
  }, []);

  return (
  
  <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-28 flex justify-center px-6">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Inscripción recibida correctamente
          </h1>

          {amount && (
            <div className="bg-green-50 border border-green-300 p-4 rounded mb-6 text-center">
              <p><strong>Monto a transferir:</strong> S/ {amount}</p>

              {name && (
                <p><strong>Participante:</strong> {name}</p>
              )}

              {activity && (
  <p><strong>Actividad:</strong> {ACTIVITY_LABELS[activity] ?? activity}</p>
)}

{category && activity !== "clase" && (
  <p><strong>Categoría:</strong> {CATEGORY_LABELS[category] ?? category}</p>
)}

            </div>
          )}

          <p className="mb-6 text-center">
            Tu inscripción ha sido registrada exitosamente y se encuentra pendiente de pago.
          </p>

          <h2 className="text-xl font-bold mb-4 text-center">
            Datos para transferencia
          </h2>

          <div className="space-y-2 mb-6 text-center">
            <p><strong>Banco:</strong> Banco de Crédito del Perú (BCP)</p>
            <p><strong>Titular:</strong> Mónica Silvia Balbuena Romero</p>
            <p><strong>Tipo de cuenta:</strong> Ahorro</p>
            <p><strong>Número de cuenta:</strong> 19417052559006</p>
            <p><strong>DNI:</strong> 75228516</p>
            <p><strong>Correo:</strong> bailarinesdelmanana91@gmail.com</p>
            <p><strong>Nota:</strong> Indicar en la transferencia el nombre del participante</p>
          </div>

          {/* IMPORTANTE actualizado */}
          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded flex gap-2 items-start">
            <AlertTriangle className="w-5 h-5 mt-0.5 text-yellow-700 shrink-0" />
            <p className="font-bold">
              Importante: El cupo quedará reservado únicamente una vez que la transferencia haya sido recibida y validada por la organización.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}