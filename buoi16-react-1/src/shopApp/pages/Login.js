import React from 'react';
import {Container, Button} from 'react-bootstrap';
import Menu from '../components/Menu2';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from '../../redux/shopAppRedux/userSlice';
import Parent from '../components/Parent';
import Child from '../components/Child';

export default function Login() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer.token);
  return (
    <Container>
      <Menu></Menu>
      {token != null ? (
        <Button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(login());
          }}
        >
          Login
        </Button>
      )}
    </Container>
  );
}
