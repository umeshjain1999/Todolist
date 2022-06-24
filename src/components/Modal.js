import React from "react";
import { ReactComponent as GarbageIcon } from "./icons/garbage.svg";
const Modal = ({ clearAllTodo, openModal }) => {
  return (
    <div onClick={() => openModal()} className="modal-wrap">
      <div
        className="modal"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <div className="garbage-icon-wrap">
          <GarbageIcon />
        </div>
        <div>Are you sure you want to delete all the tasks ? </div>
        <div className="modal-btn-wrap">
          <button className="fail" onClick={() => openModal()}>
            nooo
          </button>
          <button className="success" onClick={() => clearAllTodo()}>
            yaaa!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
