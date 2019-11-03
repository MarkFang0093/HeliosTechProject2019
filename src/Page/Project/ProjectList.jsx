import React from "react";
import Card from "../../Component/Card";
import data from "../../data/projectData";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./project-list.scss";

const ProjectList = () => {
  let history = useHistory();

  const handleCardClick = () => {
    history.push("projects");
  };

  console.log("this is date", data[0].date);
  return (
    <div className="item_list">
      {data.map(d => (
        <Link
          to={`/projects/${d.id}`}
          key={d.id}
          textDecoration="none"
          className="item"
        >
          <Card title={d.title} summary={d.summary} id={d.id} date={d.date} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
