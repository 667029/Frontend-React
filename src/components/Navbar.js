import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/userSlice';

const Navbar = () => {
    const { isLoggedIn } = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    return <Nav className='navbar' style={{ backgroundColor: '#e4fff2' }}>
        <h1 style={{ fontFamily: 'Brush Script MT, cursive' }}>My Expenses</h1>
        {isLoggedIn
            ? <Button variant='link' href='/signin' onClick={() => { dispatch(logout()) }}>Log out</Button>
            : <div style={{ display: 'flex' }}>
                <NavLink to="/signup">Sign up</NavLink>
                <NavLink to="/signin" style={{ marginLeft: '1rem' }}>Sign in</NavLink>
            </div>}
    </Nav >
};

export default Navbar;