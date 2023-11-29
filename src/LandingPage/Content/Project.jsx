import React from "react";
import Cards from "../../Components/Cards/Cards";
// import { Zoom } from "react-reveal";

const Project = () => {
  return (
    <React.Fragment>
      <h1 className="text-center font-[archivo-regular] text-[3.5rem] pt-[3rem] pb-[1rem]" id ="projects">
        Projects
      </h1>
      <div>
        <Cards></Cards>
      </div>
    </React.Fragment>
  );
};

export default Project;
