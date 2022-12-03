import React from "react";
import CreatePageTop from "../constant/createPageTop/CreatePageTop";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "./Apprenticeship.scss";

const Apprenticeship = () => {
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
    </div>
  );
};

export default Apprenticeship;
