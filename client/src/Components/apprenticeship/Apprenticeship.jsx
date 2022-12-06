import React, { useState } from "react";
import CreatePageTop from "../constant/createPageTop/CreatePageTop";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "./Apprenticeship.scss";
import StatusBar from "../constant/statusBar/StatusBar";

const Apprenticeship = () => {
  const labelArray = [
    "Company Title & Desc.",
    "Team Type",
    "Team Roles",
    "Team Admin",
    "Timeline",
  ];
  const [currentStep, updateCurrentStep] = useState(1);

  // update steps function
  const updateStep = (step) => {
    updateCurrentStep(step);
  };

  return (
    <div className="apprenticeship">
      {/* top nav */}
      <CreatePageTop
        title="Create Apprenticeship"
        backLink="/apprenticeship"
        nextStepLink="/"
        icon={<BorderColorIcon />}
        nextStepTitle="Continue to Next Step "
      />

      {/* status bar */}

      <StatusBar status={labelArray} />
      
    </div>
  );
};

export default Apprenticeship;
