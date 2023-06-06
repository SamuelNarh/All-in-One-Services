import React from "react";
import './Header.scss';
import {Link} from 'react-router-dom';
import { auth } from "../../firebase/firebase.utils";
// import Logo from './logo.png'

const Header =({currentUser})=>{
    return(
 <div className="header ">
      <Link className="logo-container" to="/">
    HOME
      </Link>
        <div className="options">
        <Link className="option" to="/shop">
            SHOP
        </Link>
        <Link className="option" to="/shop">
            CONTACT
        </Link> 
        {
          currentUser ?
          <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
          : <Link className="option" to="/signin"> SIGN IN</Link>
        }  
        </div>
    </div>
)
}


export default Header;