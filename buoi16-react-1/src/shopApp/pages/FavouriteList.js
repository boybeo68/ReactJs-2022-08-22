import React, {useEffect} from 'react';
import Menu from '../components/Menu2';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../components/ProductItem';
import styles from '../css/Product.module.css';
import {getListProduct} from '../../redux/shopAppRedux/productSlice';
export default function FavouriteList() {
  const proudctList = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, []);
  return (
    <div className='bodyProduct'>
      <Menu />
      <div className={styles.wrapProductList}>
        {proudctList?.favourites
          ? proudctList?.favourites?.map((item) => {
              return <ProductItem key={item.id} item={item} />;
            })
          : null}
      </div>
    </div>
  );
}
