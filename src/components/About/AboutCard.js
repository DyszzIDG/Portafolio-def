import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { LanguageContext } from "../../context/LanguageContext";

function AboutCard() {
  const { texts } = useContext(LanguageContext);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {texts.aboutCardIntro} <span className="purple">{texts.aboutCardName}</span> {texts.aboutCardLocation}
            <br />
            {texts.aboutCardStudy}
            <br />
            {texts.aboutCardProfession}
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
