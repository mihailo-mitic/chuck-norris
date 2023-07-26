import axios from "axios";
import { useState, useEffect } from "react";

const RandomFact = () => {
  const [fact, setFact] = useState(" loading...");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      const data = response.data;
      setFact(data.value);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>RANDOM FACT: {fact}</p>
      <br></br>
    </>
  );
};
export default RandomFact;
