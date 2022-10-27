import React from 'react';
import {Button} from 'react-bootstrap';
import {FILTER} from '../ultil/constant';
import styles from '../css/Todo.module.css';
export default function Footer(props) {
  return (
    <div className='fotter'>
      <p>
        <span>{props.todos.length} items</span>
      </p>
      <Button
        onClick={() => props.filterTodos(FILTER.ALL)}
        className={styles.button}
      >
        All
      </Button>
      <Button onClick={() => props.filterTodos(FILTER.COMPLETE)}>
        Complete
      </Button>
    </div>
  );
}
