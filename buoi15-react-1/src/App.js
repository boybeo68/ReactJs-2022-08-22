import logo from './logo.svg';
import {
  useNavigate,
  Link,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faAirFreshener,
  faAddressBook,
  faCloud,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';

import './App.css';
const students = [
  {name: 'Tung', age: 20, sex: 1, id: 1},
  {name: 'Cuong', age: 30, sex: 0, id: 2},
];
const App = () => {
  const navigate = useNavigate();
  const params = {sort: 'date', order: 'newest'};
  return (
    <div className='body'>
      <ul>
        {students.map((item, index) => {
          return (
            <li
              onClick={() => {
                navigate({
                  pathname: '/product/' + item.id,
                  search: `?${createSearchParams(params)}`,
                });
              }}
              className='testStyle'
            >
              {item.name}
            </li>
          );
        })}
        <li className='testStyle'>
          <h3>
            <FontAwesomeIcon icon={faAddressCard} color='blue' /> Font Awesome
            Address Icon
          </h3>

          <h3>
            <FontAwesomeIcon icon={faAddressBook} color='green' /> Font Awesome
            Solid Icon
          </h3>
          <h3>
            <FontAwesomeIcon icon={faSpinner} color='green' />
          </h3>
          <i className='fa fa-solid fa-address-book'></i>
        </li>
      </ul>
      <div className='card' style={{width: '300px'}}>
        <img
          src={'https://picsum.photos/200'}
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='http://localhost:3000/product/1' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
      <Button
        variant='primary'
        onClick={() => {
          alert('test');
        }}
      >
        Primary
      </Button>{' '}
    </div>
  );
};

export default App;
