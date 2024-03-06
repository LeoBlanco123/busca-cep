import axios from "axios";
var cors = require('cors')


app.use(cors())
const api = axios.create({
    baseURL: "http://viacep.com.br/ws/"
})

export default api;