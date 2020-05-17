const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'muestra clima de la ciudad seleccionada',
        }
    }).argv

module.exports = {
    argv
}