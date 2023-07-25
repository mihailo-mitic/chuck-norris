import { AppContext } from "./App";
import { useContext } from "react";
import axios from "axios";

const SearchForm = () => {
  const kontekst = useContext(AppContext);

  const fetchData = async (adresa) => {
    try {
      const response = await axios.get(adresa);
      kontekst.setRes(response.data.result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (kontekst.query === "") {
      return;
    }

    if (kontekst.queryList.length == 10) {
      kontekst.queryList.pop();
    }

    kontekst.setQueryList([kontekst.query, ...kontekst.queryList]);
    fetchData(
      `https://api.chucknorris.io/jokes/search?query=${kontekst.query}`
    );
    kontekst.setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="query"
          value={kontekst.query}
          onChange={(e) => kontekst.setQuery(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default SearchForm;
