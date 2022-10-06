import React, {useEffect} from 'react';

import './App.css';
import {Container} from 'react-bootstrap';
import RandomNumber from './randomNumberProject/RandomNumber';
import TodoApp from './todoApp/TodoApp';
export const App = () => {
  return (
    <div>
      <Container>
        {/* <RandomNumber /> */}
        <TodoApp />
      </Container>
    </div>
  );
};

// export default : khi import có thể đổi tên được
// export const => khi import phải import đúng tên
