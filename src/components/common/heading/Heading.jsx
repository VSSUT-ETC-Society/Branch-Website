import React from "react"
import "../../hero/hero.css";

const Heading = ({ subtitle, title1, title2, title3 }) => {
  return (
    <>
      <div id="heading">
        <h3>{subtitle} </h3>
        <h1>{title1} </h1>

        <h1>
          {title2} <span className="yellow">{title3}</span>{" "}
        </h1>
      </div>
    </>
  );
};

export default Heading
