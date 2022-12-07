import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="text-white " href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white text-muted">
            <div>
              Signed in as:{" "}
              <a href="#login" className="text-white">
                Tim Afanasiev
              </a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
