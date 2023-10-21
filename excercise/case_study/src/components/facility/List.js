import React from "react";
import * as villaService from "../../service/villa/villa_service";
import * as houseService from "../../service/house/house_service";
import * as roomService from "../../service/room/room_service";
function facilitiesList(){
    return(
        <>
            <div style={{marginTop: "100px"}} className="container">
                <div className="content row">
                    {villaService.findAll().map(facility => (
                        <div className="container col-3" key={facility.id}>
                            <div className="card">
                                <img src={facility.img}
                                     className="card-img-top"
                                     alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{facility.title}</h5>
                                    <p className="card-text">Room size : {facility.size} m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="content row">
                    {houseService.findAll().map(facility => (
                        <div className="container col-3" key={facility.id}>
                            <div className="card">
                                <img src={facility.img}
                                     className="card-img-top"
                                     alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{facility.title}</h5>
                                    <p className="card-text">Room size : {facility.size} m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="content row">
                    {roomService.findAll().map(facility => (
                        <div className="container col-3" key={facility.id}>
                            <div className="card">
                                <img src={facility.img}
                                     className="card-img-top"
                                     alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{facility.title}</h5>
                                    <p className="card-text">Room size : {facility.size} m<sup>2</sup></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default facilitiesList()