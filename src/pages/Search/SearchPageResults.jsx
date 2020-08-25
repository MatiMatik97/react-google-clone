import React from "react";
import "./SearchPageResults.css";

const SearchPageResults = ({ data }) => {
  const { formattedTotalResults, searchTime } = data?.searchInformation;
  const { searchTerms } = data?.queries.request[0];

  return (
    <div className="searchPage__results">
      <p className="searchPage__resultsCount">
        About {formattedTotalResults} results ({searchTime.toFixed(2)} seconds)
        for <strong>{searchTerms}</strong>
      </p>

      {data?.items &&
        data.items.map((item, index) => {
          const { link, displayLink, title, snippet } = item;

          return (
            <div key={index} className="searchPage__result">
              <div className="searchPage__resultContainer">
                {item.pagemap.cse_image &&
                  item.pagemap.cse_image.length > 0 && (
                    <img
                      src={item.pagemap.cse_image[0].src}
                      alt=""
                      className="searchPage__resultImage"
                    />
                  )}

                <a href={link} className="searchPage__resultLink">
                  {displayLink}
                </a>
              </div>

              <a href={link} className="searchPage__resultTitle">
                <h2>{title}</h2>
              </a>

              <p className="searchPage__resultSnippet">{snippet}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SearchPageResults;
