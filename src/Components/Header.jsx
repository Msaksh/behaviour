import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ onStartNowClick, showGetInTouchButton }) => {
  return (
    <Navbar expand="lg" className="">
      <Container className='py-4'>
        <Navbar.Brand href="#">
          <img src="assets/img/logo_dark.png" alt="Logo" className='logoImg' />
        </Navbar.Brand>
        {showGetInTouchButton && <Navbar.Toggle aria-controls="navbarScroll" />}
        {showGetInTouchButton && <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <button className="btn rounded-5 fw-medium fs-4 px-5 py-2 btn-greenIsColor" onClick={() => onStartNowClick('GetInTouch')}>Get In Touch</button>
        </Navbar.Collapse>}


      </Container>
    </Navbar>
  );
};

export default Header;
