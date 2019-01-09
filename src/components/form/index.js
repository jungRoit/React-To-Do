import React from 'react';
import Input from '../input';
import Button from '../button';
class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            input:''
          }
    }

    getValue(value) {
        this.setState({input:value});
        console.log(value);
      }

    render() {
        return (
            <div>
            <Input
            changed = {()=> this.getValue()}
            />
            <Button text="Save" />
            </div>
        )
    }
}

export default Form;