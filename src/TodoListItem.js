import React, { Component } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

class TodoListItem extends Component {

    onCheckboxChanged = (e, data) => {
        this.props.onItemClicked(data.checked);
    }

    onFavoriteChanged = e => {
        this.props.onFavoriteClicked(!this.props.favorite);
    }

    render() {
        return (
            <div className="todo-list-item" style={{display: 'flex'}}>
                <Checkbox checked={this.props.done} onChange={this.onCheckboxChanged}/>
                <span style={{marginLeft: '10px', textDecoration: this.props.done ? 'line-through' : 'initial'}}>{this.props.name}</span>
                <Icon name={this.props.favorite ? 'star' : 'empty star'} color="yellow" style={{marginLeft: 'auto', cursor: 'pointer'}} onClick={this.onFavoriteChanged}/>
            </div>
        );
    }
}

export default TodoListItem;
