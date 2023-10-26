
import * as customerService from "../../service/customer/customer_service.js"
import {toast} from "react-toastify";

export function CustomerDelete({show, handleClose, selectedCustomer}) {
    const handleDelete = async (selectedCustomer) => {

        const res = await customerService.deleteCustomer(selectedCustomer.id)
        if (res.status === 200) {
            handleClose()
            toast.success("Delete Success")
        } else {
            toast.error("Delete Fail")
        }
    }
    return (
        <>
            {show && (
                <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <p>Do you want to delete <b>{selectedCustomer.name}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={handleClose}>Close
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => handleDelete(selectedCustomer)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


