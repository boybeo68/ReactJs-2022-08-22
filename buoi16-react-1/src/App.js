import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';
import './App.css';
export const App = () => {
  return (
    <div>
      <Menu />
      <Main />
      <Footer />
    </div>
  );
};

// export default : khi import có thể đổi tên được
// export const => khi import phải import đúng tên
