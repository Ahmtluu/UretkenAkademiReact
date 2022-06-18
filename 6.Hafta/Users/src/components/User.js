import axios from "axios";
import React, { Component } from "react";

export default class User extends Component {
  state = {
    isMounted: false,
    users: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const users = res.data;
      this.setState({ users });
      this.setState({ isMounted: true });
    });
  }

  render() {
    if (this.state.isMounted == false) {
      return (
        <ul>
          <li>"Loading..."</li>
        </ul>
      );
    } else {
      return (
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.username} : {user.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}
