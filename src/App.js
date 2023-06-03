import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/ShopPage';

function App() {
  return (
    <div>
        <Route exact  path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
