import React from "react";


function header() {
    return (
        <>
            <nav className="navbar ">
            <span id="text" className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="Bootstrap"
                         height="70"/>
                </a>
                <div id="gridbutton">
                    <div></div>
                    <div id="box">Facilities</div>
                    <div id="box">Customer</div>
                    <div id="box">Contract</div>
                </div>
            </span>
            </nav>
        </>


    );
}

export default header