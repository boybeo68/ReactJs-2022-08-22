import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {currencyFormat} from '../ultils/constant';
import {faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import styles from '../css/Product.module.css';
import {useDispatch} from 'react-redux';
import {favouriteProduct} from '../../redux/shopAppRedux/productSlice';
import {addCart} from '../../redux/shopAppRedux/cartSlice';
function ProductItem(props) {
  const dispatch = useDispatch();
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant='top' src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Subtitle>{currencyFormat(props.item.price)}</Card.Subtitle>
        <Card.Text>{props.item.description}</Card.Text>
        <Button variant='primary'>Go product detail</Button>
        <span
          style={{cursor: 'pointer'}}
          onClick={() => {
            dispatch(favouriteProduct(props.item.id));
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
