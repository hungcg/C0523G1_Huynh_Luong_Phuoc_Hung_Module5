import React from "react";

function contractList() {
    return (
        <>
            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="title-1 m-b-25 justi fy-content-center d-flex"
                                style="color: #0c0c0c; margin-bottom: 0">
                                Customer List</h2>
                            <a class="btn btn-outline-light" href="/cam-ket-them-moi.jsp" style="color: black">
                                <i class="fas fa-plus"></i>
                            </a>
                            <div class="table-responsive table--no-card m-b-40">
                                <table id="bang" class="table table-borderless table-striped table-earning">
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