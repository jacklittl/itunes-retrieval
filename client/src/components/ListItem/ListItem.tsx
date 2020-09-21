import React from "react";
import { Col, Card } from 'antd';
import { Result } from '../../declarations/types';

type Props = {
  result: Result;
};

const ListItem = ({ result }: Props): JSX.Element => (
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
);

export default ( ListItem )