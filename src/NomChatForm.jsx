import React, { Component } from "react";

class NomChatForm extends Component {
  state = {
    nouveauNomChat: ""
  };

  handleChange = event => {
    this.setState({ nouveauNomChat: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauNomChat;

    this.props.onNomChatAdd({ id, nom });

    this.setState({ nouveauNomChat: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauNomChat}
          onChange={this.handleChange}
          type="text"
          placeholder="New nom pour le chat"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default NomChatForm;
