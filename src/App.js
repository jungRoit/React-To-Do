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
      this.setState({ 
        notes: this.state.notes.concat(note)
      })
    }
  }

  deleteTodo =(index) => {
    let notes = this.state.notes.slice();
    notes.splice(index,1);
    this.setState({notes});
  }

  render() {
    return (
      <div className="App">
        <Form clicked={this.addTodo} />
        <hr />
        {this.state.notes.map((note,i)=> 
         <Todo key={i} index = {i} value={note.value} isComplete={note.isComplete} deleteHandler={this.deleteTodo} />
        )}
      </div>
    );
  }
}

export default App;
