import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Bachelor from './images/background-bachelor.jpg'
import Bitcoin from './images/bitcoin-app.jpeg'
import ImageGallery from './images/image-gallery.jpeg'
import FirstReactApp from './images/react-app.jpeg'
import Website from './images/website.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: theme.spacing(5),
    marginTop: 50,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Projects(props) {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={5}
        direction="column"
        alignItems="center"
        justify="center">
        <Grid item xs={12} >
        <h1 className="text-border text-write-animation" >Projects</h1>
  <div className="about-border"></div>

          <Thumbnail
            link="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1435711&dswid=3040"
            image={Bachelor}
            title="Bachelors thesis"
            text="Reactive systems : A solution for Wangiri fraud."
          />
        </Grid>
        <Grid item xs={12} >

          <Thumbnail
            link="https://github.com/filiphuhta/bitcoin-live-chart"
            image={Bitcoin}
            title="Cryptocurrency real-time pricing application"
            text="This is an application for displaying real-time cryptocurrency prices. The application is made with React and CoinCap API 2.0."
          />
        </Grid> <Grid item xs={12} >

          <Thumbnail
            link="https://github.com/filiphuhta/Image-gallery-app/"
            image={ImageGallery}
            title="Image gallery application"
            text="This is an application for displaying images on a webpage. It uses pure Javascript as Frontend and Node.js as backend. The application uses flickrs API to get the images."
          />
        </Grid> <Grid item xs={12} >

          <Thumbnail
            link="https://github.com/filiphuhta/my-first-react-app"
            image={FirstReactApp}
            title="My first React application"
            text="I have used the introduction to React tutorial, to build an interactive tic-tac-toe game. Which I have styled with bootstrap."
          />
        </Grid> <Grid item xs={12} >

          <Thumbnail
            link="https://github.com/filiphuhta/filiphuhta-website"
            image={Website}
            title="My Website (filiphuhta.se)"
            text="This site was made by React, Babel, Material UI and Yarn."
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;