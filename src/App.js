import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage';

const Nextpage= () =>(
  

    <div>
    <h1> Homepage</h1> 
    
    </div>
)

function App() {
  return (
    <div>
        <Route exact  path="/" component={Homepage} />
        <Route exact path="shop/hats" component={Nextpage} />
    </div>
  );
}

export default App;
