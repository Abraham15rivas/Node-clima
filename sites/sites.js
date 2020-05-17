const axios = require('axios')

const getSites = async(address) => {

    const encodeUrl = encodeURI(address)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '07ef1f5bc7msh55180c60357f970p1a659ajsn717bad804283' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No resultados para ${address}`)
    }

    const country = resp.data.Results[0]
    const direccion = country.name
    const lat = country.lat
    const lng = country.lon

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getSites
}