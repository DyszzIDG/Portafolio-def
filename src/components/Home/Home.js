import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { LanguageContext } from "../../context/LanguageContext";

function Home() {
  const { texts } = useContext(LanguageContext);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {texts.hello}{" "}
                <span className="wave" role="img" aria-labelledby="wave"></span>
              </h1>

              <h1
                className="heading-name"
                style={{ marginBottom: "60px" }}
              >
                {texts.im}
                <strong className="main-name"> Ivan</strong>
              </h1>
            </Col>

            <Col
              md={5}
              style={{
                paddingBottom: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#ffffff",
                  whiteSpace: "pre-line",
                }}
              >
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
