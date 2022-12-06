import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import "../App.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
//
//
// MainSearch task = collecting query (what u type), prompt api request, get list of jobs back and display them below (return(...)).
//
//
//

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
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
                {jobs.map((jobData) => (
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
