
const http = require('http')
// const { request } = require('node:http')

const server = http.createServer((request, response) => {

    console.log('path: ', request.url)

    response.write('Hola desde un servidor en Node')
    response.end()
})

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080')
})

