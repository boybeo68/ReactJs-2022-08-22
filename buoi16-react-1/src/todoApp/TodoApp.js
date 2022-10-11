import React, {useState} from 'react';
import styles from './css/Todo.module.css';
const shortid = require('shortid');
export default function TodoApp() {
  const [todos, setTodos] = useState([
    {id: 1, name: 'Rửa bat', isCheck: false},
  ]);
  const [inputValue, setInputValue] = useState('');
  // state có rule là không thay đổi trực tiếp.
  //   khi thay đổi dữ liệu liên quan đến object => clone ra rồi xử lý
  const addTodo = () => {
    // setTodos([
    //   {
    //     id: 5,
    //     name: 'new item',
    //     isCheck: false,
    //   },
    //   ...todos,
    // ]);

    let cloneTodos = JSON.parse(JSON.stringify(todos));
    // cloneTodos.push({
    //   id: 5,
    //   name: 'new item',
    //   isCheck: false,
    // });
    setTodos([
      {
        id: shortid.generate(),
        name: inputValue,
        isCheck: false,
      },
      ...cloneTodos,
    ]);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((i) => i.id !== id);
    setTodos(newTodos);
  };
  const checkDone = (id, index, editItem) => {
    let cloneData = JSON.parse(JSON.stringify(todos));
    editItem.isCheck = !editItem.isCheck;
    cloneData.splice(index, 1, editItem);
    setTodos(cloneData);
  };
  const renderClassName = (isCheck) =>{
    if (isCheck) {
      return styles.checkDone
    }else  {
      return ''
    }
  }

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
          {todos.map((item, index) => {
            return (
              <li key={item.id}>
                <span
                //state style
                  className={renderClassName(item.isCheck)}
                  // className={`${item.isCheck ? 'checkDone' : ''}`}
                    // style={{
                    //   textDecoration: item.isCheck ? 'line-through' : 'none',
                    //   opacity: 0.5,
                    // }}
                  onDoubleClick={() => {
                    checkDone(item.id, index, item);
                  }}
                >
                  {' '}
                  {item.name}{' '}
                </span>
                <span
                  onClick={() => {
                    deleteTodo(item.id);
                  }}
                  style={{marginLeft: '20px', opacity: 0.5, cursor: 'pointer'}}
                >
                  delete
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
      </div>
    </div>
  );
}

// ôn luyên, nhuần nhuyễn hơn về State.
// props, và phân tách components
// xử lý state style và handle event
