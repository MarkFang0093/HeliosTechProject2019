import React from "react";
import data from "../../data/projectData";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProjectDetails = ({ match }) => {
  const classes = useStyles();
  console.log("hello");
  console.log(match.params.id);
  const contents = data[match.params.id];
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {contents.title}
        </Typography>
        <Typography component="p">{contents.body}</Typography>
      </Paper>
    </div>
  );
};

export default ProjectDetails;
