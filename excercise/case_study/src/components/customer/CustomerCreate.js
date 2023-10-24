import {Link} from "react-router-dom";

export function CustomerCreate() {
    const handleSubmit = () => {

    }

    return (
        <Formik initialValues={
            {}

        }
                onSubmit={handleSubmit}
        >

            <div className="row">
                <div className="col-lg-3 col-md-2">

                </div>

                <div className="col-lg-6 col-md-8 form">
                    <div className="row">
                        <div className="col-sm-4 form-create-villa">
                            <p></p>
                        </div>

                        <div className="col-sm-8 p-0">
                            <form>
                                <div className="form-header bg-dark">
                                    <h2 className="text-light fw-bold ms-3">Thêm mới biệt thự</h2>
                                </div>

                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Tên dịch vụ :</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Diện tích :</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Chi phí cho thuê
                                            :</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Tiêu chuẩn phòng
                                            :</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Mô tả tiện nghi
                                            :</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Diện tích hồ bơi
                                            :</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-3 col-form-label">Số tầng :</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-footer bg-dark p-3">
                                    <div>
                                        <Link to="/villa" className="btn btn-primary me-5">Quay lại</Link>
                                        <button type="submit" className="btn1 btn-secondary">Thêm</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>

    );
}


