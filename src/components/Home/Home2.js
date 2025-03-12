import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I'm a passionate{" "}
                            <b className="purple">Full-Stack Developer</b> with
                            a strong focus on{" "}
                            <b className="purple">front-end technologies</b>.
                            With over three years of experience, I've worked on
                            diverse projects, developing web applications using{" "}
                            <b className="purple">
                                JavaScript, React, and Node.js
                            </b>
                            .
                            <br />
                            <br />I thrive on building seamless{" "}
                            <b className="purple">user experiences</b> and
                            scalable applications. My expertise extends to{" "}
                            <b className="purple">HTML5, CSS3</b>, and modern
                            frameworks, always following best practices and{" "}
                            <b className="purple">agile methodologies</b> like
                            Scrum.
                            <br />
                            <br />
                            Beyond coding, I enjoy collaborating with teams,
                            optimizing performance, and leveraging{" "}
                            <b className="purple">Git</b> for efficient version
                            control. Always eager to learn and innovate, I'm
                            driven by the challenge of turning ideas into
                            impactful{" "}
                            <b className="purple">digital solutions</b>.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid avatar"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/kuesmar"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/l-sandoval/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
