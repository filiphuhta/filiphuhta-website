import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
 
function Projects(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
  
          <Thumbnail
  link="/photoshop"
  image="https://bookdown.org/gmli64/do_a_data_science_project_in_10_days/images/tree.PNG"
  title="Photoshop Redesign"
  category="Desktop App"
/>
        </Grid>
        <Grid item xs={12}>
          <Thumbnail
  link="/photoshop"
  image="https://bookdown.org/gmli64/do_a_data_science_project_in_10_days/images/tree.PNG"
  title="Photoshop Redesign"
  category="Desktop App"
/>
        
        </Grid>
        <Grid item xs={12}>
          <Thumbnail
  link="/photoshop"
  image="https://bookdown.org/gmli64/do_a_data_science_project_in_10_days/images/tree.PNG"
  title="Photoshop Redesign"
  category="Desktop App"
/>
        </Grid>
      </Grid>
    </div>
  );
}
 
export default Projects;