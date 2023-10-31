import axios from "axios"

const URL_CUSTOMER = "http://localhost:8081/api/customers"
const URL_TYPE_CUSTOMER = "http://localhost:8081/api/typeCustomer"
export const findAll = async (customerName, customerType) => {
    try {
        let response = await axios.get(URL_CUSTOMER + `?name_like=${customerName}&type.name_like=${customerType}&_sort=id&_order=desc`)
        return response.data;
    } catch (e) {

    }
}
export const createCustomer = async (value) => {
    try {
        let response = await axios.post(URL_CUSTOMER, value)
        return response.status;
    } catch (e) {

    }
}
export const findCustomerById = async (customerId) => {
    try {
        const response = await axios.get(URL_CUSTOMER +`/`+ customerId);
        return response.data
    } catch (e) {
        alert("Access Denied")
    }
}
export const editCustomer = async (data) => {
    try {
        const response = await axios.put(URL_CUSTOMER+`/${data.id}`, data);
        return response
    } catch (e) {
        alert("Access Denied")
    }
}
export const deleteCustomer = async (id) => {
    try {
        const response = await axios.delete(URL_CUSTOMER+`/${id}`)
        return response;
    } catch (e) {
        alert("Delete fail");
    }
}

export const findAllType = async () => {
    try {
        let response = await axios.get(URL_TYPE_CUSTOMER)
        return response.data;
    } catch (e) {

    }
}


