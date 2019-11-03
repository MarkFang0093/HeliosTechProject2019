import React from "react";
import ProjectList from "./ProjectList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Layout from "../../Layout";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Project = () => {
  const classes = useStyles();

  return (
    <div>
      <Layout>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Title of the project
          </Typography>
          <Typography component="p">Explanation of the project.</Typography>
        </Paper>
        <ProjectList />
      </Layout>

    </div>
  );
};

export default Project;
