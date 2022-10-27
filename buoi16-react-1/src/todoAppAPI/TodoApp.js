import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import {FILTER} from './ultil/constant';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import axios from 'axios';
const shortid = require('shortid');
const URL = 'https://635a75a238725a1746c6b8d3.mockapi.io/todos';
export default function TodoAppApi(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setfilter] = useState(FILTER.ALL);
  const [isLoading, setisLoading] = useState(false);
  // state có rule là không thay đổi trực tiếp.
  //   khi thay đổi dữ liệu liên quan đến object => clone ra rồi xử lý
  // using api
  const addTodo = async (dataInput) => {
    setisLoading(true);
    try {
      await axios.post(URL, {
        name: dataInput,
        isCheck: false,
      });
      getListTodo();
    } catch (error) {}
  };

  useEffect(() => {
    getListTodo();
  }, []);

  const getListTodo = async () => {
    setisLoading(true);
    try {
      let res = await axios.get(URL);
      setTodos(res.data);
      setisLoading(false);
    } catch (error) {
      console.log('bi loi roi');
    }
  };

  const deleteTodo = async (id) => {
    setisLoading(true);
    try {
      await axios.delete(`${URL}/${id}`);
      getListTodo();
    } catch (error) {
      console.log('loi api delete');
    }
  };
  const checkDone = async (id, index, editItem) => {
    setisLoading(true);
    try {
      await axios.put(`${URL}/${id}`, {
        name: editItem.name,
        isCheck: !editItem.isCheck,
      });
      getListTodo();
    } catch (error) {}
  };

  const editName = async (index, textEdit, item) => {
    setisLoading(true);
    try {
      await axios.put(`${URL}/${item.id}`, {
        name: textEdit,
        isCheck: item.isCheck,
      });
      getListTodo();
    } catch (error) {}
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
        {isLoading ? <p>Loading...</p> : null}
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
