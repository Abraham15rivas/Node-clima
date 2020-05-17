let argv = require('./config/yargs').argv
const { getSites } = require('./sites/sites')
const { getClima } = require('./clima/clima')

const getInfo = async(direccion) => {

    try {

        const coords = await getSites(direccion)
        const temp = await getClima(coords.lat, coords.lng)
        return `El clima de ${coords.direccion} es de ${temp}`

    } catch (error) {

        return `El clima de ${direccion} no se encontro`

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)