import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: theme.spacing(5),
    paddingTop: '10%', 
    textAlign: 'center',
    color: 'white',
  },
  jumbotron: {
    maxWidth: 700,
  },
  chip: {
    margin: '0.5rem',
    fontSize: '1rem',
  },
}));
function Articles(props) {
    const classes = useStyles();
  
    return (
      <Grid container spacing={5} className={classes.root}
      direction="column"
      alignItems="center"
      justify="center">
          <Grid item xs={12} className={classes.jumbotron}>
    <h1>Woops!</h1>
    <p>This page is not done yet and under construction.</p>
          </Grid>
          </Grid>
    )
  }
 
export default Articles;