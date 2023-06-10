import React from "react";
import './Header.scss';
import {Link} from 'react-router-dom';
import { auth } from "../../firebase/firebase.utils";
// import Logo from './logo.png'
import { connect } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import CartDropdown from "../Cart-Dropdown/Cart-Dropdown";


const Header =({currentUser,hidden})=>{
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
        <CartIcon/>
        </div>{
          hidden? null
          : <CartDropdown />
        }
        
    </div>
)
}

const mapStateToProps =({user:{currentUser},cart:{hidden}}) =>({
  currentUser,
  hidden

})

export default connect(mapStateToProps)(Header);