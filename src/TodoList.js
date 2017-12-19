import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: 'Aufräumen',
                    done: false
                },
                {
                    name: 'Kochen',
                    done: false
                },
                {
                    name: 'Einkaufen',
                    done: false
                },
                {
                    name: 'Paket abholen',
                    done: false
                }
            ]
        }
    }

    onItemClicked = (idx, done) => {
        const newItems = [].concat(this.state.items);
        newItems[idx].done = done;
        this.setState({items: newItems});
    }

    onEnter = e => {
        if(e.key === 'Enter') {
            this.setState({
                items: this.state.items.concat({
                    name: e.target.value,
                    done: false
                }
            )});
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="todo-list">
                <input type="text" style={{width: '100%'}} onKeyPress={this.onEnter}/>
                {this.state.items.map((item, idx) => <TodoListItem key={idx} name={item.name} done={item.done} onItemClicked={this.onItemClicked.bind(this, idx)}/>)}
            </div>
        );
    }
}

export default TodoList;
