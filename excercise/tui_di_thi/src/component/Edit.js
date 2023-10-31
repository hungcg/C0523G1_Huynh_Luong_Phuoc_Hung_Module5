import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as service from"../service/Service"

export function Edit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [type, setType] = useState();
    const [product, setProduct] = useState()
    const findById = async () => {
        const res = await service.findById(id)
        setProduct(res)
    }
    const findAllType = async () =>{
        const res = await  service.findAllType()
        setType(res)
    }

    const edit = async (data) => {
        console.log("OK")
        const status = await service.edit(data)
        console.log(status)
        if (status.status === 200) {
            navigate("/")
            toast.success("Edit oke");
        } else {
            toast.error("Edit fail")
        }
    }
    useEffect(() => {
        findById()
        findAllType()
    }, [id])



    if (!product) {
        return null;
    }

    const initValues = {
        ...product
    }

    const validationSchema = {
        name: Yup.string()
            .required("Not Empty"),
        price: Yup.string()
            .required("Not Empty")
    }

    if (!type) {
        return null;
    } else {


        return (
            <>
                <Formik
                    initialValues={initValues}
                    onSubmit={(values) => edit(values)}
                    validationSchema={Yup.object(validationSchema)}>
                    <Form className="container">
                        <div>
                            <center className="mt-5"><h2 className="mb-5">Edit</h2></center>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <Field type="text" className="form-control" name="name"/>
                                <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="price" className="form-label">Price</label>
                                <Field type="text" className="form-control" name="price"/>
                                <ErrorMessage name="price" component="div" className="text-danger"/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="type" className="form-label">Type</label>
                                <Field as="select" className="form-control" name="type">
                                    {type.map(item => (
                                        <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="type" component="div" className="text-danger"/>
                            </div>
                            <div style={{position: "relative", left: "565px", top: "7px", height: "40px"}}>
                                <button type="submit" className="btn btn-success">
                                    Submit
                                </button>
                                <Link to="/">
                                    <button className="btn btn-warning " style={{position: "relative", left: "5px"}}>
                                        Back to list
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </>
        )
    }
}

