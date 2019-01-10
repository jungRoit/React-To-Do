import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Todo from './components/to-do';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo = (todo) => {
    if(todo.value !== ''){
      this.setState({ 
        todos: this.state.todos.concat(todo)
      })
    }
  }

  deleteTodo =(todo) => {
    // let todos = this.state.todos.slice();
    // todos.splice(index,1);
    this.setState({
      todos:this.state.todos.filter(e => e!== todo)
    });
  }

  toggleTaskCompleted = (todo) => {
    let todos = this.state.todos.slice();
    if(todo.isComplete)todo.isComplete = false;
    else todo.isComplete = true;
    let index = todos.indexOf(todo);
    todos[index] = todo;
    this.setState({todos})
    console.log(this.state.todos);
  }

  render() {
    return (
      <div className="App">
        <Form clicked={this.addTodo} />
        <hr />
        {this.state.todos.map((todo,i)=> 
         <Todo 
         key={i}
         item={todo}
         deleteHandler={this.deleteTodo}  
         handleTaskCompleted= {this.toggleTaskCompleted}
         />
        )}
      </div>
    );
  }
}

export default App;
