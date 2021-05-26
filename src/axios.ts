import Axios from "axios"

export default Axios.create({
    baseURL: "http://api.zhinengshe.com/manual/10012-douyin/",
    headers: {
        apikey: "9f82bcd39f314fadad119fb27789f818"
    }
})