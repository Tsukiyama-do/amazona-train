import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import data from './data.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open')   ;
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open') ;
  }

  return (
    <BrowserRouter>
        <div className="grid-container">
        <header className="header">
          <div className="brand" >
            <button  onClick={openMenu} >
              &#9776;
            </button>
            <Link to="/"> amazona</Link>

          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>This is sidebar menu</h3>
          <button className="sidebar-close-button" onClick={closeMenu}  >X</button>
          <ul>
            <li>
              Polo Shirts
            </li>
            <li>
              Trouser
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">
          All rights reserved. 
        </footer>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
