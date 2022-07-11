import { signInWithGoogle } from "../service/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";

import "../App.css";
import { Nav, NavDropdown, Button } from "react-bootstrap";
import { logout, auth } from "../service/firebase";

const SignInWithGoogle = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        setUser(displayName);
      } else {
        setUser("");
      }
    });
  }, []);

  if (user !== "") {
    return (
      <Nav>
        <NavDropdown title={user} id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/" onClick={logout}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Button variant="outline-secondary" onClick={signInWithGoogle}>
          Login
        </Button>
      </Nav>
    );
  }
};

export default SignInWithGoogle;
