import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import Search from './components/search';
import Header from './components/header';
import Container from './components/container';

/** 
 * .App class includes the main app logic and handles all the functions including add, edit ,delete ,search sort.
 *  
 */
class App extends Component {
  /** 
	 * 
	 * @param {*} props 
	 */
  constructor(props) {
    super(props);
    this.state = {
      todos: this.getTodosArray(),
      isSearchEnabled: false,
      searchQuery: '',
      sortBy: '0'
    };
  }

  /**
   * Function to get localstorage data and return empty array if null.
   */
  getTodosArray = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  /**
	 * .Store todo item in local storage.
	 */
  setLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(this.state.todos) || null);
  }

  /**
	 * 
	 */
  componentDidMount() {
    window.addEventListener('beforeunload', this.setLocalStorage);
  }

  /**
	 * .Function to add new todo item.
   * 
   * @param {object} todo
	 */
  addTodo = (todo) => {
    if (todo.value !== '') {
      this.setState({
        todos: this.state.todos.concat(todo)
      });
    }
  }

  /**
 * Function to set searchQuery value.
 * 
 * @param {string} val
 */
  search = (val) => {
    this.setState({ searchQuery: val });
  }

  /**
 * Function to delete todo item.
 * 
 * @param {object} todo
 */
  deleteTodo = (todo) => {
    const result = this.state.todos.filter(item => item !== todo);

    this.setState({ todos: result });
  }

  /**
 * 
 */
  toggleSearch = () => {
    if (this.state.isSearchEnabled) {
      this.setState({ isSearchEnabled: false });
    } else {
      this.setState({ isSearchEnabled: true });
    }
  }

  /**
 * Function to sort todoList.
 * 
 * @param {string} value
 */
  sortTodos = (value) => {
    this.setState({ sortBy: value });
  }

  /**
 * Function to toggle isComplete variable of todo item.
 * 
 * @param {object} todo
 */
  toggleTaskCompleted = (todo) => {
    const todos = this.state.todos.slice();

    todo.isComplete = !todo.isComplete;
    const index = todos.indexOf(todo);

    todos[index] = todo;
    this.setState({ todos });
    this.sortTodos(this.state.sortBy);
  }

  /**
 * Function to toggle isEditEnabled to toggle between paragraph and input.
 * 
 * @param {object} todo
 */
  toggleIsEditEnabled = (todo) => {
    const todos = this.state.todos.slice();

    todo.isEditEnabled = !todo.isEditEnabled;
    const index = todos.indexOf(todo);

    todos[index] = todo;
    this.setState({ todos })
  }

  /**
 * Function to edit todo item.
 * 
 * @param {string} id
 * 
 * @param {string} value
 */
  editTodo = (id, value) => {
    const newTodos = this.state.todos.filter((item) => {
      if (item.id === id) {
        item.value = value;
      }

      return item;
    });

    this.setState({ todos: newTodos })
  }

  /**
 * Function to render jsx.
 */
  render() {
    return (
      <div className="App" >
        <Header
          title="To-do App"
          toggleSearch={this.toggleSearch}
          sortTodos={this.sortTodos}
        />

        {this.state.isSearchEnabled
          ? (
            <Search
              searchData={this.search}
              placeholder='Search a To-do'
            />
          )
          :
          (
            <AddTodo
              addTodo = {this.addTodo}
              placeholder='Create a new To-do'
            />
          )
        }

        <Container
          todos= {this.state.todos}
          searchQuery = {this.state.searchQuery}
          sortBy = {this.state.sortBy}
          isSearchEnabled = {this.state.isSearchEnabled}
          deleteHandler={this.deleteTodo}
          toggleTaskCompleted={this.toggleTaskCompleted}
          toggleIsEditEnabled={this.toggleIsEditEnabled}
          editTodo={this.editTodo}
        />

      </div>
    );
  }
}

export default App;
