import React from 'react';
import './index.css';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completed:false,
            styles: ['to-do-input']
        }
    }
delete = () => {
    this.props.deleteHandler(this.props.value);

}

taskcompleted = () => {
    console.log(this.state.completed);
    if(this.state.completed){
        this.setState({completed:false});
    }else {
        this.setState({completed:true});
    }
    this.toggleStyle();
}

toggleStyle = () => {
    let styles = this.state.styles.slice();
    if(this.state.completed) {
        styles.push('strike-through');
        this.setState({styles});
    }else {
        styles.splice(1,1);
        this.setState({styles});
    }
   
}

    render() {
        return (
            <div className='to-do'>
            <input type='checkbox' onChange={this.taskcompleted} />
            <input className={this.state.styles.join(' ')} value={this.props.value} disabled/>
            <button onClick={this.delete}>Delete</button>
          </div>
        )
    }
}

export default Todo;