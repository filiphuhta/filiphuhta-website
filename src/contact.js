import React from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: theme.spacing(5),
    paddingTop: '10%',
    textAlign: 'center',
  },
  faIcons: {
    padding: '2rem',
  },
}));
function Contact (props) {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={[classes.root, "bottom-jumbotron"]}
    alignItems="center"
    justify="center">
      <Grid item xs={12} >
      <h2> I'm always open for new opportunities!</h2>
<Button color="secondary" href="mailto:hello@filiphuhta.se">Contact me</Button>
<div className="fa-icons-container">
<a href="https://www.linkedin.com/in/filip-huhta-77b1a01a5/"><FontAwesomeIcon className={classes.faIcons} icon={faLinkedin}/></a>
<a href="https://github.com/filiphuhta"><FontAwesomeIcon className={classes.faIcons} href="https://github.com/filiphuhta" icon={faGithub}/></a>
<a href="https://stackoverflow.com/users/15113491/filip-huhta"><FontAwesomeIcon className={classes.faIcons}  icon={faStackOverflow}/></a>
</div>
      </Grid>
    </Grid>
  )
}

export default Contact;