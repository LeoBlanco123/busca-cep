import axios from "axios";
var cors = require('cors')


app.use(cors())
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;