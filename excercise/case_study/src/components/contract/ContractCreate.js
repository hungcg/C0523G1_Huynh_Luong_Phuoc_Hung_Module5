
import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as contractService from "../../service/contract/contract_service"
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup"


function ContractCreate() {
    const navigate = useNavigate();
    const createContract = async (data) => {
        const status = await contractService.createContract(data)
        if (status === 201) {
            navigate("/contract")
            toast.success("Created successfully")
        } else {
            toast.error("Create fail")
        }
    }
    const formCenter = {
        marginTop: '100px',  // Add margin-top
    }
    return (
        <>
            <Formik initialValues={{
                code: "",
                startDate: "",
                finishDate: "",
                deposit: 0,
                total: 0,
            }} onSubmit={(values) => {
                createContract(values)
            }} validationSchema={Yup.object({
                code: Yup.string()
                    .required("Not Empty"),
                startDate: Yup.string()
                    .required("Not Empty"),
                finishDate: Yup.string()
                    .required("Not Empty"),
                total: Yup.number()
                    .required("Not Empty")
                    .min(1, "Must be > 0"),
                deposit: Yup.number()
                    .required("Not Empty")
                    .min(1, "Must be > 0")
            })}
            >
                <Form className="container" style={formCenter}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">
                                    Contract Number
                                </label>
                                <Field type="text" name="code" id="code" className="form-control"/>
                                <ErrorMessage name="code" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="startDate" className="form-label">
                                    Start Day
                                </label>
                                <Field type="date" name="startDate" id="startDate" className="form-control"/>
                                <ErrorMessage name="startDate" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="finishDate" className="form-label">
                                    End Day
                                </label>
                                <Field type="date" name="finishDate" id="finishDate" className="form-control"/>
                                <ErrorMessage name="finishDate" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="deposit" className="form-label">
                                    Deposit Amount
                                </label>
                                <Field type="number" name="deposit" id="deposit" className="form-control"/>
                                <ErrorMessage name="deposit" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="total" className="form-label">
                                    Total Payment
                                </label>
                                <Field type="number" name="total" id="total" className="form-control"/>
                                <ErrorMessage name="total" component="div" className="text-danger"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link to="/contract">
                        <button className="btn btn-primary">
                            Back to customer list
                        </button>
                    </Link>
                </Form>
            </Formik>
        </>
    );
}

export default ContractCreate;