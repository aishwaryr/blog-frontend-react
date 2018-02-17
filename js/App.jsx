// @flow

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import axios from "axios";

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/api/posts`).then(response => {
      console.log(response);
      this.setState({ posts: response.data });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={props => <Landing posts={this.state.posts} />}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
