import React, { useState, useEffect } from "react";

function SVGComponent(person) {
  const [svgData, setSvgData] = useState("");
  let avatarId = person;
  useEffect(() => {
    // Perform the fetch call to obtain the SVG image
    fetch("https://api.multiavatar.com/" + JSON.stringify(avatarId))
      .then((response) => response.text())
      .then((data) => setSvgData(data))
      .catch((error) => console.error("Error fetching SVG:", error));
  }, [avatarId]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: svgData }} />
    </>
  );
}
export default SVGComponent;
