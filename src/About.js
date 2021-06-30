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
function About(props) {
  const classes = useStyles();

  const techStack = ['Java', 'Angular', 'React', 'HTML',
    'CSS', 'DOCKER', 'TypeScript',
    'JavaScript', 'ArcGIS', 'Scrum',
    'Kafka', 'C#', 'SQL', 'Robot Framework', 'SASS'];
  const techStackItems = techStack.map((item) =>
    <Chip className={classes.chip} color="secondary" label={item} />
  );

  return (
    <Grid container spacing={5} className={classes.root}
      direction="column"
      alignItems="center"
      justify="center">
      <Grid item xs={12} className={classes.jumbotron}>
        <h1>Hi! I'm Filip</h1>
        <p>I'm a developer from the northern part of Sweden, with a bachelor's degree in systems sciences.
          My spare time involves a lot of exercise, spend time with my family, and some downhill skiing
          in the winter. I'm currently working as a Scrum Master and Full Stack developer. When I have
          time over I'm trying to learn React.</p>
        <h2>Tools and techniques im familliar with:</h2>
        <div>
          {techStackItems}
        </div>

      </Grid>
    </Grid>
  )
}

export default About;