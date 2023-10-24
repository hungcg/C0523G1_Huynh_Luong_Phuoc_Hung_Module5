import axios from "axios";

export const findAllRoom = async () => {
    try{
        let response = await axios.get("http://localhost:8080/room")
        return response.data;
    }catch (e) {

    }
}

