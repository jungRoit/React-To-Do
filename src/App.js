import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Todo from './components/to-do';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  addTodo = (note) => {
    if(note.value !== ''){
      let notes = this.state.notes.slice();
      notes.push(note);
      this.setState({notes});
    }
  }

  deleteTodo =(todo) => {
    let notes = this.state.notes.slice();
    let index = notes.indexOf(todo);
    notes.splice(index,1);
    this.setState({notes});
  }

  render() {
    return (
      <div className="App">
        <Form clicked={this.addTodo} />
        <hr />
        {this.state.notes.map((note,i)=> 
         <Todo key={i} value={note.value} deleteHandler={this.deleteTodo} />
        )}
      </div>
    );
  }
}

export default App;
