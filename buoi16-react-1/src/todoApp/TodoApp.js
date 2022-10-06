import React, {useState} from 'react';
const shortid = require('shortid');
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // state có rule là không thay đổi trực tiếp mảng gốc.
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
                {item.name}{' '}
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
