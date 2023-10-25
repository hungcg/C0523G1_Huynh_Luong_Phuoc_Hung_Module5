import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAll} from "../redux/middleaware/UserMiddleware.jsx";
import {NavLink} from "react-router-dom";
import {DeleteUser} from "./DeleteUser.jsx";

export function UserList() {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const [modal,setModal] = useState(false);
    const [userDelete,setUserDelete] = useState(null);


    useEffect(()=>{
        dispatch(findAll())
    },[]);

    const showModal = async (item) =>{
        setUserDelete(item);
        setModal(true);
    }

    const closedModal = async () =>{
        findAll();
        setModal(false);
        setUserDelete(null)

    }

    if (!users){
        return null;
    }

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users ? users.map((item,index) =>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.website}</td>
                            <td>
                                <NavLink to="/">
                                    <button type="button" className="btn btn-outline-warning"
                                            onClick={() => showModal(item)}>
                                        Delete
                                    </button>
                                </NavLink>
                            </td>
                        </tr>
                    )
                }) : ""}
                </tbody>
            </table>
            <DeleteUser
                show={modal}
                select={userDelete}
                close={closedModal}
            >
            </DeleteUser>
        </>
    )

}