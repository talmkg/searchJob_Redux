import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import NavBar from "./NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { XSquare } from "react-bootstrap-icons";

const Favourites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.list);
  return (
    <>
      <Container fluid id="fluid">
        <>
          <Container className="bg-dark" id="container">
            <div className="d-flex justify-content-end pt-3">
              <NavBar />
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => navigate("/")}
                  className="btn btn-secondary"
                >
                  Home
                </Button>
              </div>
            </div>
            <Row>
              <Col
                xs={10}
                className="mx-auto my-3 d-flex justify-content-center"
              >
                <h1>Favourites</h1>
              </Col>
              <Col xs={10} className="mx-auto mb-5">
                <ListGroup className="text-dark">
                  {favourites.map((fav, i) => (
                    <ListGroup.Item key={i} className="bg-light">
                      {" "}
                      <XSquare
                        color="red"
                        size={18}
                        className="mr-3 my-auto"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_FAVOURITE",
                            payload: fav,
                          })
                        }
                      />{" "}
                      <span className="font-weight-bold">{fav}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </>
      </Container>
    </>
  );
};
export default Favourites;
