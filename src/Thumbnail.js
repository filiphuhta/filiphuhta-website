import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: 'rgb(245,255,250)'
  },
  media: {
    height: 250,
  },
  button: {
    width: '100%',
  }
});

function Thumbnail(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Project-img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.link} className={classes.button} color="secondary">
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Thumbnail;