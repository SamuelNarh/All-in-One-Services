import React from 'react';
import './App.css';
import {Switch, Route } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/ShopPage';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { auth ,createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super();
    this.state ={
      currentUser : null
    }
  }

  unsubscribefromAuth = null

  componentDidMount(){
   this.unsubscribefromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser : {id:snapShot.id
                        ,...snapShot.data()}
          },()=>{console.log(this.state)})
        })
        
      }
      else{
        this.setState({currentUser:userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact  path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
    </div>
  );
}
}

export default App;
