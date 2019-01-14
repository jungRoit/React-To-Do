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
		if(this.props.canSearch) this.props.clicked(this.state.value);
	}

	getInputValue = (event) => {
		if(event.keyCode === 13){
			let note = {
				id: new Date().toISOString(),
				value:this.state.value,
				isComplete: false,
				isEditEnabled:false,
				isChecked:false
			}
			this.props.clicked(note);
			this.setState({value:''});
		}
		
	}

	render() {
		return (
			<div className="form">
			<input 
			className= "input"
			value={this.state.value} onChange={this.getValue}
			placeholder= {this.props.placeHolder}
			onKeyDown = {this.getInputValue}
			/>
			</div>
		)
	}
}

export default Form;