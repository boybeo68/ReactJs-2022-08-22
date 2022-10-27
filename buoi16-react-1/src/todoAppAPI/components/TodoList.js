import React, {useState} from 'react';
import {FILTER} from '../ultil/constant';
import styles from '../css/Todo.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
export default function TodoList(props) {
  const [isEdit, setIsEdit] = useState(null);
  const [textEdit, setTextEdit] = useState('');
  const renderClassName = (isCheck) => {
    if (isCheck) {
      return styles.checkDone;
    } else {
      return '';
    }
  };

  const renderEditName = (index, item) => {
    return (
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setIsEdit(null);
            props.editName(index, textEdit, item);
            setTextEdit('');
          }
        }}
        onChange={(e) => {
          setTextEdit(e.target.value);
        }}
        value={textEdit}
        type='text'
        name=''
        id=''
      />
    );
  };

  const renderTextName = (item) => {
    return (
      <span
        //state style
        className={renderClassName(item.isCheck)}
        onDoubleClick={() => {
          setIsEdit(item.id);
          setTextEdit(item.name);
        }}
      >
        {' '}
        {item.name}{' '}
      </span>
    );
  };

  return (
    <div>
      <ul>
        {props.todos
          .filter((e, i) => {
            if (props.filter === FILTER.ALL) {
              return true;
            } else {
              return e.isCheck === true;
            }
          })
          .map((item, index) => {
            return (
              <li className={styles.todoLine} key={item.id}>
                <input
                  checked={item.isCheck}
                  onChange={() => props.checkDone(item.id, index, item)}
                  type={'checkbox'}
                />
                {isEdit === item.id
                  ? renderEditName(index, item)
                  : renderTextName(item)}
                <span
                  onClick={() => {
                    props.deleteTodo(item.id);
                  }}
                  style={{
                    marginLeft: '20px',
                    opacity: 0.5,
                    cursor: 'pointer',
                  }}
                >
                  <FontAwesomeIcon color='red' icon={faTrashCan} />
                </span>{' '}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
