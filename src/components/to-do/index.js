import React from 'react';
import './index.css';

const Todo = (props) => {

	let deleteTodo = () => {
		props.deleteHandler(props.item);
	}

	let edit = () => {
		props.editToggle(props.item);
	}

	let editFieldChanged = (event) => {
		props.handleEdit(props.item,event.target.value);
	}

	let taskcompleted = () => {
		props.handleTaskCompleted(props.item);
	}

	let renderTodoValue = () => {
		if (props.item.isEditEnabled) {
			return (
				<div className='todo-item'>
				<input
					value={props.item.value}
					onChange = {(event)=> editFieldChanged(event)}
				/>
				<button
				onClick={() => edit()}>
				Save
				</button>
				</div>
			)
		} else {
			return (
				<p className={props.item.isComplete ? 'strike-through' : ''}>
					{props.item.value}
				</p>
			)
		}
	}

	return (
		<div className='to-do'>
			<input
				type='checkbox'
				onChange={() => taskcompleted()}
			/>
			{renderTodoValue()}
			<button
				onClick={() => edit()}>
				Edit
				</button>
			<button
				onClick={() => deleteTodo()}>
				Delete
				</button>
		</div>
	)

}

export default Todo;