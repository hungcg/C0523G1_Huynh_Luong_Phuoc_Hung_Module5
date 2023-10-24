import axios from "axios";

export const findAllVilla = async ()=>{
    try{
        let response = await axios.get("http://localhost:8080/villa");
        return response.data
    }catch (e) {
    }
}


