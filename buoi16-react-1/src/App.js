import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';

import './App.css';
import {Button, Container, Form} from 'react-bootstrap';
export const App = () => {
  return (
    <div>
      <Container>
        <Menu></Menu>
        <Main />
      </Container>
    </div>
  );
};

// export default : khi import có thể đổi tên được
// export const => khi import phải import đúng tên
