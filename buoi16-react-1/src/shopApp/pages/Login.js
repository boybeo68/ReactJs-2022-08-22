import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import Menu from '../components/Menu2';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from '../../redux/shopAppRedux/userSlice';
import Parent from '../components/Parent';
import Child from '../components/Child';
import {customAxios} from '../config/api';
import axios from 'axios';
import {API_KEY} from '../ultils/constant';
import {auth} from '../config/firebase';
import {signInWithEmailAndPassword, } from 'firebase/auth';

import {useNavigate} from 'react-router-dom';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector((state) => state.userReducer.token);
  const submit = async () => {
    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        },
      );
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(res.data));
      navigate('/products');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Menu></Menu>
      {token != null ? (
        <Button
          onClick={() => {
            dispatch(logout());
            auth.signOut();
          }}
        >
          Logout
        </Button>
      ) : (
        <div className='login'>
          <p>Email</p>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Pass</p>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={() => submit()}>Login</Button>
        </div>
      )}
    </Container>
  );
}
