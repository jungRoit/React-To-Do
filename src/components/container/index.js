import React from 'react';
import Todo from '../to-do';

const Container = (props) => {

	let deleteTodo = (todo) => {
		props.deleteHandler(todo);
	}

	let toggleTaskCompleted = (todo) => {
		props.toggleTaskCompleted(todo);
	}

	let toggleIsEditEnabled = (todo) => {
		props.toggleIsEditEnabled(todo);
	}

	let editTodo = (id,value) => {
		props.editTodo(id,value);
	}

	let toggleCheckbox = (todo) => {
		props.toggleCheckbox(todo);
	}

	return (
		props.todos.map((todo) =>
			<Todo
				key={todo.id}
				item={todo}
				isChecked= {() => toggleCheckbox(todo)}
				deleteHandler={() =>deleteTodo(todo)}
				handleTaskCompleted={() => toggleTaskCompleted(todo)}
				editToggle={() => toggleIsEditEnabled(todo)}
				handleEdit={(id,value) => editTodo(id,value)}
				toggleCheckbox = {() => toggleCheckbox(todo)}
			/>
		)
	)
}

export default Container;