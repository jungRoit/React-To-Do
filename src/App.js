import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Todo from './components/to-do';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  }

  setLocalStorage() {
    window.addEventListener('beforeunload',() => {
      localStorage.clear();
      localStorage.setItem('todos',JSON.stringify(this.state.todos) || null);
    })
  }

  componentDidMount() {
    this.setLocalStorage();
  }

  addTodo = (todo) => {
    if (todo.value !== '') {
      this.setState({
        todos: this.state.todos.concat(todo)
      })
		}
  }

  deleteTodo = (todo) => {
    this.setState({
      todos: this.state.todos.filter(e => e !== todo)
    });
  }

  toggleTaskCompleted = (todo) => {
    let todos = this.state.todos.slice();
    if (todo.isComplete) todo.isComplete = false;
    else todo.isComplete = true;
    let index = todos.indexOf(todo);
    todos[index] = todo;
    this.setState({ todos })
  }

  toggleIsEditEnabled = (todo) => {
    let todos = this.state.todos.slice();
    if (todo.isEditEnabled) todo.isEditEnabled = false;
    else todo.isEditEnabled = true;
    let index = todos.indexOf(todo);
    todos[index] = todo;
    this.setState({ todos })
  }

  editTodo = (id, value) => {
    let newTodos = this.state.todos.filter((item) => {
      if (item.id === id) item.value = value;
      return item;
    })
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div className="App" >
        <Header title="To-do App"/>
        <Form clicked={this.addTodo} />
        {this.state.todos.map((todo, i) =>
          <Todo
            key={todo.id}
            item={todo}
            deleteHandler={this.deleteTodo}
            handleTaskCompleted={this.toggleTaskCompleted}
            editToggle={this.toggleIsEditEnabled}
            handleEdit={this.editTodo}
          />
        )}
      </div>
    );
  }
}

export default App;
