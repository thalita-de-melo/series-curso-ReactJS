import React, {useState} from 'react'
import {
    Navbar,
    NavbarBrand,
    Collapse, 
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
  } from 'reactstrap'
import {Link} from 'react-router-dom'
  
  const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
      setOpen(!open)
    }
    return(
      <Navbar color='light' light expand='md'>
        <div className="container">
            <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
            <NavbarToggler />
            <Collapse isOpen={true} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink tag={Link} to='/Generos'>Genêros</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/Series'>Séries</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
    )
  }

  export default Header