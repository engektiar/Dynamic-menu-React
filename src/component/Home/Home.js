import React from "react";
import { Col, Row } from "react-bootstrap";

import Rightside from "./../Rightside/Rightside";
import Sidebar from "./../Costomsidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <div>
            <Sidebar />
          </div>
        </Col>
        <Col md={3}>
          <Rightside />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
