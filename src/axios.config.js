import axios from "axios"

const base = axios.create({
    baseURL: "https://easeit.herokuapp.com/",
    // headers:{
    //     Accept:'*/*'
    // }
})

export default base