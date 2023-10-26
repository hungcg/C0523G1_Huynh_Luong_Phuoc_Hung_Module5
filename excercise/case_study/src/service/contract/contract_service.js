
import axios from "axios";

export  const findAll = async(bookingCode)=>{
    try{
        let response =await  axios.get(`http://localhost:8080/contract?code_like=${bookingCode}`)
        return response.data
    }catch (e) {

    }
}
export const createContract = async(value)=>{
    try{
        let response =await  axios.post("http://localhost:8080/contract",value)
        return response.status;
    }catch (e) {

    }
}
export const findContractById = async (contractId) => {
    try {
        const response = await axios.get(`http://localhost:8080/contract/${contractId}`);
        return response.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editContract = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8080/contract/${data.id}`,data);
        return response
    } catch (e) {
        alert("Access Denied")
    }
}
export const deleteContract = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/contract/${id}`)
        return response;
    } catch (e) {
        alert("Delete fail");
    }
}

