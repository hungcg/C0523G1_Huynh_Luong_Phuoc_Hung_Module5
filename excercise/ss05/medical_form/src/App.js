import React, {useState} from "react";
import {Formik} from "formik";
import "./App.css";

export default function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        const {name, value} = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.name) {
            errors.name = "Required";
        }
        if (!form.idCard) {
            errors.idCard = "Required";
        }
        if (!form.age) {
            errors.age = "Required";
        }
        if (!form.gender) {
            errors.gender = "Required";
        }
        if (!form.country) {
            errors.country = "Required";
        }
        if (!form.company) {
            errors.company = "Required";
        }
        if (!form.position) {
            errors.position = "Required";
        }
        if (!form.medicalCard) {
            errors.medicalCard = "Required";
        }
        if (!form.city) {
            errors.city = "Required";
        }
        if (!form.district) {
            errors.district = "Required";
        }
        if (!form.village) {
            errors.village = "Required";
        }
        if (!form.address) {
            errors.address = "Required";
        }
        if (!form.phone) {
            errors.phone = "Required";
        }
        if (!form.check1) {
            errors.check1 = "Required";
        }
        if (!form.check2) {
            errors.check2 = "Required";
        } if (!form.check3) {
            errors.check3 = "Required";
        }
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
            console.log("code");
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }

    return (
        <div>
           <center><h1>Tờ khai y tế</h1></center>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({errors, handleSubmit}) => (
                   <center> <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Họ và tên</label>
                            <input type="name" name="name" value={form.name || ""} onChange={handleChange}/>
                            <p className="error">{errors.name}</p>
                        </div>
                        <div className={`custom-input ${errors.idCard ? "custom-input-error" : ""}`}>
                            <label>Số hộ chiếu</label>
                            <input type="text" name="idCard" value={form.idCard || ""} onChange={handleChange}/>
                            <p className="error">{errors.idCard}</p>
                        </div>
                        <div className={`custom-input ${errors.age ? "custom-input-error" : ""}`}>
                            <label>Năm sinh</label>
                            <input type="text" name="age" value={form.age || ""} onChange={handleChange}/>
                            <p className="error">{errors.age}</p>
                        </div>
                        <div className={`custom-input ${errors.gender ? "custom-input-error" : ""}`}>
                            <label>Giới tính </label>
                            <input type="radio" name="gender" value={form.gender || ""} onChange={handleChange}/>Nam
                            <input type="radio" name="gender" value={form.gender || ""} onChange={handleChange}/>Nữ
                            <p className="error">{errors.gender}</p>
                        </div>
                        <div className={`custom-input ${errors.country ? "custom-input-error" : ""}`}>
                            <label>Quốc tịch</label>
                            <input type="name" name="country" value={form.country || ""} onChange={handleChange}/>
                            <p className="error">{errors.country}</p>
                        </div>
                        <div className={`custom-input ${errors.company ? "custom-input-error" : ""}`}>
                            <label>Công ty làm việc</label>
                            <input type="text" name="company" value={form.company || ""} onChange={handleChange}/>
                            <p className="error">{errors.company}</p>
                        </div>
                        <div className={`custom-input ${errors.position ? "custom-input-error" : ""}`}>
                            <label>Bộ phận</label>
                            <input type="name" name="position" value={form.position || ""} onChange={handleChange}/>
                            <p className="error">{errors.position}</p>
                        </div>
                        <div className={`custom-input ${errors.medicalCard ? "custom-input-error" : ""}`}>
                            <label>Có thẻ bảo hiểm y tế</label>
                            <input type="checkbox" name="medicalCard" value={form.medicalCard || ""}
                                   onChange={handleChange}/>
                            <p className="error">{errors.medicalCard}</p>
                        </div>
                        <h3> Địa chỉ liên lạc tại Việt Nam</h3>

                        <div className={`custom-input ${errors.city ? "custom-input-error" : ""}`}>
                            <label>Tỉnh thành</label>
                            <input type="name" name="city" value={form.city || ""} onChange={handleChange}/>
                            <p className="error">{errors.city}</p>
                        </div>
                        <div className={`custom-input ${errors.district ? "custom-input-error" : ""}`}>
                            <label>Quận huyện</label>
                            <input type="text" name="district" value={form.district || ""} onChange={handleChange}/>
                            <p className="error">{errors.district}</p>
                        </div>
                        <div className={`custom-input ${errors.village ? "custom-input-error" : ""}`}>
                            <label>Phường xã</label>
                            <input type="name" name="village" value={form.village || ""} onChange={handleChange}/>
                            <p className="error">{errors.village}</p>
                        </div>
                        <div className={`custom-input ${errors.address ? "custom-input-error" : ""}`}>
                            <label>Địa chỉ</label>
                            <input type="name" name="address" value={form.address || ""} onChange={handleChange}/>
                            <p className="error">{errors.address}</p>
                        </div>
                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Điện thoại</label>
                            <input type="name" name="phone" value={form.phone || ""} onChange={handleChange}/>
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input type="name" name="email" value={form.email || ""} onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>
                        <div className={`custom-input ${errors.check1 ? "custom-input-error" : ""}`}>
                            <h3>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia nào không</h3>
                            <textarea name="check1" value={form.check1 || ""} onChange={handleChange}/>
                            <p className="error">{errors.check1}</p>
                        </div>
                        <div className={`custom-input ${errors.check2 ? "custom-input-error" : ""}`}>
                            <h3>Trong vòng 14 ngày qua, Anh/Chị có xuất hiện triệu chứng nào không?</h3>
                            <input type="checkbox" name="check2" value={form.check2 || ""} onChange={handleChange}/>Sốt
                            <input type="checkbox" name="check2" value={form.check2 || ""} onChange={handleChange}/>Ho
                            <input type="checkbox" name="check2" value={form.check2 || ""} onChange={handleChange}/>Khó
                            thở
                            <input type="checkbox" name="check2" value={form.check2 || ""} onChange={handleChange}/>Viêm
                            phổi
                            <input type="checkbox" name="check2" value={form.check2 || ""} onChange={handleChange}/>Đau
                            họng
                            <input type="checkbox" name="check2" value={form.check2 || ""} onChange={handleChange}/>Mệt
                            mỏi
                            <p className="error">{errors.check2}</p>
                        </div>
                        <div className={`custom-input ${errors.check3 ? "custom-input-error" : ""}`}>
                            <h3>Trong vòng 14 ngày qua, Anh/Chị có xuất hiện triệu chứng nào không?</h3>
                            <input type="checkbox" name="check3" value={form.check3 || ""} onChange={handleChange}/>Người
                            bệnh hoặc nghi ngờ.mắc bệnh COVID-19<br/>
                            <input type="checkbox" name="check3" value={form.check3 || ""} onChange={handleChange}/>Người
                            từ nước ngoài có.mắc bệnh COVID-19<br/>
                            <input type="checkbox" name="check3" value={form.check3 || ""} onChange={handleChange}/>Người
                            có biểu hiện(sốt,ho,khó thở,viêm phổi<br/>
                            <p className="error">{errors.check2}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                   </center>
                )}
            </Formik>
        </div>
    );
}