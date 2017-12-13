import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VANTAiO Todo Liste</h1>
        </header>
        <div className="App-content">
            <div className="todo-list">
                <div className="todo-list-item">
                    Aufräumen
                </div>
                <div className="todo-list-item">
                    Kochen
                </div>
                <div className="todo-list-item">
                    Einkaufen
                </div>
                <div className="todo-list-item">
                    Paket abholen
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
