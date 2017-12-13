import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    return (
        <div className="todo-list-item">
            {this.props.name}
        </div>
    );
  }
}

export default TodoListItem;
