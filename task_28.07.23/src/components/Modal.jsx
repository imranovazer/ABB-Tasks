import React, { Component } from "react";
import "../styles/Modal.scss";
import Button from "./Button";

class Modal extends Component {
  render() {
    const { header, closeButton, text, actions, onClose } = this.props;

    return (
      <div className="modalBackground" onClick={onClose}>
        <div className="Modal" onClick={(e) => e.stopPropagation()}>
          {closeButton && (
            <button className="closeButton" onClick={onClose}>
              x
            </button>
          )}
          {header && <h2>{header}</h2>}
          <p>{text}</p>
          <div className="action-container">
            <div>{actions}</div>
            <div>
              <Button
                text={"Cancel"}
                backgroundColor={"red"}
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
