const http = require('http');
const os = require('os');

const PUERTO = 3000;

const servidor = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenida a la API de Noelia');
  } else if (req.url === '/estado') {
    const estado = {
      servicio: 'api_node',
      hostname: os.hostname(),
      uptime_segundos: process.uptime(),
      fecha: new Date().toISOString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(estado));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

servidor.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});