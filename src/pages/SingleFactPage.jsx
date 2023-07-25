import { AppContext } from "../App";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

const SingleFactPage = () => {
  const kontekst = useContext(AppContext);
  const { factID } = useParams();
  const singleJoke = kontekst.res.find((joke) => joke.id === factID);
  const { value, icon_url } = singleJoke;
  console.log(icon_url);

  return (
    <div>
      <p>{value}</p>
      <br></br>
      <img src={icon_url} alt={icon_url} />
      <br></br>
      <Link to="/">
        <h5>BACK</h5>
      </Link>
    </div>
  );
};
export default SingleFactPage;
