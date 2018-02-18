// @flow

import React from "react";
import { Container, Row, Col } from "reactstrap";
import PostCard from "./PostCard";
import CategoryList from "./CategoryList";

const Landing = props => {
  console.log(props);
  return (
    <div className="landing">
      <Container>
        <Row>
          <Col xs="10">
            {props.posts.map(post => <PostCard key={post._id} {...post} />)}
          </Col>
          <Col xs="2">
            <CategoryList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
