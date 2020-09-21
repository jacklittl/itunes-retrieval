import React, { useState, useEffect } from "react";
import { Row } from 'antd';
import { Result } from '../../declarations/types';

import ListItem from '../ListItem/ListItem';

type Props = {
    results: Result[];
}

const Listing = ({results}: Props): JSX.Element => {
    const [hasMoreResults, setHasMoreResults] = useState<boolean>(false);
    const [resultCount, setResultCount] = useState<number>(10);

    useEffect(() => setHasMoreResults(results.length > 10), [results]);

    const activeResults = results.slice(0, resultCount);

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
            <h2>Search results:</h2>

            <Row gutter={12} className="result-listing">
                {activeResults.map( result => (
                    <ListItem
                        key={result.trackId}
                        result={result}
                    />
                ))}
            </Row>
        </>
    );
};

export default ( Listing )