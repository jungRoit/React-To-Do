import React from 'react';
import Todo from '../to-do';

/**
 * Stateless Component to wrap all the todo items.
 * 
 * @param {*} props 
 */
const Container = (props) => {
  
  return (
    props.todos.map((todo) =>
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
