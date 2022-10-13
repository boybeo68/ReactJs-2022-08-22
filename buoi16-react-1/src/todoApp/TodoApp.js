import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import {FILTER} from './ultil/constant';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
const shortid = require('shortid');

export default function TodoApp(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setfilter] = useState(FILTER.ALL);
  // state có rule là không thay đổi trực tiếp.
  //   khi thay đổi dữ liệu liên quan đến object => clone ra rồi xử lý
  const addTodo = (dataInput) => {
    let cloneTodos = JSON.parse(JSON.stringify(todos));
    let data = [
      {
        id: shortid.generate(),
        name: dataInput,
        isCheck: false,
      },
      ...cloneTodos,
    ];
    setTodos(data);
    localStorage.setItem('todos', JSON.stringify(data));
  };

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

  const editName = (index, textEdit) => {
    let cloneData = JSON.parse(JSON.stringify(todos));
    cloneData[index].name = textEdit;
    localStorage.setItem('todos', JSON.stringify(cloneData));
    setTodos(cloneData);
  };

  const filterTodos = (type) => {
    setfilter(type);

    props.dataChild(todos);
  };

  return (
    <div className='main'>
      <Header />
      <div className='body'>
        <TodoInput addTodoProps={addTodo} />

        <TodoList
          todos={todos}
          filter={filter}
          checkDone={checkDone}
          editName={editName}
          deleteTodo={deleteTodo}
        />
      </div>
      <Footer todos={todos} filterTodos={filterTodos} />
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

// Truyền dữ liệu từ cha -> con
// đẩy dữ liệu từ con -> cha

// btvn: hoàn thiện todoApp
// - tách todoApp thành các component
// + TodoInput.js
// + TodoList.js
//   + TodoItem.js
// + Footer.js
