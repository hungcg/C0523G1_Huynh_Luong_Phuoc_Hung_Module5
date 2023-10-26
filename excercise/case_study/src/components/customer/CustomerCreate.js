import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as customerService from "../../service/customer/customer_service"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {type} from "@testing-library/user-event/dist/type";

export function CustomerCreate() {
    const navigate = useNavigate();
    const [customerTypes, setCustomerTypes] = useState([])
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        findAll()
    }, [])

    const findAll = async () => {
        let data = await customerService.findAllType();
        setCustomerTypes(data);
    }
    const createCustomer = async (customer) => {
        const data = {...customer, type: JSON.parse(customer.type)};
        console.log("OK")
        const status = await customerService.createCustomer(data)
        console.log(status)
        if (status === 201) {
            navigate("/customer")
            toast.success("Create oke");
        } else {
            toast.error("Create fail")
        }
    }


    return (
        <>
            <Formik initialValues={{
                name: "",
                dateOfBirth: "",
                idCard: "",
                phoneNumber: "",
                email: "",
                type: JSON.stringify({
                    "id": 5,
                    "name": "Diamond"
                }),
                address: ""
            }} onSubmit={(values) => {
                createCustomer(values)
            }} validationSchema={Yup.object({
                name: Yup.string()
                    .required("Not Empty")
                    .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/, "Must Upper the first letter"),
                dateOfBirth: Yup.string()
                    .required("Not Empty"),
                idCard: Yup.string()
                    .required("Not Empty")
                    .matches(/^\d{9}|\d{12}$/, "9 or 12 numbers"),
                phoneNumber: Yup.string()
                    .required("Not Empty")
                    .matches(/^(?:\(\d+\)\+)?(09[01]\d{7}|(84)\+09[01]\d{7})$/, "The phone number must be " +
                        "in the correct format 090xxxxxxx or 091xxxxxxx or (84)+90xxxxxxx or (84)+91xxxxxxx"),
                address: Yup.string()
                    .required("Not Empty"),
                email: Yup.string()
                    .required("Email is required")
                    .matches(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, "Invalid email address"),
            })}
            >
                <Form className="container" style={{marginTop: "120px"}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <Field type="text" name="name" id="name" className="form-control"/>
                                <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">
                                    Phone Number
                                </label>
                                <Field type="text" name="phoneNumber" id="phoneNumber" className="form-control"/>
                                <ErrorMessage name="phoneNumber" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dateOfBirth" className="form-label">
                                    Birthday
                                </label>
                                <Field type="date" name="dateOfBirth" id="dateOfBirth" className="form-control"/>
                                <ErrorMessage name="dateOfBirth" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <div className="form-check">
                                    <Field
                                        type="radio"
                                        name="gender"
                                        id="gender1"
                                        value="Male"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="gender1" className="form-check-label">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <Field
                                        type="radio"
                                        name="gender"
                                        id="gender2"
                                        value="Female"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="gender2" className="form-check-label">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">


                            <div className="mb-3">
                                <label htmlFor="idCard" className="form-label">
                                    ID Card
                                </label>
                                <Field type="text" name="idCard" id="idCard" className="form-control"/>
                                <ErrorMessage name="idCard" component="div" className="text-danger"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <Field type="text" name="email" id="email" className="form-control"/>
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address
                                </label>
                                <Field type="text" name="address" id="address" className="form-control"/>
                                <ErrorMessage name="address" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Customer Type</label>
                                <div className="form-check">
                                    <Field as="select" name="type" className="form-check-input">
                                        {customerTypes.map(type => (
                                            <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                        ))}
                                    </Field>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link to="/customer">
                        <button className="btn btn-primary">
                            Back to customer list
                        </button>
                    </Link>
                </Form>
            </Formik>
        </>
    );
}


