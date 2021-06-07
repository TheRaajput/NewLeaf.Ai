import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "../Modal/modal";
import NavbarContent from "./NavbarContent";
import FeedBackModal from "../Modal/FeedBackModal";
import logo from "../Images/leaf.png";

const NavBar = () => {
  const [showProject, setshowProject] = useState(false);
  const [showDev, setshowDev] = useState(false);
  const [showFeedback, setshowFeedback] = useState(false);
  const ModalContent = [
    {
      id: 1,
      title: "About Project",
      body: "This is a project related to plant pathology",
      show: showProject,
      handleClose: () => setshowProject(false),
    },
    {
      id: 2,
      title: "About Developer",
      body: "Proficient in C/C++, JAVA, PYTHON, JAVASCRIPT, and SQL.Strong in design and integration with intuitive problem-solving skills. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.",
      show: showDev,
      handleClose: () => setshowDev(false),
    },
  ];
  const LinkContent = [
    {
      id: "project",
      title: "About",
      setshow: () => setshowProject(true),
    },
    {
      id: "Developer",
      title: "Developer",
      setshow: () => setshowDev(true),
    },
    {
      id: "Feedback",
      title: "Feedback",
      setshow: () => setshowFeedback(true),
    },
  ];

  return (
    <div>
      <Navbar bg="success" variant="light">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ background: "#F7CD2E", borderRadius: "10px" }}
          >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            NewLeaf.Ai
          </Navbar.Brand>
          <Nav className="mr-auto space-around">
            {LinkContent.map((el) => (
              <NavbarContent
                key={el.id}
                title={el.title}
                setshow={el.setshow}
              />
            ))}
          </Nav>
        </Container>
      </Navbar>

      {ModalContent.map((el) => (
        <Modal
          key={el.id}
          title={el.title}
          body={el.body}
          show={el.show}
          handleClose={el.handleClose}
        />
      ))}

      <FeedBackModal
        show={showFeedback}
        title="Feedback"
        handleClose={() => setshowFeedback(false)}
      />
    </div>
  );
};

export default NavBar;
