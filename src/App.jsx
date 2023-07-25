import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SingleFactPage from "./pages/SingleFactPage";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [queryList, setQueryList] = useState([]);
  const [res, setRes] = useState([]);

  return (
    <AppContext.Provider
      value={{ query, setQuery, queryList, setQueryList, res, setRes }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="details/:factID" element={<SingleFactPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
