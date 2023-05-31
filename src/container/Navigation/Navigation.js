import React from "react";
// import logo from './logo.png';
import './Navigation.css';
import shoppingcart from './shopping-cart.png'

const Navigation =()=>{
    return(
        <div className="Navigation">
            <div>
            <ul>
                {/* <li> <img id="logo" src={logo} alt='logo'/></li> */}
                <li>Chester Mall</li>
            </ul>
            </div>
            <div>
                <ul className="items">
                    <li>About</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li><img src={shoppingcart} alt="" id="shopping-cart"/> <span>0</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;