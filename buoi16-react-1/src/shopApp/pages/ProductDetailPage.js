import React from 'react';
import {Container} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Menu from '../components/Menu2';
export default function ProductDetailPage() {
  const products = useSelector((state) => state?.productReducer);
  const params = useParams();
  const productId = parseInt(params.proudctId);
  const productItem = products.find((i) => i.id === productId);
  console.log(productItem);
  return (
    <Container>
      <Menu></Menu>
      <div>
        <h>Detail of {productItem.title}</h>
        <p>{productItem.description}</p>
        <p>{productItem.price}</p>
      </div>
    </Container>
  );
}
