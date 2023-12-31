// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';

import * as libraryService from "../service/LibraryService.jsx"
import {toast} from "react-toastify";

function LibraryDelete({show, handleClose, selectedBook}) {
    const handleDelete = async (selectedBook) => {

        const res = await libraryService.deleteBook(selectedBook.id)
        if (res.status === 200) {
            toast("Delete Okay")
            handleClose()
            window.location.reload(true)
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
                                <p>Do you want to delete <b>{selectedBook.title}</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                        onClick={handleClose}>Close
                                </button>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => handleDelete(selectedBook)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default LibraryDelete;
