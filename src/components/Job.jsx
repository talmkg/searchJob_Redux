import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
//
//
// Single Job Component (1 job component renders for every single job)
//
//
const Job = ({ data }) => {
  const favs = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const isFav = favs.includes(data.company_name);
  //
  return (
    <Row
      className="mx-0 mt-3 p-3 bg-dark"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        {isFav ? (
          <StarFill
            color="gold"
            size={20}
            className="mr-3 my-auto"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={20}
            className="mr-3 my-auto"
            onClick={() =>
              dispatch({ type: "ADD_TO_FAVOURITE", payload: data.company_name })
            }
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};
export default Job;
