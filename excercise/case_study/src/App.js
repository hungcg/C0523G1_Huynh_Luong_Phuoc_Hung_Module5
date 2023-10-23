import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import "./css/header.css"
import "./css/body.css"

import {Route, Routes} from "react-router-dom";
import React from "react";
import {FacilitiesList} from "./components/facility/FacilitiesList";
import {CustomerList} from "./components/customer/CustomerList";
import {ContractList} from "./components/contract/ContractList";

// let customerList= [
//     {
//     }
// ];
function App() {
    return (
        <div className="App">

            <Header/>
            <Routes>
                <Route path="/facility" element={<FacilitiesList/>}></Route>
                <Route path="/customer" element={<CustomerList/>}></Route>
                <Route path="/facility" element={<ContractList/>}></Route>
            </Routes>
            <Footer/>


        </div>

    );
}

export default App;
