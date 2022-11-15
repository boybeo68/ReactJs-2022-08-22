import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
function Menu() {
  const cartData = useSelector((state) => state.cartReducer);
  const token = useSelector((state) => state.userReducer.token);

  const getTotalItem = cartData?.productList?.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Shop App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='menu-link' to='/products'>
              Home
            </Link>
            <Link className='menu-link' to='/favourite'>
              Favourite
            </Link>
            <Link className='menu-link' to='/add-product'>
              Add product
            </Link>
            <Link className='menu-link' to='/chat'>
              Chat
            </Link>
            <Link className='menu-link' to='/login'>
              {token != null ? 'Logout' : 'Login'}
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>{getTotalItem}</span>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Menu;
