function footer(){
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                </a>
                <span className="mb-3 mb-md-0 text-muted">© 2023 Hưng Haha</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted">
                    <svg className="bi" width="24" height="24"><i className="fa-brands fa-facebook fa-bounce fa-2xl"
                                                                  style={{color: "#111212",margin: "10px 35px -6px -15px"}}></i>
                    </svg>
                </a></li>
                <li className="ms-3"><a className="text-muted" href="#">
                    <svg className="bi" width="24" height="24"><i className="fa-brands fa-instagram fa-bounce fa-2xl"
                                                                  style={{color: "#0F0F10",margin: "10px 5px -6px -39px"}}></i>
                    </svg>
                </a></li>
                <li className="ms-3"><a className="text-muted" href="#">
                    <svg className="bi" width="24" height="24"><i className="fa-brands fa-slack fa-bounce fa-2xl"
                                                                  style={{color: "#0C0D0E",margin: "10px 35px -6px -15px"}}></i>
                    </svg>
                </a></li>
            </ul>
        </footer>
    )
}
export default footer