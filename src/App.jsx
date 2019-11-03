import React from "react";
import Project from "./Page/Project/Project";
import Home from "./Page/Home/Home";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import ProjectDetails from "./Page/Project/ProjectDetails";
import About from "./Page/About/About";
import Member from "./Page/Member/Member";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/member" component={Member} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
