const http = require('http');

const port = 5000;
const host = 'localhost';

// Membuat objek server dan menetapkan requestListener
const server = http.createServer(requestListener);

// Mendengarkan port dan host yang ditentukan
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// Menanggapi setiap permintaan (request)
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end('<h1>Belajar Membuat HTTP Server!</h1>');
};
