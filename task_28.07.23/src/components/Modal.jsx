import React from "react";
import "../styles/Modal.scss";
class Modal extends React.Component {
  render() {
    const { header, closeButton, text, actions } = this.props;

    return (
      <div className="modalBackground" onClick={this.props.onClose}>
        <div className="Modal" onClick={(e) => e.stopPropagation()}>
          {closeButton && (
            <button className="closeButton" onClick={this.props.onClose}>
              x
            </button>
          )}
          {header && <h2>{header}</h2>}
          <p>{text}</p>
          <div>{actions}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
