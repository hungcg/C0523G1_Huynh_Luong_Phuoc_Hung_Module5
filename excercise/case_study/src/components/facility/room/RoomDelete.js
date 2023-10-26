
import * as roomService from "../../../service/room/room_service.js"
import {toast} from "react-toastify";

export function RoomDelete({show, handleClose, selected}) {
    const handleDelete = async (selected) => {

        const res = await roomService.deleteRoom(selected.id)
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
                                <p>Do you want to delete <b>{selected.title}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={handleClose}>Close
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => handleDelete(selected)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


