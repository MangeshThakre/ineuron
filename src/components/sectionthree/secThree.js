import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import enroll from "../../assets/enroll.jpg";
import "./secThree.css";

import books from "../../assets/books.jpg";
import successPng from "../../assets/success .jpg";
function SecThree() {
  return (
    <div className="secThreeContainer">
      <Container>
        <Row>
          <Col>
            <h1>“Pure Hardwork, No Shortcuts!”</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={books} />
              <Card.Body>
                <Card.Title>400+</Card.Title>
                <Card.Text>Different courses</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img id="sectionThreeImg" variant="top" src={enroll} />
              <Card.Body>
                <Card.Title>4000000+</Card.Title>
                <Card.Text>Students Enrolled</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={successPng} />
              <Card.Body>
                <Card.Title>10000+</Card.Title>
                <Card.Text>successful Transition</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecThree;
