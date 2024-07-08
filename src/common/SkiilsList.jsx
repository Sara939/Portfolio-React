import React from "react";
function SkiilsList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="checkMarkIcon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkiilsList;
