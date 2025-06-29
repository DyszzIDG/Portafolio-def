import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { LanguageContext } from "../../context/LanguageContext";

function About() {
  const { texts } = useContext(LanguageContext);

  return (
    <Container fluid className="about-section">

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {texts.aboutTitlePart1} <strong className="purple">{texts.aboutTitlePart2}</strong>
            </h1>
            <Aboutcard />
          </Col>
          
        </Row>

        <h1 className="project-heading">
          {texts.skillsTitle} <strong className="purple">{texts.skillsHighlight}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{texts.toolsHighlight}</strong> {texts.toolsTitle}
        </h1>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
