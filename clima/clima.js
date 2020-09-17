const axios = require('axios');

const getClima = async(lat, lng) => {
    // tiene q devolver una promesa por eso await
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8ba253fce0441f3c2310a7fbdd6aad53&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}