import logo from '../logo-blue-320.png';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { signFormChanger } from '../redux/signFormReducer';

const Navibar = () => {
    const signInState = useSelector(state => state.rootReducer.signForm.signIn)
    const dispatch = useDispatch()
    const displayHidder = {
        display: 'none'
    }
    if (signInState) {
        displayHidder.display = 'none'
    } else {
        displayHidder.display = 'block'
    }

    return (
        <>
            <Navbar collapseOnSelect expand='lg' className="bg-dark" variant='dark'>
                <Navbar.Brand><img src={logo} alt="Pokemon logo" />Catch'em all!</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link><Link to="/?">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/favourite">Favourite</Link></Nav.Link>
                        <Nav.Link><Link to="/search">Search</Link></Nav.Link>
                        <Nav.Link style={displayHidder}><Link to="/sign_up">Sign up</Link></Nav.Link>
                        {
                            (!signInState) ? <Nav.Link ><Link to="/sign_in">Sign in</Link></Nav.Link> :
                                <Nav.Link onClick={(()=>dispatch(signFormChanger()))}><Link to="/?">Log out</Link></Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navibar;