import React from "react";

function Start({ onClick, color }) {
  return (
    <>
      <svg
        style={{ cursor: "pointer" }}
        onClick={onClick}
        height="30px"
        width="30px"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 53.867 53.867"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <polygon
            style={{ fill: color ? "yellow" : "black" }}
            points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
          ></polygon>{" "}
        </g>
      </svg>
    </>
  );
}

export default Start;
