// @flow

import React from "react";
import { Container, Row, Col } from "reactstrap";

const PostCard = props => (
  <div className="post-card bg-info">
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
);

export default PostCard;
