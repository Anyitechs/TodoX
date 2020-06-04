import React, { Component } from 'react';
import Todos from './Todos';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Todos key={todo.id} todo={todo} markComplete={this.props.markComplete}
                deleteTodo={this.props.deleteTodo}
            />
        ))
    }
}

TodoItem.propType = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
