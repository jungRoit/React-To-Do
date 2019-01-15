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
			sortedList: [],
			isSearchEnabled: false,
			isSortEnabled: false
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

	search = (val) => {
		let result = this.state.todos.filter(item => item.value.includes(val));
		this.setState({ searchList: result });
	}

	deleteTodo = (todo) => {
			let result = this.state.todos.filter(item => item !== todo);
			this.setState({todos:result});
	}

	// Header Methods for toggle between input bar
	toggleSearch = () => {
		if (this.state.isSearchEnabled) this.setState({ isSearchEnabled: false });
		else this.setState({ isSearchEnabled: true });
	}

	sortTodos = (value) => {
		let result = [];
		if (value === '1') {
			result = this.state.todos.filter(item => item.isComplete === true);
			this.setState({  sortedList: result, isSortEnabled:true });
		}else if(value === '2') {
			result = this.state.todos.filter(item => item.isComplete === false);
			this.setState({ sortedList: result, isSortEnabled:true });
		}else {
			this.setState({isSortEnabled:false});
		}
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
					todos= {this.state.isSearchEnabled ? this.state.searchList : (this.state.isSortEnabled 
					? this.state.sortedList: this.state.todos)}
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
