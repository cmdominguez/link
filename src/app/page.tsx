'use client'

import Image from "next/image";

export default function Home() {

  const onClick = () => {
    navigator.geolocation.getCurrentPosition((data) => {
      console.log(data);
      // Coordenadas para las que deseas obtener la dirección
      var lat = data.coords.latitude;
      var lon = data.coords.longitude;

      // URL del servicio de geocodificación inversa de OpenStreetMap Nominatim
      var url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lon;

      // Realiza la solicitud HTTP
      fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            
              // Obtiene la dirección del resultado
              var address = data.display_name;
              // Muestra la dirección en el elemento con id="output"
              console.log(address);
              
          })
          .catch(error => console.error('Error:', error));
      
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Transferencia automatica</h2>
            <form>
                <div className="mb-4">
                    <label for="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label for="apellido" className="block text-gray-700 text-sm font-bold mb-2">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
                </div>
                <div className="mb-4">
                    <label for="cbu" className="block text-gray-700 text-sm font-bold mb-2">CBU:</label>
                    <input type="text" id="cbu" name="cbu" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label for="cbu" className="block text-gray-700 text-sm font-bold mb-2">Monto en $:</label>
                    <input type="text" id="cbu" name="cbu" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div className="mt-6">
                    <button onClick={onClick} type="button" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full md:w-auto">Enviar</button>
                </div>
            </form>
        </div>
    </div>
    </main>
  );
}
