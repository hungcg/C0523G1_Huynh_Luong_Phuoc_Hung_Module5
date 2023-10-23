import React from "react";
import {Link} from "react-router-dom";


function header() {
    return (
        <>
            <nav className="navbar fixed-top">
            <span id="text" className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="Bootstrap"
                         height="70"/>
                </a>
                <div id="gridbutton">
                    <div></div>
                    <button className="button" data-text="Awesome">
                        <Link to="/facility" className="nav-link">
                        <span className="actual-text">&nbsp;Facilities&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Facilities&nbsp;</span>
                        </Link>
                    </button>
                    <button className="button" data-text="Awesome">
                         <Link to="/customer" className="nav-link">
                        <span className="actual-text">&nbsp;Customer&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Customer&nbsp;</span>
                              </Link>
                    </button>

                    <button className="button" data-text="Awesome">
                        <Link to="/contract" className="nav-link">
                        <span className="actual-text">&nbsp;Contract&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Contract&nbsp;</span>
                         </Link>
                    </button>
                </div>
            </span>
            </nav>
        </>
    );
}

export default header