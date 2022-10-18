import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function Menu() {
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
            <Nav.Link href='#link'>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
