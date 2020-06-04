import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todos extends Component {
    getStyle = () => {
        if (this.props.todo.completed) {
            return {
                color: 'green',
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div>
               <p style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)
                    } />
                   { title }
                   <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                   </p>
            </div>
        )
    }
}

Todos.propType = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    marginLeft: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}