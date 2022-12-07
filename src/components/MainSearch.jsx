import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import "../App.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanysAction } from "../redux/actions";
//
//
// MainSearch task = collecting query (what u type), prompt api request, get list of jobs back and display them below (return(...)).
//
//
//

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobsFromRedux = useSelector((state) => state.job.result); //job is declared in store, result = in job.js. So it's state/job/result.
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    //whenever we press enter
    e.preventDefault();
    dispatch(getCompanysAction(query)); //prop (query) => what we are writing in the search
  };
  const navigate = useNavigate();
  return (
    <>
      <Container fluid id="fluid">
        <>
          <Container className="bg-dark" id="container">
            <div className="d-flex justify-content-end pt-3">
              <NavBar />
              <div className="d-flex justify-content-end">
                <button
                  onClick={() => navigate("/favourites")}
                  className="btn btn-secondary"
                >
                  Favourites
                </button>
              </div>
            </div>
            <Row>
              <Col
                xs={10}
                className="mx-auto my-3 d-flex justify-content-center"
              >
                <h1>Remote Jobs Search</h1>
              </Col>
              <Col xs={10} className="mx-auto">
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="Type and press Enter"
                  />
                </Form>
              </Col>
              <Col xs={10} className="mx-auto mb-5">
                {/* Here we have to call reducers/job result[] now. How are we gonna do it? Using useSelector. I went up, added an import,
                added a const jobsFromRedux=useSelector(state => state.job.result). Then, i just change name of the map func below to jobsFromRedux.*/}
                {jobsFromRedux.map((jobData) => (
                  <Job key={jobData._id} data={jobData} />
                ))}
              </Col>
            </Row>
          </Container>
        </>
      </Container>
    </>
  );
};

export default MainSearch;
