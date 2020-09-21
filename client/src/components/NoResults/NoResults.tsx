import React from "react";
import { useSelector } from "react-redux";

const NoResults = () => {
  const results = useSelector(state => state.form)

  let searchTitle = "iTunes Search:"
  if( results.error ){
    searchTitle = "No search results could be found..."
  }

  return (
    <div>
      <h2>{searchTitle}</h2>
      <h3>Please search for your favourite bands, artists, movies etc above. Alternatively, if no results could be found, please try altering you search.</h3>
    </div>
  )
};

export default ( NoResults )