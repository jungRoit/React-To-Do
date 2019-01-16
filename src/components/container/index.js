import React from 'react';
import Todo from '../to-do';

/**
 * Stateless Component to wrap all the todo items.
 * 
 * @param {*} props 
 */
const Container = (props) => {

  /**
   * Function to return todos list to be rendered.
   * 
   */
  const getList = () => {
    const todos = sort();

    if(props.isSearchEnabled) {
      return todos.filter(item => item.value.includes(props.searchQuery));
    }

    return todos;
  };

  /**
   * Function to sort todos list according to sortBy from props.
   * 
   */
  const sort = () => {
    if(props.sortBy !== '0') {
      const isComplete = (props.sortBy === '1') ? true : false;

      return props.todos.filter(item => item.isComplete === isComplete);
    }

    return props.todos;
  };

  return (
    getList().map((todo) =>
      <Todo
        key={todo.id}
        item={todo}
        deleteHandler={() => props.deleteHandler(todo)}
        handleTaskCompleted={() => props.toggleTaskCompleted(todo)}
        editToggle={() => props.toggleIsEditEnabled(todo)}
        handleEdit={(id, value) => props.editTodo(id, value)}

      />
    )
  );
};

export default Container;
