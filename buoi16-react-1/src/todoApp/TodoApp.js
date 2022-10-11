import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import styles from './css/Todo.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
const shortid = require('shortid');
const FILTER = {
  ALL: 'ALL',
  COMPLETE: 'COMPLETE',
};
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEdit, setIsEdit] = useState(null);
  const [textEdit, setTextEdit] = useState('');
  const [filter, setfilter] = useState(FILTER.ALL);
  // state có rule là không thay đổi trực tiếp.
  //   khi thay đổi dữ liệu liên quan đến object => clone ra rồi xử lý
  const addTodo = () => {
    let cloneTodos = JSON.parse(JSON.stringify(todos));
    let data = [
      {
        id: shortid.generate(),
        name: inputValue,
        isCheck: false,
      },
      ...cloneTodos,
    ];

    setInputValue('');
    setTodos(data);
    localStorage.setItem('todos', JSON.stringify(data));
  };

  // useEffect(() => {
  //   if (todos.length > 0) {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }, [todos]);

  useEffect(() => {
    const dataLocal = localStorage.getItem('todos');
    setTodos(JSON.parse(dataLocal));
  }, []);

  const deleteTodo = (id) => {
    let newTodos = todos.filter((i) => i.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  const checkDone = (id, index, editItem) => {
    let cloneData = JSON.parse(JSON.stringify(todos));
    editItem.isCheck = !editItem.isCheck;
    cloneData.splice(index, 1, editItem);
    localStorage.setItem('todos', JSON.stringify(cloneData));
    setTodos(cloneData);
  };

  const editName = (index, editItem) => {
    let cloneData = JSON.parse(JSON.stringify(todos));
    cloneData[index].name = textEdit;
    localStorage.setItem('todos', JSON.stringify(cloneData));
    setTodos(cloneData);
    setTextEdit('');
  };
  const renderClassName = (isCheck) => {
    if (isCheck) {
      return styles.checkDone;
    } else {
      return '';
    }
  };

  const filterTodos = (type) => {
    setfilter(type);
  };

  return (
    <div className='main'>
      <div className='header'>
        <h1>Todos</h1>
      </div>
      <div className='body'>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log('enter 1');
              addTodo();
            }
          }}
          value={inputValue}
          type='text'
          name=''
          id=''
        />
        <button onClick={addTodo}>Add todo</button>
        <ul>
          {todos
            .filter((e, i) => {
              if (filter === FILTER.ALL) {
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
                    onChange={() => checkDone(item.id, index, item)}
                    type={'checkbox'}
                  />
                  {isEdit === item.id ? (
                    <input
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setIsEdit(null);
                          editName(index, item);
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
                  ) : (
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
                  )}
                  <span
                    onClick={() => {
                      deleteTodo(item.id);
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
      <div className='fotter'>
        <p>
          <span>{todos.length} items</span>
        </p>
        <Button
          onClick={() => filterTodos(FILTER.ALL)}
          className={styles.button}
        >
          All
        </Button>
        <Button onClick={() => filterTodos(FILTER.COMPLETE)}>Complete</Button>
      </div>
    </div>
  );
}

// edit, filter, lưu dữ liệu vào localStorage
// add font awesome to project
// prop và callBack để handel data giữa các component.
// style giao diện.
// className={`${item.isCheck ? 'checkDone' : ''}`}
// style={{
//   textDecoration: item.isCheck ? 'line-through' : 'none',
//   opacity: 0.5,
// }}

// setTodos([
//   {
//     id: 5,
//     name: 'new item',
//     isCheck: false,
//   },
//   ...todos,
// ]);
