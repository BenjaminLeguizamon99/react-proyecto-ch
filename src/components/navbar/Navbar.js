import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import {NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget'
import {Link} from 'react-router-dom'


function Barra() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md'>
        <div className='container'>
            <NavbarBrand>
              <Link to='/' className='titulo-nav'>
                <h4 className='link'>Tienda de Snowboard & Ski</h4>
              </Link>
            </NavbarBrand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <Link to='/' className='mx-3 link'>Home</Link>
                    <Link to='/about' className='mx-3 link'>About</Link>
                    <Link to='/contact' className='mx-3 link'>Contact</Link>
                    <Nav.Link className='mx-1'>
                      <CartWidget />  
                      Mis compras
                    </Nav.Link>
                    
                    {/* <NavDropdown title='Snowboard' className='mx-3'>
                        <NavDropdown.Item>All mountain</NavDropdown.Item>
                        <NavDropdown.Item>Freestyle</NavDropdown.Item>
                        <NavDropdown.Item>Freeride</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todas las tablas</NavDropdown.Item>
                    </NavDropdown> */}
{/* 
                    <NavDropdown title='Ski' className='mx-3'>
                        <NavDropdown.Item>All mountain</NavDropdown.Item>
                        <NavDropdown.Item>Freestyle</NavDropdown.Item>
                        <NavDropdown.Item>Pista</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todas los skies</NavDropdown.Item>
                    </NavDropdown> */}
                    
                    {/* <NavDropdown title='Indumentaria' className='mx-3'>
                        <NavDropdown.Item>Camperas</NavDropdown.Item>
                        <NavDropdown.Item>Pantalones</NavDropdown.Item>
                        <NavDropdown.Item>Cascos</NavDropdown.Item>
                        <NavDropdown.Item>Gafas</NavDropdown.Item>
                        <NavDropdown.Item>Accesorios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todos</NavDropdown.Item>
                    </NavDropdown>   */}

                    
                </Nav>
            </Navbar.Collapse>
            
        </div>
        
      </Navbar>
    </>
  );
}

export default Barra;