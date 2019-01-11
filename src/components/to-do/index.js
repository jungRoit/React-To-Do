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
		props.handleEdit(props.item.id, event.target.value);
	}

	let taskcompleted = () => {
		props.handleTaskCompleted(props.item);
	}

	let renderTodoValue = () => {
		if (props.item.isEditEnabled) {
			return (
				<div className='todo-item col-lg-6 h3'>
					<input
						value={props.item.value}
						onChange={(event) => editFieldChanged(event)}
					/>
					<button
						className="btn-success button"
						onClick={() => edit()}>
						Save
				</button>
				</div>
			)
		} else {
			return (
				<p className={props.item.isComplete ? 'strike-through col-lg-6 font-large' : 'col-lg-6 font-large'}>
					{props.item.value}
				</p>
			)
		}
	}

	return (
		<div className='to-do'>
			<input
				className='checkbox'
				type='checkbox'
				onChange={() => taskcompleted()}
			/>
			{renderTodoValue()}
			<button
				className="btn-warning button"
				onClick={() => edit()}>
				Edit
				</button>
			<button
				className="btn-danger button"
				onClick={() => deleteTodo()}>
				Delete
				</button>
		</div>
	)

}

export default Todo;