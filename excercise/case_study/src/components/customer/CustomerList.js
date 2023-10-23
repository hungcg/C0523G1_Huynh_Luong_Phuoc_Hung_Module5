import React from "react";

function customerList() {
    return (
        <>
            <!-- MAIN CONTENT-->
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="title-1 m-b-25 justi fy-content-center d-flex"
                                style="color: #0c0c0c; margin-bottom: 0">
                                Customer List</h2>
                            <a className="btn btn-outline-light">
                                <i className="fas fa-plus"></i>
                            </a>
                            <div className="table-responsive table--no-card m-b-40">
                                <table id="bang" className="table table-borderless table-striped table-earning">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Date of birth</th>
                                        <th>Address</th>
                                        <th>Gender</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                        <td>c</td>
                                        <td>d</td>
                                        <td>e</td>
                                        <td>f</td>
                                        <td>g</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}