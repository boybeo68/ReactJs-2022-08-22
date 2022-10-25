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

  const getTotalItem = cartData.productList.reduce((a, b) => {
    return a + b.quantity;
  }, 0);

  console.log(cartData.productList);
  console.log(getTotalItem);
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Shop App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to='/products'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/favourite'>Favourite</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link>
          <Link to={'/cart'}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{getTotalItem}</span>
          </Link>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Menu;
