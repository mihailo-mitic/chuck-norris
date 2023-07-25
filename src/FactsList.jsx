import { Link } from "react-router-dom";

const FactsList = (props) => {
  if (props.podaci.length > 0) {
    return (
      <div>
        {props.podaci.map((fact) => {
          return (
            <Link to={`/details/${fact.id}`} key={fact.id}>
              <p>{fact.value}</p>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <h5 style={{ color: "gray" }}>
      no results... please enter keyword to search for facts...
    </h5>
  );
};
export default FactsList;
