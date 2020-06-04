import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
     todos: [],
     loading: true
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .then(res => this.setState({ todos: res.data}))
      .then(
        this.setState({
          loading: false
        })
      )
        .catch(error => console.log(error));
  }

  //Toggle Todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  //Delete Todo
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => {
          return todo.id !== id
        })]
      }))
  }

  //Submit Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [res.data, ...this.state.todos]
      }))
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <p>Loading todos.....</p>
      )
    } else {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
          <img src={logo} className="App-logo" alt="logo" />
          <AddTodo addTodo={this.addTodo} />
          <TodoItem todos={this.state.todos} markComplete={this.markComplete}
            deleteTodo={this.deleteTodo} loading={this.state.loading}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
      </div>
    </div>
    </Router>
  );
  }
}
}

export default App;
