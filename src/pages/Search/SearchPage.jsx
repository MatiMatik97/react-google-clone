import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../state/provider";
import useGoogleSearch from "../../hooks/useGoogleSearch";
// import data from "../../utils/response";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchPageHeaderOptions from "./SearchPageHeaderOptions";
import SearchPageResults from "./SearchPageResults";

const SearchPage = () => {
  const [{ searchTerm }] = useStateValue();
  const { data } = useGoogleSearch(searchTerm);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="searchPage-logo"
            className="searchPage__logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <div className="searchPage__headerTop">
            <Search hideButtons searchTerm={searchTerm} />

            <div className="searchPage__headerIcons">
              <AppsIcon />
              <Avatar />
            </div>
          </div>

          <SearchPageHeaderOptions />
        </div>
      </div>

      {searchTerm !== null && searchTerm !== "" && data && (
        <SearchPageResults data={data} />
      )}
    </div>
  );
};

export default SearchPage;
