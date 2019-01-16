import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
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
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      searchList: [],
      sortedList: [],
      isSearchEnabled: false,
      isSortEnabled: false,
      sortBy: 0
    }
  }

  /**
	 * .Store todo item in local storage.
	 */
  setLocalStorage = () => {
    window.addEventListener('beforeunload', () => {
      localStorage.clear();
      localStorage.setItem('todos', JSON.stringify(this.state.todos) || null);
    });
  }

  /**
	 * 
	 */
  componentDidMount() {
    this.setLocalStorage();
  }

  /**
	 * .Function to add new todo item.
   * 
   * @param {*} todo
	 */
  addTodo = (todo) => {
    if (todo.value !== '') {
      this.setState({
        todos: this.state.todos.concat(todo)
      });
    }
  }

  /**
 * .Function to search todo item.
 * 
 * @param {*} val
 */
  search = (val) => {
    const result = this.state.todos.filter(item => item.value.includes(val));

    this.setState({ searchList: result });
  }

  /**
 * .Function to delete todo item.
 * 
 * @param {*} todo
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
 * .function to sort todoList.
 * 
 * @param {*} value
 */
  sortTodos = (value) => {
    let result = [];

    if (value === '1') {
      result = this.state.todos.filter(item => item.isComplete === true);
      this.setState({ sortBy: value, sortedList: result, isSortEnabled: true });
    } else if (value === '2') {
      result = this.state.todos.filter(item => item.isComplete === false);
      this.setState({ sortBy: value, sortedList: result, isSortEnabled: true });
    } else {
      this.setState({ sortBy: value, isSortEnabled: false });
    }
  }

  /**
   * .Function to sort todos.
   * 
   * @param {*} value
   */
  sort = (value) => {
    let result = [];
    const isSortEnabled = value === '0' ? false : true;

    if(value !== '0') {
      const isComplete = value === '1' ? true : false;

      result = this.state.todos.filter(item => item.isComplete === isComplete);
      this.setState({ sortBy: value, sortedList: result, isSortEnabled: isSortEnabled });
    }
    this.setState({ sortBy: value, sortedList: result, isSortEnabled: isSortEnabled });
  }

  /**
 * .Function to toggle isComplete variable of todo item.
 * 
 * @param {*} todo
 */
  toggleTaskCompleted = (todo) => {
    const todos = this.state.todos.slice();

    if (todo.isComplete) {
      todo.isComplete = false;
    } else {
      todo.isComplete = true;
    }
    const index = todos.indexOf(todo);

    todos[index] = todo;
    this.setState({ todos });
    this.sort(this.state.sortBy);
  }

  /**
 * Function to toggle isEditEnabled to toggle between paragraph and input.
 * 
 * @param {*} todo
 */
  toggleIsEditEnabled = (todo) => {
    const todos = this.state.todos.slice();

    if (todo.isEditEnabled) {
      todo.isEditEnabled = false;
    } else {
      todo.isEditEnabled = true;
    }
    const index = todos.indexOf(todo);

    todos[index] = todo;
    this.setState({ todos })
  }

  /**
 * .Function to edit todo item.
 * 
 * @param {*} id
 * 
 * @param {*} value
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
 * .Function to render jsx.
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
            <Form
              canSearch={true}
              clicked={this.search}
              placeHolder='Search a To-do'
            />
          )
          :
          (
            <Form
              canSearch={false}
              clicked={this.addTodo}
              placeHolder='Create a new To-do'
            />
          )
        }

        <Container
          todos={this.state.isSearchEnabled ? this.state.searchList : (this.state.isSortEnabled
            ? this.state.sortedList : this.state.todos)}
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
