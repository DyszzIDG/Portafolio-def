import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

function Home2() {
  const { texts } = useContext(LanguageContext);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {texts.aboutTitle.split(" ")[0]}{" "}
              <span className="purple">
                {texts.aboutTitle.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="home-about-body">
              {texts.aboutDescription1}
              <br />
              <br />
              {texts.aboutDescription2}
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, PHP, Python, SQL, C++, React, Node.js,
                  Arduino
                </b>
              </i>
              <br />
              <br />
              {texts.aboutDescription3}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* Espacio para redes sociales si querés agregarlas */}
            <p></p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
