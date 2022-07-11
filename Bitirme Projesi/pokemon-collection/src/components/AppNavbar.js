import { Navbar, Container, Nav } from "react-bootstrap";
import SignInWithGoogle from "./SignInWithGoogle";
import BrandIcon from "../Assets/Pokemon_Img.svg";

export default function AppNavbar() {
  return (
    <Navbar collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <img src={BrandIcon} className="brand-image" alt="brand" />
          Pokemon Collection
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <SignInWithGoogle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
