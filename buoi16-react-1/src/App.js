import React, {useEffect, useState} from 'react';

import './App.css';
import {Container} from 'react-bootstrap';
import RandomNumber from './randomNumberProject/RandomNumber';
import TodoApp from './todoApp/TodoApp';
import ToDoItem from './todoApp/components/ToDoItem';
export const App = () => {
  const [dataProps, setdataProps] = useState('Đây là dữ liệu cần chuyển đi');
  const [dataChildPass, setdataChildPass] = useState(null);
  const dataChildFunc = (data) => {
    setdataChildPass(data);
  };
  return (
    <div>
      <Container>
        {/* <RandomNumber /> */}
        <p>{JSON.stringify(dataChildPass)}</p>
        <TodoApp data={dataProps} dataChild={dataChildFunc} />
      </Container>
    </div>
  );
};

// export default : khi import có thể đổi tên được
// export const => khi import phải import đúng tên
