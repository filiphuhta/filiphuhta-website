// App.jsx

import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';
import Navbar from './navbar.js'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Teal from '@material-ui/core/colors/teal';
import Contact from './contact.js';
import Introduction from './introduction.js';


const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "3rem"
    }
  },
  palette: {
    primary: {
      main: 'rgb(245,255,250)'
    },
    secondary: {
      main: Teal[600],
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
          <Contact/>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;