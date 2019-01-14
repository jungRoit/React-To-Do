import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header';
import Container from './components/container';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: JSON.parse(localStorage.getItem('todos')) || [],
			searchList: [],
			isSearchEnabled: false
		}
	}

	setLocalStorage = () => {
		window.addEventListener('beforeunload', () => {
			localStorage.clear();
			localStorage.setItem('todos', JSON.stringify(this.state.todos) || null);
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

	search = (value) => {
		let result = [];
		this.state.todos.filter(item => {
			if (item.value.includes(value)) result.push(item);
			return result;
		})
		this.setState({ searchList: result });
	}

	deleteTodo = (todo) => {
		console.log(todo);
		this.setState({
			todos: this.state.todos.filter(e => e !== todo)
		});
	}

	toggleSearch = () => {
		if (this.state.isSearchEnabled) this.setState({ isSearchEnabled: false });
		else this.setState({ isSearchEnabled: true });
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

	toggleCheckbox = (todo) => {
		let todos = this.state.todos.slice();
		if(todo.isChecked)todo.isChecked = false;
		else todo.isChecked = true;
		let index = todos.indexOf(todo);
		todos[index] = todo;
		this.setState({todos});
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
				<Header
					title="To-do App"
					toggleSearch={this.toggleSearch}
				/>

				{this.state.isSearchEnabled
					? (
						<Form
							canSearch={this.state.isSearchEnabled}
							clicked={this.search}
							placeHolder='Search a To-do'
						/>
					)
					:
					(
						<Form
							canSearch={this.state.isSearchEnabled}
							clicked={this.addTodo}
							placeHolder='Create a new To-do'
						/>
					)
				}

				<Container 
				todos = {this.state.isSearchEnabled? this.state.searchList : this.state.todos} 
				deleteHandler = {this.deleteTodo}
				toggleTaskCompleted={this.toggleTaskCompleted}
				toggleIsEditEnabled={this.toggleIsEditEnabled}
				toggleCheckbox = {this.toggleCheckbox}
				editTodo={this.editTodo}
				 />

			</div>
		);
	}
}

export default App;
