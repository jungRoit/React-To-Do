import React from 'react';
import './index.css';
import searchPic from '../../assets/img/search.png';

/**
 * 
 * @param {*} props 
 */
const Header = (props) => {

  /**
	 * .Function to toggle search input.
	 */
  const toggleSearch = () => {
    props.toggleSearch();
  };

  /**
   * .Function to send sort value to parent.
   * 
   * @param {object} event 
   */
  const sortList = (event) => {
    props.sortTodos(event.target.value);
  }

  return (
    <div className='header'>
      <h1>{props.title}</h1>
      <div className='clearfix'>
        <div className='sort-box'>
          <select
            className='sort-items'
            onChange={(e) => sortList(e)}
          >
            <option value={0}>All</option>
            <option value={1}>Completed</option>
            <option value={2}>incomplete</option>
          </select>
        </div>
        <div className='search-box'>
          <img
            onClick={() => toggleSearch()}
            className='search-img'
            src={searchPic} alt='Search' />
        </div>
      </div>
    </div>

  );
};

export default Header;
