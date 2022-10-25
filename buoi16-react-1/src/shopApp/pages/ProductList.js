import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu2';
import {useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';
import styles from '../css/Product.module.css';
import {SORT_BY} from '../ultils/constant';
import {createSearchParams, useNavigate} from 'react-router-dom';
export default function ProductList() {
  const [sortBy, setsortBy] = useState(null); //desc
  const [productState, setproductState] = useState(null);
  const proudctList = useSelector((state) => state.productReducer);
  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get('price');
  useEffect(() => {
    setproductState(proudctList);
  }, []);

  useEffect(() => {
    if (query && productState) {
      const cloneState = [...productState];

      cloneState.sort((a, b) =>
        query === SORT_BY.asc ? a.price - b.price : b.price - a.price,
      );
      setproductState(cloneState);
    }
  }, [query]);

  const navigate = useNavigate();
  const changeSort = (sort) => {
    setsortBy(sort);
    const params = {price: sort};
    navigate({
      pathname: '/products',
      search: `?${createSearchParams(params)}`,
    });
  };
  return (
    <div className='bodyProduct'>
      <Menu />
      <div className={styles.sort}>
        <span
          onClick={() => changeSort(SORT_BY.asc)}
          className={styles.sortPrice}
          style={{color: sortBy === SORT_BY.asc ? 'orange' : 'black'}}
        >
          Giá từ thấp đến cao
        </span>
        <span
          onClick={() => changeSort(SORT_BY.desc)}
          className={styles.sortPrice}
          style={{color: sortBy === SORT_BY.desc ? 'orange' : 'black'}}
        >
          Giá từ cao đến thấp
        </span>
      </div>
      <div className={styles.wrapProductList}>
        {productState &&
          productState?.map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
