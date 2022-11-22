import React, {useEffect} from 'react';
import Menu from '../components/Menu2';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../components/ProductItem';
import styles from '../css/Product.module.css';
import {getListFavourite} from '../../redux/shopAppRedux/productSlice';
export default function FavouriteList() {
  const proudctList = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFavourite());
  }, []);
  return (
    <div className='bodyProduct'>
      <Menu />
      <div className={styles.wrapProductList}>
        {/* {proudctList
          .filter((i) => {
            return i.isFavourite === true;
          })
          .map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })} */}
      </div>
    </div>
  );
}
