import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Aufräumen',
                'Kochen',
                'Einkaufen',
                'Paket abholen'
            ]
        }
    }

    onEnter = e => {
        if(e.key === 'Enter') {
            this.setState({items: this.state.items.concat(e.target.value)});
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="todo-list">
                <input type="text" style={{width: '100%'}} onKeyPress={this.onEnter}/>
                {this.state.items.map((item, idx) => <TodoListItem key={idx} name={item}/>)}
            </div>
        );
    }
}

export default TodoList;
