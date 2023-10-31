import axios from "axios";

export const findAll = async (name, type,page)=> {
    try{
        let res = await axios.get(`http://localhost:8080/product?name_like=${name}&type.name_like=${type}&_sort=id&_order=desc&_page=${page}&_limit=3`)
        return res
    }catch (e) {
       alert("Access denied")
    }
}
export const create = async (value) =>{
    try{
        let res = await  axios.post("http://localhost:8080/product",value)
        return res.status
    }catch (e) {
        alert("Access denied")

    }
}
export const edit = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8080/product/${data.id}`,data);
        return response
    } catch (e) {
        alert("Access Denied")
    }
}
export const deleted = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/product/${id}`)
        return response;
    } catch (e) {
        alert("Delete fail");
    }
}

export const findAllType= async() =>{
    try{
        let res = await  axios.get("http://localhost:8080/type")
        return res.data
    }catch (e) {
        alert("not found")

    }
}
export const findById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/product/${id}`);
        return response.data
    } catch (e) {
        alert("Access Denied")
    }
}