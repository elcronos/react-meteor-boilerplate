import React from 'react';
import ReactDOM from 'react-dom';

import {To_dos} from '/lib/collections.js';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form id="todoForm" onSubmit={this.addTodo}>
                <div className="input-group">
                    <div className="input-group-btn">
                        <input ref="todoText" type="text" className="form-control todo-text" placeholder="add new to do..."/>
                        <input type="submit" className="btn btn-primary" value="Add"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddTodo
