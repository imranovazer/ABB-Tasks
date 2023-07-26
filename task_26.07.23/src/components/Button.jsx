import React from "react";

class Button extends React.Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;

    return (
      <button
        className="button"
        style={{ backgroundColor: backgroundColor || "grey" }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
