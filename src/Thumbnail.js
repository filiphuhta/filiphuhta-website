import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
});

function Thumbnail(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardActionArea>
    <Link to={props.link}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Project-img"
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
              <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="secondary">
        Read More
      </Button>
      <Button size="small" color="secondary">
        Learn More
      </Button>
    </CardActions>
  </Card>
  )
}
 
export default Thumbnail;