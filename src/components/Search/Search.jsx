import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../state/provider";
import { setSearchTerm } from "../../state/actions";

const Search = ({ hideButtons = false, searchTerm = "" }) => {
  const [, dispatch] = useStateValue();
  const [input, setInput] = useState(searchTerm);
  const history = useHistory();
  const buttonClassName = hideButtons ? "search__buttonHidden" : "";

  const search = (e) => {
    e.preventDefault();

    dispatch(setSearchTerm(input));

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          id="search__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>

      <div className="search__buttons">
        <Button
          className={buttonClassName}
          type="submit"
          variant="outlined"
          onClick={search}
        >
          Google Search
        </Button>
        <Button className={buttonClassName} variant="outlined">
          I'm Feeling Lucky
        </Button>
      </div>
    </form>
  );
};

export default Search;
