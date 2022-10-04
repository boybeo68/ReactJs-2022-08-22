import React, {useState} from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {addProduct, deleteProduct, editProduct} from './productSlice';

export default function Product() {
  const productsList = useSelector((state) => state.productReducer);
  console.log('bb', productsList);
  const [title, setTitle] = useState('');
  const [price, setprice] = useState();
  const dispatch = useDispatch();
  return (
    <Container>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type='text'
            placeholder='Title'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type='text'
            placeholder='price'
          />
        </Form.Group>
        <Button
          onClick={() => {
            dispatch(addProduct({title: title, price: price}));
          }}
          variant='primary'
        >
          add
        </Button>
      </Form>
      <ul>
        {productsList.map((i, index) => {
          return (
            <Row>
              <Col xm={8}>{i.title}</Col>
              <Col xm={2}>
                {' '}
                <Button
                  onClick={() => dispatch(deleteProduct({id: i.id}))}
                  variant='danger'
                >
                  {' '}
                  Delete
                </Button>{' '}
              </Col>
              <Col xm={2}>
                {' '}
                <Button
                  onClick={() =>
                    dispatch(
                      editProduct({
                        id: i.id,
                        title: 'da edit',
                        price: 'da edit',
                      }),
                    )
                  }
                  variant='primary'
                >
                  {' '}
                  edit
                </Button>{' '}
              </Col>
            </Row>
          );
        })}
      </ul>
    </Container>
  );
}
