import React from 'react';
import Todo from '../to-do';

/**
 * Stateless Component to wrap all the todo items.
 * 
 * @param {*} props 
 */
const Container = (props) => {

  /**
   * .Function to send todo to be deleted to parent.
   * 
   * @param {*} todo 
   */
  const deleteTodo = (todo) => {
    props.deleteHandler(todo);
  };

  /**
   * .Function to send todo to parent to toggle isComplete value.
   * 
   * @param {*} todo 
   */
  const toggleTaskCompleted = (todo) => {
    props.toggleTaskCompleted(todo);
  };

  /**
   * .Function to send todo to parent to toggle editFlag value.
   * 
   * @param {*} todo 
   */
  const toggleIsEditEnabled = (todo) => {
    props.toggleIsEditEnabled(todo);
  };

  /**
   * .Function to send todo to parent for edit.
   * 
   * @param {*} id 
   * @param {*} value
   */
  const editTodo = (id, value) => {
    props.editTodo(id, value);
  }


  return (
    props.todos.map((todo) =>
      <Todo
        key={todo.id}
        item={todo}
        deleteHandler={() => deleteTodo(todo)}
        handleTaskCompleted={() => toggleTaskCompleted(todo)}
        editToggle={() => toggleIsEditEnabled(todo)}
        handleEdit={(id, value) => editTodo(id, value)}

      />
    )
  );
};

export default Container;
