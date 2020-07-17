import React from 'react';
import './App.css';
import about from "./pages/about.js";
import contact from "./pages/contact.js";
import portfolio from "./pages/portfolio.js";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/Navbar';

function App() {
  return (
    <HashRouter basename='/'>
      <NavigationBar />
    <div>
 
 
     <hr />
     <Route exact path="/" component={about}  />
     <Route path="/contact" component={contact} />
     <Route path="/portfolio" component={portfolio} />
    </div>
   </HashRouter>
  );
}

export default App;
