import React from "react";
import "./product.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import internship from "../../assets/jobportal.png";
import job from "../../assets/job.png";
import affilate from "../../assets/affilate.png";
import bolgs from "../../assets/blogs.png";
import hof from "../../assets/hof.png";
function product() {
  return (
    <div className="porduct-sec">
      <div className="porduct-sec-head">
        <h1>Our Products</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="Product-box">
              <img src={internship} alt="internship" />
              <h3>job Portal</h3>
              <p>
                Use excception templates for a stand-out resume minus teh sigh
                up process
              </p>
            </div>
          </Col>
          <Col>
            <div className="Product-box">
              <img src={job} alt="job" />
              <h3>Internship Portal</h3>
              <p>
                iNeuron's self-paced internship portal prioritises hands-on
                training with 570+ internship projects.
              </p>
            </div>
          </Col>
          <Col>
            <div className="Product-box">
              <img src={affilate} alt="affilate" />
              <h3>Become an affiliate</h3>
              <p>
                Explore affiliate marketing opportunities with iNeuron and
                attain financial frredom.
              </p>
            </div>
          </Col>
          <Col>
            <div className="Product-box">
              <img src={hof} alt="job" />
              <h3>Hall of fame</h3>
              <p>
                Our student placements and 10+ career transitions speak volumes
                about our courses.
              </p>
            </div>
          </Col>{" "}
          <Col>
            <div className="Product-box">
              <img src={bolgs} alt="job" />
              <h3>InBlogs</h3>
              <p>Explore all you want about your favourite courses. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default product;
