import React from 'react';
import './index.css';

const Todo = (props) => {

	let deleteTodo = () => {
		props.deleteHandler(props.item);
	}

	let edit = (event) => {
		if(event.keyCode === 13){
			props.editToggle(props.item);
		}
	}

	let editPressed = () => {
		props.editToggle(props.item);
	}

	let editFieldChanged = (event) => {
		props.handleEdit(props.item.id, event.target.value);
	}

	let taskcompleted = () => {
		props.handleTaskCompleted(props.item);
	}

	return (
		<div className='to-do'>
			<input
				className='checkbox'
				type='checkbox'
				onChange={() => taskcompleted()}
			/>

			{props.item.isEditEnabled 
			?(
				<div className='todo-item'>
					<input
					className = 'todo-item-input'
						value={props.item.value}
						onChange={(event) => editFieldChanged(event)}
						onKeyDown = {(e)=> edit(e)}
					/>
				</div>
			)
			: (
				<div className='todo-item '>
				<p className={props.item.isComplete ? 'strike-through font-large' : ' font-large'}>
					{props.item.value}
				</p>
				</div>
			)
			}
			<button
				className="btn-dark button"
				onClick={() => editPressed()}>
				{props.item.isEditEnabled ? 'Back':'/' }
				</button>
			<button
				className="btn-danger button"
				onClick={() => deleteTodo()}>
				X
				</button>
		</div>
	)

}

export default Todo;