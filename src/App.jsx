import React from "react";
import Project from "./Page/Project";
import Home from "./Page/Home";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import ProjectDetails from "./Page/ProjectDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
