import { useState } from 'react';

import Button from '../button/button.component';

import './cart-dropdown.styles.scss'

const CartDropdown = ({ children }) => {

    return (
        <div className='cart-dropdown-container' >
            <div className="cart-items">
                { children }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;