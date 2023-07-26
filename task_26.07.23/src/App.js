import React from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./styles/App.scss";
class App extends React.Component {
  state = {
    firstModalOpen: false,
    secondModalOpen: false,
  };

  toggleFirstModal = () => {
    this.setState((prevState) => ({
      firstModalOpen: !prevState.firstModalOpen,
    }));
  };

  toggleSecondModal = () => {
    this.setState((prevState) => ({
      secondModalOpen: !prevState.secondModalOpen,
    }));
  };

  render() {
    return (
      <div className="app container">
        <Button
          backgroundColor="#1B6B93"
          text="Open first modal"
          onClick={this.toggleFirstModal}
        />
        <Button
          backgroundColor="#FE0000"
          text="Open second modal"
          onClick={this.toggleSecondModal}
        />

        {this.state.firstModalOpen && (
          <Modal
            header="First Modal"
            closeButton={true}
            text="This is the first modal window."
            actions={
              <Button
                backgroundColor="orange"
                text="Close"
                onClick={this.toggleFirstModal}
              />
            }
            onClose={this.toggleFirstModal}
          />
        )}

        {this.state.secondModalOpen && (
          <Modal
            header="Second Modal"
            closeButton={true}
            text="This is the second modal window."
            actions={
              <Button
                backgroundColor="red"
                text="Close"
                onClick={this.toggleSecondModal}
              />
            }
            onClose={this.toggleSecondModal}
          />
        )}
      </div>
    );
  }
}

export default App;
