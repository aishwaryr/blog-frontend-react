// @flow

import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
import axios from "axios";

class CategoryList extends Component {
  state = {
    categories: []
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/api/categories`).then(response => {
      this.setState({ categories: response.data });
    });
  }
  render() {
    return (
      <div className="category-list">
        {this.state.categories.map(category => (
          <p key={category._id}> {category.name}</p>
        ))}
      </div>
    );
  }
}

export default CategoryList;
