
const axios = require('axios');


const getClima = async( lat, lng) => {

     const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=eb3d2d4a016c3121644beb21679ca8e9&units=metric`)

   return resp.data.main.temp

}




module.exports = {

    getClima
}
