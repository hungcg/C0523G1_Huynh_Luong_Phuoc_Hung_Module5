import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import * as service from "../service/Service"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export default function Create() {
    const navigate = useNavigate();
    const [type, setType] = useState();

    useEffect(() => {
        findAll();
    }, [])

    const findAll = async () => {
        let data = await service.findAllType()
        await setType(data)
    }
    const create = async (product) => {
        const data = {...product, type: JSON.parse(product.type)}
        const status = await service.create(data)
        if (status === 201) {
            toast.success("Create Successfully");
            navigate("/")
        } else {
            toast.error("Create Fail")
        }
    }
    const initValues = {
        name: "",
        price: "",
        type: JSON.stringify(
            {
                id: 1,
                name: "Food"
            },
        )
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
                    onSubmit={(values) => create(values)}
                    validationSchema={Yup.object(validationSchema)}>
                    <Form className="container">
                        <div>
                            <center className="mt-5"><h2 className="mb-5">Create</h2></center>
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
                                <button  type="submit" className="btn btn-success">
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
