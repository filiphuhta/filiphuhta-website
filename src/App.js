// App.jsx
 
import React from 'react';
import logo from './assets/logo-filip-huhta.png';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';
import Navbar from './navbar.js'
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar></Navbar>    
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
  
                                      
      </div>
    </BrowserRouter>
  );
}
 
export default App;