import React from "react";
import { Result } from 'declarations/types';

import { 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography
} from '@material-ui/core';

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