import {render} from "@testing-library/react";
import React from "react";

function body() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.themulia.com/assets/image_gallery/og-image-homepage-themulia.jpeg"
                             className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://muliaweddings.com/assets/slider/2/2147.jpg" className="d-block w-100"
                             alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1920,h_1080,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t4ftiqwogmadgdjobkfk/Tr%E1%BA%A3iNghi%E1%BB%87m%C4%82nU%E1%BB%91ngEpicureanT%E1%BA%A1iTheMuliaResortNusaDuaBali-KlookVi%E1%BB%87tNam.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div id="facility" className="content container">
                <div className="card">
                    <img
                        src="https://cdn.tatlerasia.com/tatlerasia/i/2023/03/02124303-underwatersuite-interior-underwatersuitebedroom_cover_1600x1100.jpeg"
                        className="card-img-top"
                        alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">OCEAN SUITE</h5>
                            <p className="card-text">Room size : 85.8 m2</p>
                        </div>
                </div>

                <div className="card">
                    <img
                        src="https://ocean-resort-casino-atlantic-city.hotelmix.vn/data/Photos/OriginalPhoto/10195/1019541/1019541880/Ocean-Casino-Resort-Atlantic-City-Exterior.JPEG"
                        className="card-img-top"
                        alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">OCEAN STUDIO SUTIE</h5>
                            <p className="card-text">Room size : 40.1 m2</p>
                        </div>
                </div>

                <div className="card">
                    <img
                        src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/4/7/4/%7B47427327-C69C-4473-9AFC-4A65BC011938%7D191210_FIJ_Ocean_Deluxe_Room1.jpg"
                        className="card-img-top"
                        alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">OCEAN DELUXE</h5>
                            <p className="card-text">Room size : 43.7 m2</p>
                        </div>
                </div>

                <div className="card">
                    <img
                        src="https://www.discoverasr.com/content/dam/tal/media/images/properties/indonesia/bogor/the-botanica-sanctuary-bogor/apartmenttypes/the-botanica-suite/MBCK-Booking-BotanicaSuite3.jpg.transform/cap-lowres/image.jpg"
                        className="card-img-top"
                        alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">GARDEN DELUXE</h5>
                            <p className="card-text">Room size : 40.1 m2</p>
                        </div>
                </div>
            </div>

            <div className="content container">
                <div className="card">
                    <img
                        src="https://cdn.tcdulichtphcm.vn/upload/2-2022/images/2022-05-25/image1-1653442950-402-width734height768.jpg"
                        className="card-img-top"
                        alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">PRESIDENTIAL SUITE</h5>
                            <p className="card-text">Room size : 85.8 m2</p>
                        </div>
                </div>

                <div className="card">
                    <img
                        src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/209/2021/04/14051350/PullmanMaldivesMaamutaa_FamilyBeachVillaWithPool_Sala_Exterior-_4332-1024x683.jpg"
                        className="card-img-top"
                        alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">BEACH VILA</h5>
                            <p className="card-text">Room size : 40.1 m2</p>
                        </div>
                </div>

                <div className="card">
                    <img src="https://furaveri.com/wp-content/uploads/2022/04/OceanPoolVilla_Sunset_Deck_2.jpg"
                         className="card-img-top"
                         alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">POOL VILLAS</h5>
                            <p className="card-text">Room size : 43.7 m2</p>
                        </div>
                </div>

                <div className="card">
                    <img
                        src="https://hotels-attitude.com/medias/1623332133_attitude-hotel-lagoon-mauritius-room-couple-seafront-618x440.jpg"
                        className="card-img-top"
                        alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">LAGOON SUPERIOR</h5>
                            <p className="card-text">Room size : 40.1 m2</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default body