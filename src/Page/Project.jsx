import React from "react";
import ProjectList from "./ProjectList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Project = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Title of the project
        </Typography>
        <Typography component="p">Explanation of the project.</Typography>
        <Typography component="p">Explanation of the project.</Typography>
      </Paper>
      <ProjectList />
    </div>
  );
};

export default Project;
