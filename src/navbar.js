import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  links: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static" style={{ background: '#F0F0F0' }}>
      <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
            Filip huhta
          </Typography>

    <Button color="inherit"><Link to="/" className="item">Projects</Link></Button>
    <Button color="inherit"> <Link to="/articles" className="item">Articles</Link></Button>
    <Button color="inherit">  <Link to="/about" className="item">About</Link></Button>
  </Toolbar>
    </AppBar>
    </div>
  );
};
export default Navbar;