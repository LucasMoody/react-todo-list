import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VANTAiO Todo Liste</h1>
        </header>
        <div className="App-content">
            <TodoList/>
        </div>
      </div>
    );
  }
}

export default App;
