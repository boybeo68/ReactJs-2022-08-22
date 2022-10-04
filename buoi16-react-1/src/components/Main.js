import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
// data và render của react.
// let number = 20;
function Main() {
  // let numberOfGuess = 0
  // setNumberOfGuess(numberOfGuess + 10) => numberOfGuess = numberOfGuess + 10
  const [numberOfGuess, setNumberOfGuess] = useState(0);

  const [inputValue, setInputValue] = useState(0);
  const [resultText, setResultText] = useState('');
  const [randomNumber, setRanDomNumber] = useState(
    Math.floor(Math.random() * 100 + 1),
  );
  const resetGame = () => {
    setNumberOfGuess(0);
    setInputValue(0);
    setRanDomNumber(Math.floor(Math.random() * 100 + 1));
    setResultText('');
  };
  const guess = () => {
    // đăng sau await phải là 1 promise
    console.log(numberOfGuess);
    if (numberOfGuess > 6) {
      setResultText('Bạn thua rồi');
      resetGame();
      return;
    }
    if (inputValue === randomNumber) {
      setResultText('Bạn đoán đúng rồi ');
      setNumberOfGuess(0);
      setInputValue(0);
      setRanDomNumber(Math.floor(Math.random() * 100 + 1));
      //   resetGame();
    } else if (inputValue < randomNumber) {
      setResultText('Số bạn đoán nhỏ quá rồi');
    } else {
      setResultText('So bạn đoán lớn quá rồi');
    }
    setNumberOfGuess(numberOfGuess + 1); //setState là hàm bất đồng bộ.
  };
  const changeInput = (e) => {
    console.log(e);
    setInputValue(e.target.value ? parseInt(e.target.value) : '');
  };
  return (
    <div className='main'>
      <Row>
        {' '}
        <Col xm={3}>
          <Button onClick={resetGame} variant='success'>
            New game
          </Button>
          {randomNumber}
        </Col>
      </Row>
      <Row className='mt-2'>Số lần đoán của bạn là: {numberOfGuess} </Row>
      <Row>
        <Col xs={6} xl={3}>
          {/* xử lý dữ liệu liên quan đến form - các ô input  */}
          <input
            className='inputNumber'
            onChange={changeInput} // sẽ gọi đến mỗi khi nhập vào ô input - là 1 callback function
            value={inputValue}
            type='number'
            placeholder='Enter number'
          />
        </Col>
        <Col xs={6} xl={3}>
          <button className='btn-guess' onClick={guess}>
            Guess
          </button>
        </Col>
      </Row>
      <Row>
        <p
          onClick={() => {
            alert('click vào thẻ p');
          }}
          className='mt-2'
        >
          {resultText}
        </p>
      </Row>
    </div>
  );
}

export default Main;

// react sử dụng virual dom. so sánh xem data có thực sự thay đổi hay không thì mới cập nhật UI
// => state: trạng thái => data trong component
