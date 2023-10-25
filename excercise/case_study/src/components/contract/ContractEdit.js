import {Link, useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as contractService from "../../service/contract/contract_service"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import React, {useEffect, useState} from "react";


export function ContractEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [contract, setContract] = useState()
    const findContractById = async () => {
        const res = await contractService.findContractById(id)
        setContract(res)
    }

    const editContract = async (data) => {
        console.log("OK")
        data.deposit = +data.deposit;
        data.total = +data.total;
        const status = await contractService.editContract(data)
        console.log(status)
        if (status.status === 200) {
            navigate("/contract")
            toast.success("Edit oke");
        } else {
            toast.error("Edit fail")
        }
    }
    useEffect(() => {
        findContractById()
    }, [id])

    if (!contract) {
        return null;
    }


    const initialValues = {
        ...contract
    }
    console.log(contract)

    const formCenter = {
        marginTop: '100px',  // Add margin-top
    }

    return (
        <>
            <Formik initialValues={
                contract
            } onSubmit={(values) => {
                editContract(values)
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
            })}>

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
                                <Field type="text" name="deposit" id="deposit" className="form-control"/>
                                <ErrorMessage name="deposit" component="div" className="text-danger"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="total" className="form-label">
                                    Total Payment
                                </label>
                                <Field type="text" name="total" id="total" className="form-control"/>
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


