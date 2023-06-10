import React from 'react'
import './Cart-Dropdown.scss'
import CustomButton from '../Custom-button/Custom-button'

const CartDropdown = () =>{
    
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>

    )

}

export default CartDropdown;