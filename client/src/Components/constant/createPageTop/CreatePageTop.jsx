import React from "react";
import "./CreatePageTop.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";


const CreatePageTop = ({
  title,
  backLink,
  nextStepLink,
  icon,
  nextStepTitle,
}) => {
  return (
    <div className="create_top">
      {/* top */}
      <div className="create_wrapper">
        <div className="back_link">
          <Link to={`${backLink}`}>
            <ArrowBackIcon className="icon" />
            <p>Back</p>
          </Link>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="next_step">
          <Link className="link">
            <span> {nextStepTitle}</span>
            <p>{icon}</p>
          </Link>
        </div>
      </div>
      {/* stepper container  */}
      <div className="create_title"></div>
      <div className="create_continue-button"></div>
    </div>
  );
};

export default CreatePageTop;
