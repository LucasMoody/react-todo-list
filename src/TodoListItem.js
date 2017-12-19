import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';

class TodoListItem extends Component {

    onCheckboxChanged = (e, data) => {
        this.props.onItemClicked(data.checked);
    }

    render() {
        return (
            <div className="todo-list-item" style={{display: 'flex'}}>
                <Checkbox checked={this.props.done} onChange={this.onCheckboxChanged}/>
                <span style={{marginLeft: '10px', textDecoration: this.props.done ? 'line-through' : 'initial'}}>{this.props.name}</span>
            </div>
        );
    }
}

export default TodoListItem;
