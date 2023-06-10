import React from 'react';
import './App.css';
import {Switch, Route,Redirect } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/ShopPage';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { auth ,createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from "react-redux";
import {setCurrentUser} from "../src/redux/user/user.actions"


class App extends React.Component {

  unsubscribefromAuth = null

  componentDidMount(){
  const {setCurrentUser} = this.props
   this.unsubscribefromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
                        id:snapShot.id
                        ,...snapShot.data()
              })
          })
        }
      else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    const {currentUser} = this.props
  return (
    
    <div>
        <Header/>
        <Switch>
        <Route exact  path="/" component={Homepage} />
        <Route  path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={ ()=>currentUser?(<Redirect to='/' />):<SignInAndSignUp />} />
        </Switch>
    </div>
  );
}
}

const mapStateToProps =({user}) =>({
  currentUser:user.currentUser

})

const mapDispatchtoProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,mapDispatchtoProps)(App);
