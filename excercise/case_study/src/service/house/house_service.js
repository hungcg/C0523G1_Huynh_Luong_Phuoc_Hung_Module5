import axios from "axios";

export const findAllHouse = async () => {
    try {
        let response = await axios.get("http://localhost:8080/house")
        return response.data

    } catch (e) {
    }
}
export const createHouse = async (value) => {
    try {
        let response = await axios.post("http://localhost:8080/house", value)
        return response.status;
    } catch (e) {

    }
}
export const findHouseById = async (houseId) => {
    try {
        const response = await axios.get(`http://localhost:8080/house/${houseId}`);
        return response.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editHouse = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8080/house/${data.id}`, data);
        return response
    } catch (e) {
        alert("Access Denied")
    }
}
export const deleteHouse = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/house/${id}`)
        return response;
    } catch (e) {
        alert("Delete fail");
    }
}



