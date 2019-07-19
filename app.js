
const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima')



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para el clima',
        demmand: true

    }
}).argv

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(40.750000, -74.0000)
//    .then( console.log)
//    .catch(console.log);


const getInfo = async (direccion) => {


    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;

    } catch (e) {
        return `No se puede recuperar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

