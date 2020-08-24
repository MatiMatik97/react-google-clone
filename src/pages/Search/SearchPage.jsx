import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../state/provider";
// import useGoogleSearch from "../../hooks/useGoogleSearch";
import response from "../../utils/response";

const SearchPage = () => {
  const [{ searchTerm }] = useStateValue();
  //   const { data } = useGoogleSearch(searchTerm);

  const data = response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{searchTerm}</h1>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
