import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import "./css/header.css"
import "./css/button.css"
import "./css/list.css"
import {Route, Routes} from "react-router-dom";
import React from "react";
import {FacilitiesList} from "./components/facility/FacilitiesList";
import {CustomerList} from "./components/customer/CustomerList";
import {ContractList} from "./components/contract/ContractList";
import {CustomerCreate} from "./components/customer/CustomerCreate";
import {ToastContainer} from "react-toastify";
import {CustomerEdit} from "./components/customer/CustomerEdit";
import ContractCreate from "./components/contract/ContractCreate";
import {ContractEdit} from "./components/contract/ContractEdit";
import {RoomList} from "./components/facility/room/RoomList";
import {RoomCreate} from "./components/facility/room/RoomCreate";
import {RoomEdit} from "./components/facility/room/RoomEdit";
import {HouseList} from "./components/facility/house/HouseList";
import {HouseCreate} from "./components/facility/house/HouseCreate";
import {VillaList} from "./components/facility/villa/VillaList";
import {VillaEdit} from "./components/facility/villa/VillaEdit";
import {VillaCreate} from "./components/facility/villa/VillaCreate";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<FacilitiesList/>}></Route>
                <Route path="/facility" element={<FacilitiesList/>}></Route>
                <Route path="/room" element={<RoomList/>}></Route>
                <Route path="/room/create" element={<RoomCreate/>}></Route>
                <Route path="/room/edit/:id" element={<RoomEdit/>}></Route>
                <Route path="/villa" element={<VillaList/>}></Route>
                <Route path="/villa/create" element={<VillaCreate/>}></Route>
                <Route path="/villa/edit/:id" element={<VillaEdit/>}></Route>
                <Route path="/house" element={<HouseList/>}></Route>
                <Route path="/house/create" element={<HouseCreate/>}></Route>
                <Route path="/customer/create" element={<CustomerCreate/>}></Route>
                <Route path="/customer/edit/:id" element={<CustomerEdit/>}></Route>
                <Route path="/contract/create/" element={<ContractCreate/>}></Route>
                <Route path="/contract/edit/:id/" element={<ContractEdit/>}></Route>
                <Route path="/customer" element={<CustomerList/>}></Route>
                <Route path="/contract" element={<ContractList/>}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
            <Footer/>
        </div>
    );
}

export default App;
