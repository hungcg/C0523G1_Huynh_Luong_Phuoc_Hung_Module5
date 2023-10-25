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
import {CustomerCreate} from "./components/customer/CustomerCreate";
import {ToastContainer} from "react-toastify";
import {CustomerEdit} from "./components/customer/CustomerEdit";
import ContractCreate from "./components/contract/ContractCreate";
import {ContractEdit} from "./components/contract/ContractEdit";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<FacilitiesList/>}></Route>
                <Route path="/facility" element={<FacilitiesList/>}></Route>
                <Route path="/facility/create" element={<FacilitiesCreate/>}></Route>
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
