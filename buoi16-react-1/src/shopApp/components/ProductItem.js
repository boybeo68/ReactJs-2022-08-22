import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {currencyFormat} from '../ultils/constant';
import {faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import styles from '../css/Product.module.css';
import {useDispatch} from 'react-redux';
import {
  favouriteProduct,
  favouriteProducts,
} from '../../redux/shopAppRedux/productSlice';
import {addCart} from '../../redux/shopAppRedux/cartSlice';
import {useNavigate} from 'react-router-dom';
import {customAxios} from '../config/api';

function ProductItem(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate('/products/' + id);
  };

  // favouriteUser > userId > ListProduct (isFavoureite = true)
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant='top' src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Subtitle>{currencyFormat(props.item.price)}</Card.Subtitle>
        <Card.Text className={styles.maxHeight}>
          {props.item.description}
        </Card.Text>
        <Button onClick={() => goToDetail(props.id)} variant='primary'>
          Go product detail
        </Button>
        <span
          style={{cursor: 'pointer'}}
          onClick={() => {
            dispatch(favouriteProduct(props.id));
            dispatch(favouriteProducts(props.id));
          }}
          className={styles.icon}
        >
          <FontAwesomeIcon
            icon={faHeart}
            color={props.item.isFavourite ? 'red' : 'black'}
          />
        </span>
        <span
          style={{cursor: 'pointer'}}
          onClick={() => {
            dispatch(addCart({product: props.item}));
          }}
          className={styles.icon}
        >
          <FontAwesomeIcon icon={faCartPlus} color={'black'} />
        </span>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
