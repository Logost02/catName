import React from "react";
import ReactDOM from "react-dom";
import NomChat from "./NomChat";
import NomChatForm from "./NomChatForm";

import "./styles.css";

class App extends React.Component {
  state = {
    nomsChat: [
      { id: 1, nom: "Monsieur Moustache" },
      { id: 2, nom: "Lasagne" },
      { id: 3, nom: "Pumking" }
    ]
  };

  handleDelete = id => {
    const nomsChat = [...this.state.nomsChat];
    const index = nomsChat.findIndex(nomChat => nomChat.id === id);

    nomsChat.splice(index, 1);

    this.setState({ nomsChat });
  };

  handleAdd = nomChat => {
    const nomsChat = [...this.state.nomsChat];
    nomsChat.push(nomChat);

    this.setState({ nomsChat });
  };

  render() {
    const title = "Liste des noms pour le chat";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.nomsChat.map(nomChat => (
            <NomChat
              key={nomChat.id}
              details={nomChat}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <NomChatForm onNomChatAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
