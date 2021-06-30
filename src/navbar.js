import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountTree from '@material-ui/icons/AccountTree';
import Description from '@material-ui/icons/Description';
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
  },
  menu: {
    backgroundColor: 'rgba(245,255,250, 0.7)',
  },
}));
function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Filip huhta
          </Typography>
          <Menu
            color="primary"
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={classes.menu} onClick={handleClose}><Link to="/" className="item">Projects </Link><AccountTree /></MenuItem>
            <MenuItem className={classes.menu} onClick={handleClose}><Link to="/articles" className="item">Articles</Link><Description /></MenuItem>
            <MenuItem className={classes.menu} onClick={handleClose}><Link to="/about" className="item">About</Link><AccountCircle /></MenuItem>
          </Menu>

          <IconButton edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;