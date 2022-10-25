import React from 'react';
import {Container} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import Menu from '../components/Menu2';
import styles from '../css/Cart.module.css';
import {currencyFormat} from '../ultils/constant';
export default function CartPage() {
  const cartReducer = useSelector((state) => state.cartReducer);
  const totalCart = cartReducer.productList.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);
  return (
    <Container>
      <div>
        <Menu />
        <ul>
          {cartReducer.productList.map((item, index) => {
            return (
              <li className={styles.cartItem} key={index + 'cart'}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.quantity}>x{item.quantity}</p>
              </li>
            );
          })}
        </ul>
        <li className={styles.cartItem} style={{backgroundColor: 'red'}}>
          <h4 style={{color: 'white'}}>Total:</h4>
          <h3 style={{color: 'white'}}> {currencyFormat(totalCart)}</h3>
        </li>
      </div>
    </Container>
  );
}
