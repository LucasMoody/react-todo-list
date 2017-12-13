import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
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
    );
  }
}

export default TodoList;
