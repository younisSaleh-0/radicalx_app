import React, { useState } from "react";
import CreatePageTop from "../constant/createPageTop/CreatePageTop";
import EastIcon from "@mui/icons-material/East";
import ArrowRight from "../../Utils/images/arrow-right.png";

const CreateInternship = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="createInternship">
      {/* create top component  */}
      <CreatePageTop
        title={"Add New Internship"}
        backLink="/internship"
        nextStepLink="/"
        icon={<EastIcon />}
        nextStepTitle={`Continue to Next Step `}
      />
    </div>
  );
};

export default CreateInternship;
