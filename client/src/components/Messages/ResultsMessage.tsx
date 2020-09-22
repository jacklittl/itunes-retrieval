import React from "react";
import { useSelector } from "react-redux";

import Typography from '@material-ui/core/Typography';

const ResultsMessage = (): JSX.Element => {
  const results = useSelector(state => state.form)

  let searchTitle:string;

  results.error 
    ? searchTitle = "Error retrieving your results."
    : results.loading 
      ? searchTitle = "Finding your results..."
      : results.data.payload && results.data.payload.length === 0 
        ? searchTitle = "No results found..."
        : searchTitle = "iTunes Search:"

  return (
    <div>
      <Typography gutterBottom variant="h5" color="primary" component="h2">{searchTitle}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">Please search for your favourite bands, artists, movies etc above. Alternatively, if no results could be found, please try altering you search.</Typography>
    </div>
  )
};

export default ( ResultsMessage )