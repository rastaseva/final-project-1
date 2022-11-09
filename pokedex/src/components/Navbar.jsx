import logo from '../logo-blue-320.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navibar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' className="bg-dark" variant='dark'>
                <Navbar.Brand><img src={logo} alt="Pokemon logo" />Catch'em all!</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link><Link to="/?">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/pokeball">Favourite</Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navibar;