const axios = require('axios')

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0f06032899b96a67c671d4d9297ce73c&units=metric`)
    return resp.data.main.temp

}

module.exports = {
    getClima
}