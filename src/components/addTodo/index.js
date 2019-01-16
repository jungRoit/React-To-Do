import React from 'react';
import Form from '../form';

/**
 * Stateless Component to add new Todo.
 * 
 * @param {*} props 
 */
const AddTodo = (props) => {

  /**
   * Function to send a new todo object to parent.
   * 
   * @param {string} val 
   */
  const addTodo = (val) => {
    const note = {
      id: new Date().toISOString(),
      value: val,
      isComplete: false,
      isEditEnabled: false,
      isChecked: false
    };

    props.addTodo(note);
  };

  return (
    <Form
      changed = {() => {}}
      enterPressed = {(val) => addTodo(val)}
      placeholder = {props.placeholder}
    />
  );
};

export default AddTodo;
