import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Portrait from './images/filip_portrait.jpg'
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
    minHeight: '80vh',
  },
}));
function Introduction(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}
      direction="column"
      alignItems="center"
      justify="center">
      <Grid item xs={12} className={classes.jumbotron}>
        <h1>Filip Huhta</h1>
        <h2>Full Stack Developer</h2>
        <img className="portrait" src={Portrait} 
        alt="profile"/>
      </Grid>
    </Grid>
  )
}

export default Introduction;