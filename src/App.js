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
				if(item.id === id)item.value = value;
				return item;
		})
		this.setState({ todos:newTodos })
	}

	render() {
		return (
			<div className="App">
				<Form clicked={this.addTodo} />
				<hr />
				{this.state.todos.map((todo, i) =>
					<Todo
						key={i}
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
