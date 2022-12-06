import React from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const StatusStep = (props) => {
  return (
    <div
      key={props.index}
      className={"stepBlock" + (props.selected ? " selected" : "")}
    >
      <div
        className="circleWrapper"
        onClick={() => props.updateStep(props.index + 1)}
      >
        <PanoramaFishEyeIcon className="circle" />
      </div>
      <span className="circle">{props.status}</span>
    </div>
  );
};

export default StatusStep;
