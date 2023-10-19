import React from "react";


function header() {
    return (
        // <>
        //     <nav  className="navbar ">
        //     <span id="text" className="container">
        //         <a className="navbar-brand" href="#">
        //             <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="Bootstrap"
        //                  height="70"/>
        //         </a>
        //         <a>Facilities</a>
        //         <a> Customer</a>
        //         <a> Contract</a>
        //     </span>
        //     </nav>
        //
        // </>
        <>
            <nav>

                <div id="header" className="container row">

                    <div className="col-lg-8 col-md-6">
                        <a className="navbar-brand" href="#">
                            <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="Bootstrap"
                                 height="70"/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="row right-header">
                            <div className="nav-item col-lg-4"><a>Facilities</a></div>
                            <div className="nav-item col-lg-4"><a> Customer</a></div>
                            <div className="nav-item col-lg-4"><a> Contract</a></div>
                        </div>
                    </div>

                </div>
            </nav>
        </>


    );
}

export default header