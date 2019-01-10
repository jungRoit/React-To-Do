import React from 'react';
import './index.css';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: props.isComplete
		}
	}

	delete = () => {
		this.props.deleteHandler(this.props.index);
	}

	edit = () => {
		this.refs.item.removeAttribute('disabled');
	}

	taskcompleted = () => {
		if (this.state.completed) {
			this.setState({ completed: false });
		} else {
			this.setState({ completed: true });
		}
	}

	render() {
		return (
			<div className='to-do'>
				<input
					type='checkbox'
					onChange={this.taskcompleted}
				/>
				<p className={this.state.completed ? 'strike-through' : ''}>{this.props.value}</p>
				{/* <input
					ref='item'
					className={this.state.styles.join(' ')}
					value={this.props.value} disabled
				/> */}
				<button
					onClick={this.edit}>
					Edit
				</button>
				<button
					onClick={this.delete}>
					Delete
				</button>
			</div>
		)
	}
}

export default Todo;