// @flow

import React from "react";
import { Container, Row, Col } from "reactstrap";
import PostCard from "./PostCard";

const Landing = props => (
  <div className="landing">
    <Container>
      <Row>
        <Col>
          {props.posts.map(post => <PostCard key={post._id} {...post} />)}
        </Col>
      </Row>
    </Container>
  </div>
);

export default Landing;
