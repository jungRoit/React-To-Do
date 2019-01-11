import React from 'react';
import './index.css';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
		}
	} 

	getValue = (event) => {
		this.setState({value:event.target.value});
		
	}

	getInputValue = () => {
		let note = {
			id: new Date().toISOString(),
			value:this.state.value,
			isComplete: false,
			isEditEnabled:false
		}
		this.props.clicked(note);
		this.setState({value:''});
	}

	render() {
		return (
			<div className="col-lg-12 lead">
			<input 
			className= "input"
			value={this.state.value} onChange={this.getValue}
			placeholder='Create a new To-do'
			/>
			<button 
			className = "btn-dark"
			onClick={this.getInputValue}>
			Save
			</button>
			</div>
		)
	}
}

export default Form;