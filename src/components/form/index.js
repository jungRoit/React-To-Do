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
    if (this.props.canSearch) {
      this.props.clicked(event.target.value);
    }
    // this.props.changed(event.target.value);
  }

  /**
   * .Function to send todo object to parent.
   * 
   * @param {object} event
   */
  getInputValue = (event) => {
    if (event.keyCode === 13) {
      const note = {
        id: new Date().toISOString(),
        value: this.state.value,
        isComplete: false,
        isEditEnabled: false,
        isChecked: false
      };

      this.props.clicked(note);
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
          value={this.state.value} onChange={this.getValue}
          placeholder={this.props.placeHolder}
          onKeyDown={this.getInputValue}
        />
      </div>
    );
  }
}

export default Form;
