export default function PagoExitoso() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-cormorant font-bold text-gray-900">
          ¡Pago recibido!
        </h1>

        <p className="mt-4 text-gray-700">
          Gracias. Tu inscripción quedó registrada. El estado puede tardar unos segundos en
          actualizarse.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="/"
            className="px-8 py-3 bg-gray-900 text-white text-sm tracking-wide uppercase hover:bg-black transition"
          >
            Volver al inicio
          </a>

          
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Si tienes dudas, contáctanos a info@sebastianvinet.com
        </p>
      </div>
    </main>
  );
}