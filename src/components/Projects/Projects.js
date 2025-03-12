import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carritoApp from "../../Assets/Projects/carritoApp.jpg";
import outfitDnD from "../../Assets/Projects/outfitDnD.jpg";
import hospitalApp from "../../Assets/Projects/hospitalManager.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carritoApp}
              isBlog={false}
              title="Carrito App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/kuesmar/carritoApp"
              demoLink="https://www.google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outfitDnD}
              isBlog={false}
              title="Outfit DnD"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/kuesmar/carritoApp"
              demoLink="https://www.google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospitalApp}
              isBlog={false}
              title="Hospital Appointments System"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/kuesmar/carritoApp"
              demoLink="https://www.google.com/"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
