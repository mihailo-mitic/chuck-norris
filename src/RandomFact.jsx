import axios from "axios";
import { useState, useEffect } from "react";

const RandomFact = () => {
  const [fact, setFact] = useState("random fact");
  useEffect(
    () =>
      async function fetchData() {
        try {
          const response = await axios.get(
            "https://api.chucknorris.io/jokes/random"
          );
          const data = response.data;
          console.log(response);
          console.log(data);
          setFact(data.value);
        } catch (error) {
          console.log(error.response.data);
        }
      },
    []
  );

  return (
    <>
      <p>RANDOM FACT: {fact}</p>
      <br></br>
    </>
  );
};
export default RandomFact;
