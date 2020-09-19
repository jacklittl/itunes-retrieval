import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import "../App.css";

import { Row, Col, Card } from 'antd';

const ListItem = ( props ) => {

    const result = props.result

    return (

        <Col>

            <a href={result.trackViewUrl} target="_blank" rel="noopener noreferrer">
        
                <Card>

                    <img className="block-image" src={result.artworkUrl100} />

                    <div className="card-body">

                        <h3>{result.trackName}</h3>
                        <h4>{result.collectionName}</h4>

                        <p>{result.artistName}</p>

                    </div>

                </Card>

            </a>
        
        </Col>
    )
}

function Listing(props){
    
    const results = props.results

    return (

        <Row gutter={12} type="flex" className="result-listing">

            { results && results.length > 0 ?

                results.map( result => (
                    <ListItem
                        key={result.trackId}
                        result={result}
                    />
                ))

            : null }

        </Row>

    )
};

export default ( Listing )