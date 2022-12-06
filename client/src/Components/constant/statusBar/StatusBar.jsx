import React from "react";
import "./StatusBar.scss";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import StatusStep from "./StatusStep";

const StatusBar = (props) => {
  return (
    <div className="status_bar">
      <div className="status">
        <div className="status_track">
          {props.status.map((item, index) => (
            <div key={index}>
              <StatusStep
                key={index}
                status={item}
                updateStep={props.updateStep}
                selected={props.currentStep === index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
