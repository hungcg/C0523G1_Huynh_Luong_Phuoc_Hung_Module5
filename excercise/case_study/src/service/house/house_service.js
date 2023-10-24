
import axios from "axios";

export  const  findAllHouse= async ()=>{
    try{
        let response = await axios.get("http://localhost:8080/house")
        return response.data

    }catch (e) {

    }

}

