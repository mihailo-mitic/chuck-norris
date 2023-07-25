import { AppContext } from "../App";
import { useContext } from "react";

import SearchForm from "../SearchForm";
import QueryList from "../QueryList";
import FactsList from "../FactsList";

const LandingPage = () => {
  const kontekst = useContext(AppContext);

  return (
    <>
      <SearchForm />
      <QueryList list={kontekst.queryList} length={kontekst.queryList.length} />
      <FactsList podaci={kontekst.res} />
    </>
  );
};
export default LandingPage;
