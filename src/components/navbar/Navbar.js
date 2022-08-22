import './navbar.css'
import logo from './logo-del-local.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import {FaSkiing, FaSnowboarding, FaTshirt} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';

function Barra() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md'>
        <div className='container'>
            <NavbarBrand>
                {/* <img src={logo} className='navbar-logo' /> */}
                Tienda de Snowboard & Ski
            </NavbarBrand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <Nav.Link className='mx-3'>
                        <div>
                           <AiFillHome  className='mx-2'/>
                           Home 
                        </div>
                    </Nav.Link>
                    <Nav.Link className='mx-3'>
                        <div>
                           <FaSnowboarding className='mx-2' />
                           Snowboard 
                        </div>
                    </Nav.Link>
                    <Nav.Link className='mx-3'>
                        <FaSkiing className='mx-2' />
                        Ski
                    </Nav.Link>
                    <Nav.Link className='mx-3'>
                        <FaTshirt className='mx-2' />
                        Indumentaria
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </div>
        
      </Navbar>
    </>
  );
}

export default Barra;