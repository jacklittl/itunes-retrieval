import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from 'redux/form/form.thunk';

import {
  makeStyles,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: 100 + '%',
  },
}));

const mediaOptions = [
  {value: 'movie', label: 'Movie' },
  {value: 'podcast', label: 'Podcast' },
  {value: 'music', label: 'Music' },
  {value: 'musicVideo', label: 'Music Video' },
  {value: 'audioBook', label: 'Audio Book' },
  {value: 'shortFilm', label: 'Short Film' },
  {value: 'tvShow', label: 'TV Show' },
  {value: 'software', label: 'Software' },
  {value: 'all', label: 'All' }
];

type Query = {
  media?: string,
  term?: string
}

const SearchForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<Query>({
    media: '',
    term: ''
  });

  const classes = useStyles();

  const onChange = ( data, field ) => {
    if ( field === 'term' ) setQuery({...query, term: data });
    else setQuery({...query, media: data });
  }

  const onSubmit = () => dispatch( fetchData( query ) );

  console.log( query )

  return (

    <form 
      name="filters" 
      className="section" 
    >

      <Container maxWidth="lg">
            
          <Grid container justify="center" spacing={2}>
                          
            <Grid item xs={12} sm={3}>

              <FormControl variant="filled" className={classes.formControl}>

                <InputLabel id="demo-simple-select-filled-label">Title</InputLabel>

                <Select
                  value={query.media}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  onChange={value => onChange(value.target.value, 'media')}
                >
                
                  {mediaOptions.map( mediaOption => (

                    <MenuItem key={mediaOption.value} value={mediaOption.value}>{mediaOption.label}</MenuItem>

                  ))}

                </Select>

              </FormControl>

            </Grid>

            <Grid item xs={12} sm={7}>

              <FormControl variant="filled" className={classes.formControl}>

                <TextField 
                  id="term"
                  name="term"
                  value={query.term}
                  label="Search Text"
                  onChange={e => onChange(e.target.value, 'term')}
                  variant="filled"
                />

              </FormControl>

            </Grid>

            <Grid item xs={5} sm={2}>

              <FormControl variant="filled" className={classes.formControl}>
                
                <Button variant="contained" onClick={() => onSubmit()} color="primary" size="large">Search</Button>
              
              </FormControl>

            </Grid>

        </Grid>

      </Container>

    </form>
  )
};

export default SearchForm;