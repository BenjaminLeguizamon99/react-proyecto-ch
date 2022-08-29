import './navbar.css'
import logo from './logo-del-local.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import {FaSkiing, FaSnowboarding, FaTshirt} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget'

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
                    <Nav.Link className='mx-3'>Home</Nav.Link>
                    <NavDropdown title='Snowboard' className='mx-3'>
                        <NavDropdown.Item>All mountain</NavDropdown.Item>
                        <NavDropdown.Item>Freestyle</NavDropdown.Item>
                        <NavDropdown.Item>Freeride</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todas las tablas</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title='Ski' className='mx-3'>
                        <NavDropdown.Item>All mountain</NavDropdown.Item>
                        <NavDropdown.Item>Freestyle</NavDropdown.Item>
                        <NavDropdown.Item>Pista</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todas los skies</NavDropdown.Item>
                    </NavDropdown>
                    
                    <NavDropdown title='Indumentaria' className='mx-3'>
                        <NavDropdown.Item>Camperas</NavDropdown.Item>
                        <NavDropdown.Item>Pantalones</NavDropdown.Item>
                        <NavDropdown.Item>Cascos</NavDropdown.Item>
                        <NavDropdown.Item>Gafas</NavDropdown.Item>
                        <NavDropdown.Item>Accesorios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todos</NavDropdown.Item>
                    </NavDropdown>  
                    <Nav.Link className='mx-1'>
                      <CartWidget />  
                      Mis compras
                    </Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
            
        </div>
        
      </Navbar>
    </>
  );
}

export default Barra;