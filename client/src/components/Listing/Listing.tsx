import React, { useState, useEffect } from "react";
import { Result } from '../../declarations/types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ListItem from '../ListItem/ListItem';

type Props = {
    results: Result[];
}

const Listing = ({ results }: Props): JSX.Element => {
    const [hasMoreResults, setHasMoreResults] = useState<boolean>(false);
    const [resultCount, setResultCount] = useState<number>(10);

    useEffect(() => setHasMoreResults( results.length > 10 ), [results]);

    const activeResults = results.slice( 0, resultCount );

    const loadMoreResults = () => {
        if ( resultCount >= results.length ) setHasMoreResults(false);
        else setResultCount(resultCount + 10);
    }

    window.onscroll = () => {
        var d = document.documentElement,
            offset = d.scrollTop + window.innerHeight;

        if (offset >= document.body.scrollHeight) {
            hasMoreResults && loadMoreResults();
        }
    }
    
    return (

        <>

            <Typography gutterBottom variant="h5" color="primary" component="h2">Search Results:</Typography>
            
            <Grid container spacing={2}>
                
                {activeResults.map( result => (

                    <Grid item xs={3} key={result.trackId}>

                        <ListItem result={result} />

                    </Grid>

                ))}

            </Grid>

        </>

    );
};

export default ( Listing )