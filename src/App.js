import {React,Component} from "react";
import Navigation from "./container/Navigation/Navigation";
import Footer from "./container/Footer/Footer";
import Home from "./container/Home/Home"
class App extends Component{
  render(){
    return(
      <div>
        <Navigation/>
        <Home/>
        <Footer/>
      </div>
    ) 
  }
}

export default App;