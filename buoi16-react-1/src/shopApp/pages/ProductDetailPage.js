import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Menu from '../components/Menu2';
import {customAxios} from '../config/api';
export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;
  const [detailProduct, setdetailProduct] = useState(null);
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const dataDetail = await customAxios.get(`/products/${productId}.json`);
      setdetailProduct(dataDetail.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Menu></Menu>
      <div>
        <h>Detail of {detailProduct?.title}</h>
        <p>{detailProduct?.description}</p>
        <p>{detailProduct?.price}</p>
        <img width={200} height={200} src={detailProduct?.image} alt='' />
      </div>
    </Container>
  );
}
