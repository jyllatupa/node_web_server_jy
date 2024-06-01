const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public'} = options
    // console.log(port)
    // console.log(public_path)

    const app = express()

    //Para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible para que se use

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath) //responde lo siguiente
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
}

module.exports = {
    startServer
}