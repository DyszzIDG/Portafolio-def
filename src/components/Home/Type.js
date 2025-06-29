import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer\nFreelancer\nCybersecurity Consultant",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 50,
        cursor: "|",
      }}
    />
  );
}

export default Type;
