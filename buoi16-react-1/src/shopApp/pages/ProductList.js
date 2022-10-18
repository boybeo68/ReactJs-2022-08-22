import React from 'react';
import Menu from '../components/Menu2';
import {useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';
import styles from '../css/Product.module.css';
export default function ProductList() {
  const proudctList = useSelector((state) => state.productReducer);
  return (
    <div className='bodyProduct'>
      <Menu />
      <div className={styles.wrapProductList}>
        {proudctList.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
