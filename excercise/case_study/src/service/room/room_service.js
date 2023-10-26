import axios from "axios";

export const findAllRoom = async () => {
    try{
        let response = await axios.get("http://localhost:8080/room")
        return response.data;
    }catch (e) {

    }
}
export const createRoom = async(value)=>{
    try{
        let response =await  axios.post("http://localhost:8080/room",value)
        return response.status;
    }catch (e) {

    }
}
export const findRoomById = async (roomId) => {
    try {
        const response = await axios.get(`http://localhost:8080/room/${roomId}`);
        return response.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editRoom = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8080/room/${data.id}`,data);
        return response
    } catch (e) {
        alert("Access Denied")
    }
}
export const deleteRoom = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/room/${id}`)
        return response;
    } catch (e) {
        alert("Delete fail");
    }
}

