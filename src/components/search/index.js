import React from 'react';
import Form from '../form';

/**
 * Stateless component to search todos.
 * 
 * @param {*} props 
 */
const Search = (props) => {

  return (
    <Form
      changed = {(val) => props.searchData(val)}
      enterPressed = {() => {}}
      placeholder = {props.placeholder}
    />
  );
};

export default Search;
