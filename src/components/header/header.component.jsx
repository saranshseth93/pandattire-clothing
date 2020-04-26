import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from '../../assets/pandattire.svg';
import './header.style.scss';

import './header.component';

import {auth} from '../../firebase/firebas.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {selectCurrentUser} from '../../redux/user/user.selector';

const Header = ({currentUser, hidden}) => (
<div className='header'>
    <Link to='/' className='logo-container'>
        <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }

        <CartIcon />
    </div>
    {
        hidden ? null : <CartDropdown /> 
    }
</div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);