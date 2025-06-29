import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { 
  CgCPlusPlus 
} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const icons = [
  <CgCPlusPlus />,
  <DiJavascript1 />,
  <TbBrandGolang />,
  <DiNodejs />,
  <DiReact />,
  <SiSolidity />,
  <DiMongodb />,
  <SiNextdotjs />,
  <DiGit />,
  <SiFirebase />,
  <SiRedis />,
  <SiPostgresql />,
  <DiPython />,
  <DiJava />,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

function Techstack() {
  return (
    <div style={{ padding: "20px 0" }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={false}
        containerClass="carousel-container"
        itemClass="tech-icons"
      >
        {icons.map((icon, index) => (
          <div key={index} style={{ fontSize: "4rem", textAlign: "center" }}>
            {icon}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Techstack;
