import React from 'react';
// import Input from '../input';
// import Button from '../button';
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
			value:this.state.value,
			isComplete: false 
		}
		this.props.clicked(note);
		this.setState({value:''});
	}

	render() {
		return (
			<div>
			<input value={this.state.value} onChange={this.getValue}/>
			<button onClick={this.getInputValue}>Save</button>
			</div>
		)
	}
}

export default Form;

/* <Input 
value = {this.state.value}
changed={() => this.getValue()}

/>
<Button
text="Save"
clicked={()=>this.getInputValue()}
/> */