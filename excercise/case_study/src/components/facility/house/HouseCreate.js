import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as houseService from "../../../service/house/house_service"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import React from "react";

export function HouseCreate() {
    const navigate = useNavigate();
    const createHouse = async (data) => {
        console.log("OK")
        const status = await houseService.createHouse(data)
        console.log(status)
        if (status === 201) {
            navigate("/house")
            toast.success("Create oke");
        } else {
            toast.error("Create fail")
        }
    }
    const initialValues = {
        title: "",
        size: "",
        img: "",
    }
    const validationSchema = {
        title: Yup.string()
            .required("Required")
            .matches(/^([A-Z][a-z]+)((\s[A-Z][a-z]+)+)*$/, "Should not contain numbers"),
        img: Yup.string()
            .required("Required"),
        size: Yup.number() // Add this
            .required("Required")
            .min(0, "Must be >= 0"),
    }
    const formCenter = {
        marginTop: '120px',  // Add margin-top
    }
    return (
        <div className="container mt-5">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    createHouse(values);
                }}
                validationSchema={Yup.object(validationSchema)}
            >
                <Form className="container" style={formCenter}>
                    <div>
                        <h2>Create House</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">
                                   House name
                                </label>
                                <Field type="text" name="title" id="title" className="form-control"/>
                                <ErrorMessage name="title" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="deposit" className="form-label">
                                    Image
                                </label>
                                <Field type="text" name="img" id="img" className="form-control"/>
                                <ErrorMessage name="img" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="total" className="form-label">
                                   Size
                                </label>
                                <Field type="number" name="size" id="size" className="form-control"/>
                                <ErrorMessage name="size" component="div" className="text-danger"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link to="/house">
                        <button className="btn btn-primary">
                            Back to house list
                        </button>
                    </Link>
                </Form>
            </Formik>
        </div>
    );
}