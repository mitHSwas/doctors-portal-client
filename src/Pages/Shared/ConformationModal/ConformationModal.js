import React from 'react';

const ConformationModal = ({ title, message, closeModal, modalData, successAction, successButtonName }) => {
    return (
        <div>
            <input type="checkbox" id="conformation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="conformation-modal" onClick={() => successAction(modalData)} className="btn btn-primary">{successButtonName}</label>
                        <button className='btn btn-outline' onClick={closeModal} >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;