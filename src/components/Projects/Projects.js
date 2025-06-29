import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { LanguageContext } from "../../context/LanguageContext";

function Projects() {
  const { texts } = useContext(LanguageContext);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {texts.projectsHeading} <strong className="purple">{texts.projectsHighlight}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {texts.projectsIntro}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={texts.project1Title}
              description={texts.project1Desc}
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={texts.project2Title}
              description={texts.project2Desc}
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={texts.project3Title}
              description={texts.project3Desc}
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={texts.project4Title}
              description={texts.project4Desc}
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={texts.project5Title}
              description={texts.project5Desc}
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink si tenés
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title={texts.project6Title}
              description={texts.project6Desc}
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink si tenés
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
