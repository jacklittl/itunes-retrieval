import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from '../../redux/form/form.thunk';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

const SearchForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    media: '',
    term: ''
  });

  const classes = useStyles();

  const onChange = ( data, field ) => {
    let searchQuery = {};

    if ( field === 'term' ) searchQuery = { term: data };
    else searchQuery = { media: data };
    
    setQuery({...query, ...searchQuery});
  }

  const onSubmit = () => dispatch( fetchData( query ) );

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