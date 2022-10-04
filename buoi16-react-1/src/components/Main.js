import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
// data và render của react.
// let number = 20;
function Main() {
  const [numberOfGuess, setNumberOfGuess] = useState(0);
  const [inputValue, setInputValue] = useState(null);
  const resetGame = () => {
    setNumberOfGuess(0);
  };
  const guess = () => {
    setNumberOfGuess(numberOfGuess + 1);
  };
  const changeInput = (e) => {
    setInputValue(e.target.value ? parseInt(e.target.value) : null);
  };
  return (
    <div className='main'>
      <Row>
        {' '}
        <Button onClick={resetGame} variant='success'>
          New game
        </Button>
      </Row>
      <Row>Số lần đoán của bạn là: {numberOfGuess} </Row>
      <h3>{inputValue}</h3>
      <Row>
        <Col>
          <Form.Control
            onChange={changeInput} // sẽ gọi đến mỗi khi nhập vào ô input
            value={inputValue}
            type='number'
            placeholder='Enter number'
          />
        </Col>
        <Col>
          <Button onClick={guess}>Check</Button>
        </Col>
      </Row>
      <Row>
        <p>Số lớn quá</p>
      </Row>
    </div>
  );
}

export default Main;

// react sử dụng virual dom. so sánh xem data có thực sự thay đổi hay không thì mới cập nhật UI
// => state: trạng thái => data trong component
