import React from "react";
import Card from "react-bootstrap/Card";
import { BiJoystick } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Luciano Sandoval </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            I am co-founder of Syersy software developer enterprise.
            <br />
            I got my programming knowledge at university, IT institute and self-taught.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <BiJoystick /> Playing Games
            </li>
            <li className="about-activity">
            <MdLiveTv /> Watching Streaming
            </li>
            <li className="about-activity">
            <IoRocketOutline /> Exploring new technologies
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
