import React, { Component } from 'react';

class TodoListItem extends Component {

    onCheckboxChanged = e => {
        this.props.onItemClicked(e.target.checked);
    }

    render() {
        return (
            <div className="todo-list-item">
                <input type="checkbox" checked={this.props.done} onChange={this.onCheckboxChanged}/>
                <span style={{textDecoration: this.props.done ? 'line-through' : 'initial'}}>{this.props.name}</span>
            </div>
        );
    }
}

export default TodoListItem;
