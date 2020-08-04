import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = props => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.show
            ? "translateX(-50%) translateY(-50%)"
            : "translateX(-50%) translateY(-100vh)",
          opacity: props.show ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
