import React, { useEffect } from "react";
import "./SearchPageHeaderOptions.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPageHeaderOptions = () => {
  const scrollHandler = (e) => {
    const searchPageHeaderOptionsElement = document.getElementById(
      "searchPage__headerOptions"
    );

    if (window.pageYOffset >= 55) {
      searchPageHeaderOptionsElement.style.maxHeight = "0px";
      searchPageHeaderOptionsElement.style.marginTop = "0px";
    }

    if (window.pageYOffset <= 10) {
      searchPageHeaderOptionsElement.style.maxHeight = "25px";
      searchPageHeaderOptionsElement.style.marginTop = "20px";
    }
  };

  useEffect(() => {
    const searchPageHeaderOptionsElement = document.getElementById(
      "searchPage__headerOptions"
    );

    searchPageHeaderOptionsElement.style.maxHeight = "25px";
    searchPageHeaderOptionsElement.style.marginTop = "20px";

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="searchPage__headerOptions" id="searchPage__headerOptions">
      <div className="searchPage__headerOptionsLeft">
        <Link to="/all" className="searchPage__headerOption">
          <SearchIcon />
          <p>All</p>
        </Link>

        <Link to="/news" className="searchPage__headerOption">
          <DescriptionIcon />
          <p>News</p>
        </Link>

        <Link to="/images" className="searchPage__headerOption">
          <ImageIcon />
          <p>Images</p>
        </Link>

        <Link to="/shopping" className="searchPage__headerOption">
          <LocalOfferIcon />
          <p>Shopping</p>
        </Link>

        <Link to="/maps" className="searchPage__headerOption">
          <RoomIcon />
          <p>Maps</p>
        </Link>

        <Link to="/more" className="searchPage__headerOption">
          <MoreVertIcon />
          <p>More</p>
        </Link>
      </div>

      <div className="searchPage__headerOptionsRight">
        <Link to="/settings" className="searchPage__headerOption">
          <p>Settings</p>
        </Link>

        <Link to="/tools" className="searchPage__headerOption">
          <p>Tools</p>
        </Link>
      </div>
    </div>
  );
};

export default SearchPageHeaderOptions;
