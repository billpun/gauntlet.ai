import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import {} from "@elastic/eui";

const Project = () => {
  const { key } = useParams();

  return (
    <Fragment>
      <div>Project {key}</div>
    </Fragment>
  );
};

export default Project;
