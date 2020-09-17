const axios = require('axios');

// funcion para reutilizar el codigo
const getLugarLatLng = async(dir) => {

    // Se realiza de esa manera para evitar problemas cuando hay ciudades con espacio como nueva york
    // es la variables para recibir la cuidad por pantalla
    const encodedUlr = encodeURI(dir);
    //console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=f9a5814dbee88d7d07cf3c2a53ef67cd&query=${encodedUlr}`
            // headers: {'api': 'key'}
    });

    const resp = await instance.get()

    // controlar el error
    if (resp.data.location.length === 0) {

        throw new Error(`No hay resultados para ${dir}`);
    }
    // devolver los valores del api
    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng

    }
}

module.exports = {
    getLugarLatLng
}