import axios from "axios"

export const findAll = async(customerName,customerType)=>{
    try{
        let response =await  axios.get(`http://localhost:8080/customer?name_like=${customerName}&type_like=${customerType}`)
        return response.data;
    }catch (e) {

    }
}
export const createCustomer = async(value)=>{
    try{
        let response =await  axios.post("http://localhost:8080/customer",value)
        return response.status;
    }catch (e) {

    }
}
export const findCustomerById = async (customerId) => {
    try {
        const response = await axios.get(`http://localhost:8080/customer/${customerId}`);
        return response.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editCustomer = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8080/customer/${data.id}`,data);
        return response
    } catch (e) {
        alert("Access Denied")
    }
}
export const deleteCustomer = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/customer/${id}`)
        return response;
    } catch (e) {
        alert("Delete fail");
    }
}

export const findAllType = async()=>{
    try{
        let response =await  axios.get(`http://localhost:8080/type`)
        return response.data;
    }catch (e) {

    }
}


