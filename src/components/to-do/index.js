import React from 'react';
import './index.css';

 const Todo = (props) => {

	let deleteTodo = () => {
		props.deleteHandler(props.item);
	}

	let edit = () => {
	}

	let taskcompleted = () => {
		props.handleTaskCompleted(props.item);
	}

		return (
			<div className='to-do'>
				<input
					type='checkbox'
					onChange={() =>taskcompleted()}
				/>
				<p className={props.item.isComplete ? 'strike-through' : ''}>{props.item.value}</p>
				{/* <input
					ref='item'
					className={this.state.styles.join(' ')}
					value={this.props.value} disabled
				/> */}
				<button
					onClick={()=>edit()}>
					Edit
				</button>
				<button
					onClick={()=>deleteTodo()}>
					Delete
				</button>
			</div>
		)
	
}

export default Todo;