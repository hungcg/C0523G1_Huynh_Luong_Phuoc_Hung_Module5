import React, {useEffect, useState} from "react";
import * as villaService from "../../service/villa/villa_service";
import * as houseService from "../../service/house/house_service";
import * as roomService from "../../service/room/room_service";
import {Link} from "react-router-dom";


export function FacilitiesList() {
    const [house, setHouse] = useState([])
    useEffect(() => {
        findAllHouse()

    }, [])
    const findAllHouse = async () => {
        let data = await houseService.findAllHouse()
        setHouse(data)
    }
    const [villa, setVilla] = useState([])
    useEffect(() => {
        findAllVilla()
    }, [])
    const findAllVilla = async () => {
        let data = await villaService.findAllVilla()
        setVilla(data)
    }
    const [room, setRoom] = useState([])
    useEffect(() => {
        findAllRoom()
    })
    const findAllRoom = async () => {
        let data = await roomService.findAllRoom()
        setRoom(data)
    }
    return (
        <>
            <div style={{marginTop: "100px"}} className="container">
                <div className="content row">
                    <div className="d-flex">
                        <h2 style={{position: "relative", left: "430px"}}>Facilities List</h2>
                        <Link to="/facility/create">
                            <button style={{position: "relative", top: "10px", left: "730px"}} className="btn"><i
                                className="animation"></i>New Create<i className="animation"></i>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <ul className="wrapper">
                            <Link to="/room" style={{textDecoration: "none"}}>
                                <li className="icon facebook">
                                    <span className="tooltip">Room</span>
                                    <span><i className="fab fa-facebook-f">🛏</i></span>
                                </li>
                            </Link>
                            <Link to="/house">
                                <li className="icon twitter">
                                    <span className="tooltip">House</span>
                                    <span><i className="fab fa-twitter"></i></span>
                                </li>
                            </Link>
                            <Link to="/villa">
                                <li className="icon instagram">
                                    <span className="tooltip">Villa</span>
                                    <span><i className="fab fa-instagram"></i></span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    {room.map(room => (
                        <div className="container col-3" key={room.id}>
                            <Link to="/room" style={{textDecoration: "none"}}>
                                <div className="card">
                                    <img src={room.img}
                                         className="card-img-top"
                                         alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{room.title}</h5>
                                        <p className="card-text">Room size : {room.size} m<sup>2</sup></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="content row">
                    {house.map(house => (
                        <div className="container col-3" key={house.id}>
                            <Link to="/house" style={{textDecoration: "none"}}>
                                <div className="card">
                                    <img src={house.img}
                                         className="card-img-top"
                                         alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{house.title}</h5>
                                        <p className="card-text">Room size : {house.size} m<sup>2</sup></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="content row">
                    {villa.map(villa => (
                        <div className="container col-3" key={villa.id}>
                            <Link to="/villa" style={{textDecoration: "none"}}>
                                <div className="card">
                                    <img src={villa.img}
                                         className="card-img-top"
                                         alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{villa.title}</h5>
                                        <p className="card-text">Room size : {villa.size} m<sup>2</sup></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
