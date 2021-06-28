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
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
 

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "3rem"
    }
  },
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: pink[500]
    }
  }
});

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar></Navbar>    
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
  
        </ThemeProvider>                             
      </div>
    </BrowserRouter>
  );
}
 
export default App;