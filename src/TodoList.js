import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import { Input } from 'semantic-ui-react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: 'Aufräumen',
                    done: false,
                    favorite: false
                },
                {
                    name: 'Kochen',
                    done: false,
                    favorite: false
                },
                {
                    name: 'Einkaufen',
                    done: false,
                    favorite: false
                },
                {
                    name: 'Paket abholen',
                    done: false,
                    favorite: false
                }
            ]
        }
    }

    onItemClicked = (idx, done) => {
        const newItems = [].concat(this.state.items);
        newItems[idx].done = done;
        this.setState({items: newItems});
    }

    onFavoriteClicked = (idx, favorite) => {
        const newItems = [].concat(this.state.items);
        newItems[idx].favorite = favorite;
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
                <Input type="text" fluid placeholder="Einen Eintrag hinzufügen" icon="plus" iconPosition="left" onKeyPress={this.onEnter}/>
                {
                    this.state.items
                    .sort((itemA, itemB) => itemB.favorite - itemA.favorite)
                    .map((item, idx) => <TodoListItem key={idx} name={item.name} done={item.done} onItemClicked={this.onItemClicked.bind(this, idx)} favorite={item.favorite} onFavoriteClicked={this.onFavoriteClicked.bind(this, idx)}/>)
                }
            </div>
        );
    }
}

export default TodoList;
