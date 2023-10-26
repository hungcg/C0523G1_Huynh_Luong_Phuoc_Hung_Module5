import axios from "axios";

export const findAllVilla = async ()=>{
    try{
        let response = await axios.get("http://localhost:8080/villa");
        return response.data
    }catch (e) {
    }
}
export const createVilla = async(value)=>{
    try{
        let response =await  axios.post("http://localhost:8080/villa",value)
        return response.status;
    }catch (e) {

    }
}
export const findVillaById = async (villaId) => {
    try {
        const response = await axios.get(`http://localhost:8080/villa/${villaId}`);
        return response.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editVilla = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8080/villa/${data.id}`,data);
        return response
    } catch (e) {
        alert("Access Denied")
    }
}
export const deleteVilla = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/villa/${id}`)
        return response;
    } catch (e) {
        alert("Delete fail");
    }
}


