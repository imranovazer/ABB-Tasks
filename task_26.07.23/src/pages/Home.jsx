import React, { Component } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      header: "",
      text: "",
      actions: null,
    };
  }

  handleButtonClick = (header, text, actions) => {
    this.setState({ modal: !this.state.modal, header, text, actions });
  };

  render() {
    return (
      <div className="container app">
        <h1>Home page</h1>

        <div className="button-container">
          <Button
            text="Click me"
            backgroundColor="red"
            onClick={() =>
              this.handleButtonClick(
                "Red button clicked",
                "This is the text for first modal",
                <Button text="Red one" backgroundColor="red" />
              )
            }
          />
          <Button
            text="Click me"
            backgroundColor="blue"
            onClick={() =>
              this.handleButtonClick(
                "Blue button clicked",
                "This is the text for second modal",
                <Button text="Blue one" backgroundColor="blue" />
              )
            }
          />
        </div>
        {this.state.modal && (
          <Modal
            text={this.state.text}
            closeButton
            onClose={() => this.setState({ modal: !this.state.modal })}
            header={this.state.header}
            actions={this.state.actions}
          />
        )}
      </div>
    );
  }
}

export default Home;
