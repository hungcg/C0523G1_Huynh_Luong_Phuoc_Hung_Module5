import axios from "axios"

export const findAll = async()=>{
    try{
        let response =await  axios.get("http://localhost:8080/customer")
        return response.data;
    }catch (e) {

    }
}
export const createCustomer = async(value)=>{
    try{
        let response =await  axios.post("http://localhost:8080/customer",value)
        return response.data;
    }catch (e) {

    }
}

