import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu2';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../components/ProductItem';
import styles from '../css/Product.module.css';
import {SORT_BY} from '../ultils/constant';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {
  getListProduct,
  selectListProduct,
} from '../../redux/shopAppRedux/productSlice';
export default function ProductList() {
  const [sortBy, setsortBy] = useState(null); //desc
  const proudctList = useSelector(selectListProduct);
  const dispatch = useDispatch();

  // const queryParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

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
        {proudctList.loading === true ? (
          <p>Loading...</p>
        ) : (
          proudctList.data &&
          Object.keys(proudctList.data)?.map((key) => {
            return (
              <ProductItem key={key} item={proudctList.data[key]} id={key} />
            );
          })
        )}
        {proudctList.error && <p>{proudctList.error}</p>}
      </div>
    </div>
  );
}

// trước đây: Chưa có api.

// phát triển web: php, nodejs, java, C#: UI (web) -> DB -> UI (web)
// => mobile: UI-mobile  -> server riêng để chạy cho mobile (nodejs, java, ...) -> UI mobile
// => API: application platform interface

// DB -> xuất api : phương thức để truy câp, tương tác với dữ liệu từ dB
// api: web truy cập vào để lấy dữ liệu
// api : mobile cũng có thể truy cập vào để lấy dữ liệu
// open api: Facebook Api, Google Api, ....
// điểm a -> điểm b
// post. request: location (lat, long )A , B(lat, long) => response: list các toạ độ ở giữa  => nối vào
// thời tiết: nhập ha noi => nhiệt độ, nắng mưa...

// API được viết xong rồi. FE chỉ việc tương tác với nó
// BE và FE start cùng lúc. => FE sẽ không có api thật để ghép vào lấy data được.
// => mock api. => FE sẽ tự giả lập 1 api để có kết quả trả về. sau đó hiển thị lên giao diện.
// Có api thật của BE: Đổi url, đổi tên trường dữ liệu là được.
