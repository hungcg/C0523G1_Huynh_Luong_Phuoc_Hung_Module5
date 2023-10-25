import * as userService from "../../service/userService.jsx"
import {DELETE, FIND_ALL} from "../ActionsType.jsx";
export const findAll =() => async (dispatch) =>{
    const data = await userService.getData();
    dispatch({
        type: FIND_ALL,
        payload: data
    })

};
export const removeUser = (id) => async (dispatch) =>{
    const remove = await userService.deleteUser(id);
    dispatch({
        type:DELETE,
        payload: id
    })
}