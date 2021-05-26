import Axios from "axios"

export const apikey = "9f82bcd39f314fadad119fb27789f818"

export default Axios.create({
    baseURL: "http://api.zhinengshe.com/10012-douyin/",
    headers: {
        apikey: apikey
    }
})