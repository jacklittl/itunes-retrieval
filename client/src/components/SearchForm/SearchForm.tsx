import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from '../../redux/form/form.thunk';

import { Row, Col, Select, Input, Form, Button } from 'antd';

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

  const onChange = ( data, field ) => {
    let searchQuery = {};
    
    if ( field === 'term' ) searchQuery = { term: data };
    else searchQuery = { media: data };
    
    setQuery({...query, ...searchQuery});
  }

  const onSubmit = () => dispatch( fetchData( query ) );
  
  return (

    <Form 
      name="filters" 
      className="search-form" 
      onFinish={onSubmit} 
    >

      <Row>
        <div className="container">

          <Row gutter={12}>
                            
              <Col {...{ xs: 24, md: 6 }}>

                <Form.Item rules={[{ required: true }]}>
                  <Select
                    placeholder="Title"
                    options={mediaOptions}
                    onChange={value => onChange(value, 'media')}
                  />
                </Form.Item>

              </Col>
                            
              <Col {...{ xs: 24, md: 14 }}>

                <Form.Item rules={[{ required: true }]}>
                  <Input
                    name="term"
                    placeholder="Search Text"
                    onChange={e => onChange(e.target.value, 'term')}
                  />
                </Form.Item>

              </Col>
                            
              <Col {...{ xs: 24, md: 4 }}>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submit-button"
                  >Search</Button>
                </Form.Item>

              </Col>

          </Row>

        </div>
      </Row>

    </Form>
  )
};

export default SearchForm;