import {useEffect, useState} from "react";
import * as service from "../service/Service";
import {Link} from "react-router-dom";
import {Delete} from "./Delete";
import {edit} from "../service/Service";

export default function List() {
    const [product, setProduct] = useState([])
    const [name, setName] = useState("")
    const [type, setType] = useState("")

    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState();

    const [modalStatus, setModalStatus] = useState(false);
    const [selected, setSelected] = useState()

    const findAll = async () => {
        let data = await service.findAll(name, type, page)
        await setProduct(data.data)
        console.log(data)
        setMaxPage(Math.ceil(data.headers["x-total-count"] / 3));
    }

    const deleteModal = (product) => {
        setSelected(product)
        setModalStatus(true);
        console.log(product)
    }
    const closeModal = async () => {
        setSelected(null);
        setModalStatus(false);
    }

    useEffect(() => {
        findAll();
    }, [name, type, page,modalStatus])


    if (!product) return null;

    return (
        <>
            <nav className="navbar bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light ">Tui Đi Thi</a>
                    <form className="d-flex" role="search">
                        <input onChange={(values) => setName(values.target.value)} className="form-control me-2"
                               type="search" placeholder="Search by name"/>
                        <div className="dropdown" style={{margin: "0 10px"}}>
                            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                               Type
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item" onClick={(values) => setType("Food")}>Food</li>
                                <li className="dropdown-item" onClick={(values) => setType("Drink")}>Drink</li>
                                <li className="dropdown-item" onClick={(values) => setType("Alcohol")}>Alcohol</li>
                            </ul>
                        </div>
                        <button className="btn btn-success" type="submit">Reset</button>
                    </form>
                </div>
            </nav>
            <div>
                <div className="d-flex mt-2 mb-2">
                    <h1 style={{position: "relative", left: "700px"}}>List</h1>
                    <Link to="/create">
                        <button style={{position: "relative", left: "1258px", top: "7px", height: "40px"}}
                                className="btn btn-outline-secondary" type="submit">New Create
                        </button>
                    </Link>
                </div>

                <table className="container table table-light table-hover table-striped">
                    <thead className="table-success">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {product.map((product, index) =>
                        <tr key={product.id}>
                            <td>{(page - 1) * 3 + index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.type.name}</td>
                            <td>{product.price}</td>
                            <td className="col-md-1">
                                <Link to={`/edit/${product.id}`}>
                                    <button className="delete-button btn btn-outline-success"
                                            onClick={() => edit(product)}>Edit
                                    </button>
                                </Link>
                            </td>
                            <td className="col-md-1">
                                <button className="delete-button btn btn-outline-danger"
                                        onClick={() => deleteModal(product)}>Delete
                                </button>
                            </td>


                        </tr>
                    )
                    }
                    </tbody>
                </table>


                    <div className="col-md 12" style={{position: "relative", margin: "0 650px", top: "7px"}}>
                        {
                            maxPage ?
                                <div className="page d-flex">
                                    {page != 1 && <button className="prev btn btn-outline-secondary"
                                                          onClick={() => {
                                                              setPage(page - 1)
                                                          }}>Previous</button>}
                                    <div className="pageDisplay"
                                         style={{margin: "7px 10px"}}>{page + "/" + maxPage}</div>
                                    {page != maxPage && <button className="next btn btn-outline-secondary"
                                                                onClick={() => {
                                                                    setPage(page + 1)
                                                                }}>Next</button>}
                                </div> : <h3>Not found!</h3>
                        }
                    </div>
            </div>
            <Delete
                show={modalStatus}
                handleClose={closeModal}
                selected={selected}
            ></Delete>
        </>
    );
}