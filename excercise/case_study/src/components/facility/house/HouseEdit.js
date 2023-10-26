import * as customerService from "../../../service/room/room_service"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as houseService from "../../../service/house/house_service"
import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {editHouse} from "../../../service/house/house_service";

export function HouseEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [house, setHouse] = useState()
    const findHouseById = async () => {
        const res = await houseService.findHouseById(id)
        setHouse(res)
    }

    const editRoom = async (data) => {
        console.log("OK")
        const status = await houseService.editHouse(data)
        console.log(status)
        if (status.status === 200) {
            navigate("/house")
            toast.success("Edit oke");
        } else {
            toast.error("Edit fail")
        }
    }
    useEffect(() => {
        findHouseById()
    }, [id])

    if (!house) {
        return null;
    }

    const initialValues = {
        ...house
    }

    const formCenter = {
        marginTop: '120px',  // Add margin-top
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


    return (
        <div className="container mt-5">
            <Formik initialValues={
                initialValues
            } onSubmit={(values) => {
                editHouse(values);
            }}
                    validationSchema={Yup.object(validationSchema)}
            >
                <Form className="container" style={formCenter}>
                    <div>
                        <h2>Edit House</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">
                                    Room name
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
                            Back to customer list
                        </button>
                    </Link>
                </Form>
            </Formik>
        </div>
    )
}

