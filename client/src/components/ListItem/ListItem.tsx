import React from "react";

import { Result } from '../../declarations/types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

type Props = {
  result: Result;
};

const ListItem = ({ result }: Props): JSX.Element => (

  <Card>
  
    <CardActionArea>

      <Link href={result.trackViewUrl} target="_blank" rel="noopener noreferrer">

        <CardMedia
          component="img"
          image={result.artworkUrl100}
          title={result.trackName}
          alt={result.trackName}
        />

        <CardContent>

          <Typography gutterBottom variant="h6" color="primary" component="h2">
            {result.trackName}
          </Typography>

          <Typography gutterBottom variant="body2" color="textSecondary" component="p">
            {result.artistName}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {result.collectionName}
          </Typography>

        </CardContent>

      </Link>

    </CardActionArea>

  </Card>

)

export default ( ListItem )