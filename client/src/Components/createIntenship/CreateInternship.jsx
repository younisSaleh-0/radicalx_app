import React, { useState } from "react";
import CreatePageTop from "../constant/createPageTop/CreatePageTop";
import EastIcon from "@mui/icons-material/East";
import StatusBar from "../constant/statusBar/StatusBar";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import checkMark from "../../Utils/images/tick-circle.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./CreateInternship.scss";
import RenderInput from "./RenderInput";

const CreateInternship = () => {
  const labelArray = [
    "Internship Description",
    "Internship Guide",
    "Surveys",
    "Settings",
  ];

  const categories = [
    {
      id: 1,
      name: "Category",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
    {
      id: 2,
      name: "Description",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
    {
      id: 3,
      name: "Location",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
    {
      id: 4,
      name: "Benefits",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
    {
      id: 5,
      name: "Intro Video",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
    {
      id: 6,
      name: "Mentor Details",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
    {
      id: 7,
      name: "Recommended Roles",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
    {
      id: 8,
      name: "Web Links & Resources",
      icon: <LineStyleIcon />,
      checkMarck: checkMark,
      showIcon: <ArrowRightIcon />,
    },
  ];

  const [currentStep, updateCurrentStep] = useState(1);

  // Show category input
  const [currentCategory, setCurrentCategory] = useState(null);

  // update steps function
  const updateStep = (step) => {
    updateCurrentStep(step);
  };



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
      {/* status bar */}
      <StatusBar
        status={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      />

      {/* test button */}
      <div className="body_wrapper">
        {categories.map((item) => (
          <div key={item.id} className="container">
            <div className="left_frame">{item.icon}</div>
            <div className="navigation_categories">
              <button
                disabled={
                  currentStep === 1 || currentStep === labelArray.length
                }
                onClick={() => {
                  currentStep === 1
                    ? updateStep(currentStep - 1)
                    : currentStep === labelArray.length
                    ? updateStep(currentStep + 1)
                    : setCurrentCategory(item.name);
                }}
              >
                <div>
                  {item.name}
                  <img src={`${item.checkMarck}`} alt="" />
                </div>
                <div className="show_button">{item.showIcon}</div>
              </button>
            </div>
          </div>
        ))}
        <div>{<RenderInput currentCategory={currentCategory} />}</div>
      </div>

      <button
        className="primaryButton"
        disabled={currentStep === 1}
        onClick={() => updateStep(currentStep - 1)}
      >
        Previous Step
      </button>
      <button
        className="primaryButton"
        disabled={currentStep === labelArray.length}
        onClick={() => updateStep(currentStep + 1)}
      >
        Next Step
      </button>
    </div>
  );
};

export default CreateInternship;
