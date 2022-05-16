import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/tmovie.png'
import './Header.scss'

function Header() {

  return (
    <Navbar className='header'>
        <Container className='header__wrap'>
            <div className='logo'>
                <img src={logo} alt=''/>
                <Navbar.Brand>
                    <Nav.Link href='/'>tMovies</Nav.Link>
                </Navbar.Brand>
            </div>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <ul className='header__nav'>
                        <li><Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item></li>
                        
                        <li><Nav.Item><Nav.Link href='/movies'>Movies</Nav.Link></Nav.Item></li>
                        
                        <li><Nav.Item><Nav.Link href='/tv'>TV Series</Nav.Link></Nav.Item></li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
  )
}

export default Header