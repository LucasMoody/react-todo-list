import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    return (
        <div className="todo-list">
            <TodoListItem name="Aufräumen" />
            <TodoListItem name="Kochen" />
            <TodoListItem name="Einkaufen" />
            <TodoListItem name="Paket abholen" />
        </div>
    );
  }
}

export default TodoList;
