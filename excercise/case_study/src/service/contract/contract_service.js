import async from "async";
import axios from "axios";

export  const findAll = async()=>{
    try{
        let response =await  axios.get("http://localhost:8080/contract")
        return response.data
    }catch (e) {

    }
}

