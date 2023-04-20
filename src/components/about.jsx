import React, { useState } from "react";

function About() {
  return (
    <><div>
      <h1>About Us</h1>
      <br />
      <h2>About Billy</h2>
      <img src="images/Billy Bob.jpeg" alt="Billy Bob" />
      <p>
        Billy Bob grew up with a large family of entrepreneurs. From a young age
        he knew he would have to do something special to stand out from the
        crowd. That's why Billy Bob's Tech Sales prioritizes customer experience
        over all else. We are here for you.
      </p>
    </div>\
    <div>
        <h1>Contact Us</h1>
        <div><img src="images/MicrosoftTeams-image (1).png" alt="na" className="chatimg" /><h3 className="chatimgtxt">Never Fear, <br /> Billy is Here! <br /> Call Anytime <br /> 123-456-7890</h3></div>
      </div></>
  );
}
export default About;
