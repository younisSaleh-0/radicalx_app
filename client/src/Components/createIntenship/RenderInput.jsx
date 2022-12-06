import React from "react";
import "./RenderInput.scss";

const RenderInput = ({ currentCategory }) => {
  // render depending on navigation from createInternship page
  const RenderComponent = () => {
    if (currentCategory === "Category") {
      return (
        <div className="input_container circleWrapper">
          <div className="category">category</div>
        </div>
      );
    } else if (currentCategory === "Description") {
      return (
        <div className="input_container">
          <div className="description">location</div>
        </div>
      );
    } else if (currentCategory === "Location") {
      return (
        <div className="input_container">
          <div className="location">location</div>
        </div>
      );
    } else if (currentCategory === "Benefits") {
      return (
        <div className="input_container">
          <div className="benefits">Benefits</div>
        </div>
      );
    } else if (currentCategory === "Intro Video") {
      return (
        <div className="input_container">
          <div className="intro_video">Intro Video</div>
        </div>
      );
    } else if (currentCategory === "Mentor Details") {
      return (
        <div className="input_container">
          <div className="mentor_details">Mentor Details</div>
        </div>
      );
    } else if (currentCategory === "Recommended Roles") {
      return (
        <div className="input_container">
          <div className="recommended_roles">Recommended Roles</div>
        </div>
      );
    } else if (currentCategory === "Web Links & Resources") {
      return (
        <div className="input_container">
          <div className="web_links ">Web Links & Resources</div>
        </div>
      );
    }
  };

  return (
    <>
      <RenderComponent />
    </>
  );
};

export default RenderInput;
