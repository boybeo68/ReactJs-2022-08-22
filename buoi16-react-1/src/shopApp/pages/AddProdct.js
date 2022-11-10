import React, {useEffect, useState, useRef} from 'react';
import Menu from '../components/Menu2';
import {Form, Button, Card, Container} from 'react-bootstrap';
import {customAxios} from '../config/api';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../redux/shopAppRedux/productSlice';
// redux pattern
export default function AddProdct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageData, setimageData] = useState('');
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);
  const pRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = dispatch(
      addProduct({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        image: imageData,
        isFavourite: false,
      }),
    )
      .unwrap()
      .then((res) => navigate('/shopapp'))
      .catch((e) => console.log('error data', e));
  };
  return (
    <Container>
      <Menu />
      <h1>Add products</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            ref={titleRef}
            name='title'
            type='text'
            placeholder='Nhập title product'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            ref={descriptionRef}
            name='description'
            as='textarea'
            rows={4}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Price:</Form.Label>
          <Form.Control ref={priceRef} name='price' type='number' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Image:</Form.Label>
          <Form.Control
            value={imageData}
            ref={imageRef}
            onChange={(e) => setimageData(e.target.value)}
            name='image'
            type='text'
          />
          <img width={300} height={300} src={imageData} alt='' srcset='' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Add product
        </Button>
      </Form>
    </Container>
  );
}
