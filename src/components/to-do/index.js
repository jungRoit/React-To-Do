import React from 'react';
import './index.css';
import editPic from '../../assets/img/edit.png';
import deletePic from '../../assets/img/delete.png';

/**
 * .Stateless Component for individual todo item.
 * 
 * @param {*} props 
 */
const Todo = (props) => {

  /**
   * .Function to send todo item details for delete to parent.
   * 
   */
  const deleteTodo = () => {
    props.deleteHandler(props.item);
  };

  /**
   * .Function to call parent's function to edit todo when enter is clicked.
   * 
   * @param {object} event 
   */
  const edit = (event) => {
    if (event.keyCode === 13) {
      props.editToggle(props.item);
    }
  };

  /**
   * .Function to call parent's function when edit button is pressed.
   */
  const editPressed = () => {
    props.editToggle(props.item);
  };

  /**
   * .Function to call parent's function to edit todo.
   * 
   * @param {object} event 
   */
  const editFieldChanged = (event) => {
    props.handleEdit(props.item.id, event.target.value);
  };

  /**
   * .Function to toggle isComplete of each todo by the parent.
   */
  const taskcompleted = () => {
    props.handleTaskCompleted(props.item);
  };

  return (
    <div className='to-do'>
      <div className='todo-checkbox'>
        <input
          checked={props.item.isComplete}
          className='checkbox'
          type='checkbox'
          onChange={() => taskcompleted()}
        />
      </div>

      <div className='todo-item'>
        {props.item.isEditEnabled
          ? (
            <input
              className='todo-item-input'
              value={props.item.value}
              onChange={(event) => editFieldChanged(event)}
              onKeyDown={(e) => edit(e)}
            />
          )
          : (
            <p
              onClick={() => taskcompleted()}
              className={props.item.isComplete ? 'strike-through font-large' : ' font-large'}>
              {props.item.value}
            </p>
          )
        }
      </div>

      <div className='todo-buttons'>
        <button
          className="btn-dark button"
          onClick={() => editPressed()}>
          {props.item.isEditEnabled ? 'Back' : <img src={editPic} alt='edit' />}
        </button>
        <button
          className="btn-danger button"
          onClick={() => deleteTodo()}>
          <img src={deletePic} alt='delete' />
        </button>
      </div>

    </div>
  );

};

export default Todo;
