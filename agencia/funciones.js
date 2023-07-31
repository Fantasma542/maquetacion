
let solicitudes = [];
function solicitarInformacion() {
  let nombre = document.getElementById('nombre').value;
  let origen = document.getElementById('origen').value;
  let destino = document.getElementById('destino').value.toLowerCase();
  let personas = parseInt(document.getElementById('personas').value);
  let fecha = document.getElementById('fecha').value;

  let solicitud = {
    nombre: nombre,
    origen: origen,
    destino: destino,
    personas: personas,
    fecha: fecha
  };

  solicitudes.push(solicitud);
  console.log('Solicitud recibida:', solicitud);
}

function filtrarDestinos() {
  let destinosPermitidos = ['canarias', 'mallorca', 'galicia'];

  let resultadosFiltrados = solicitudes.filter(solicitud =>
    destinosPermitidos.includes(solicitud.destino)
  );

  mostrarResultados(resultadosFiltrados);
}

function mostrarResultados(resultados) {
  let resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = '';

  resultados.forEach(solicitud => {
    let resultadoElement = document.createElement('div');
    resultadoElement.innerHTML = `
      <p>Nombre: ${solicitud.nombre}</p>
      <p>Origen: ${solicitud.origen}</p>
      <p>Destino: ${solicitud.destino}</p>
      <p>Número de personas: ${solicitud.personas}</p>
      <p>Fecha: ${solicitud.fecha}</p>
      <hr>
    `;

    resultadosDiv.appendChild(resultadoElement);
  });
}