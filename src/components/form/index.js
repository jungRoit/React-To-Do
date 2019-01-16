import React from 'react';
import './index.css';

/**
 * .Form Component to create an input.
 */
class Form extends React.Component {
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  /**
   * .Function to set value of input field when changed to state.
   * 
   * @param {object} event
   */
  getValue = (event) => {
    this.setState({ value: event.target.value });
    // if (this.props.canSearch) {
    //   this.props.clicked(event.target.value);
    // }
    this.props.changed(event.target.value);
  }

  /**
   * .Function to send todo object to parent.
   * 
   * @param {object} event
   */
  getInputValue = (event) => {
    if (event.keyCode === 13) {
      this.props.enterPressed(event.target.value);

      this.setState({ value: '' });
    }

  }

  /**
   * Render method for Form Component's jsx.
   */
  render() {
    return (
      <div className="form">
        <input
          className="input"
          value={this.state.value}
          onChange={this.getValue}
          placeholder={this.props.placeholder}
          onKeyDown={this.getInputValue}
        />
      </div>
    );
  }
}

export default Form;
