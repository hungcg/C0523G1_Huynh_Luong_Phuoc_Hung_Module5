import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import "./css/header.css"
import "./css/button.css"
import "./css/list.css"
import "./css/form.css"
import {Route, Routes} from "react-router-dom";
import React from "react";
import {FacilitiesList} from "./components/facility/FacilitiesList";
import {FacilitiesCreate} from "./components/facility/FacilitiesCreate";
import {CustomerList} from "./components/customer/CustomerList";
import {ContractList} from "./components/contract/ContractList";

function App() {
    return (
        <div className="App">

            <Header/>
            <Routes>
                <Route path="/facility" element={<FacilitiesList/>}></Route>
                <Route path="/facility/create" element={<FacilitiesCreate/>}></Route>
                <Route path="/customer" element={<CustomerList/>}></Route>
                <Route path="/contract" element={<ContractList/>}></Route>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
