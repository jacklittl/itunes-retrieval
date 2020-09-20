import React  from 'react';

import 'antd/dist/antd.css';
import "../App.css";

import { Select, Input, Form, Button, Row, Col } from 'antd';

const FormItem = Form.Item
// const Option = Select.Option

const formItemLayout = {
    labelCol: { span: 24, md: 24 },
    wrapperCol: { span: 24, md: 24 }
}

const SearchForm = ( props ) => {

    const onChange = ( data, field ) => {
        props.updateFilters( data, field )
    }

    const selectChange = ( value, field ) => {
        props.updateFilters( value, 'media' )
    }

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
  
    return (

        <Form name="filters" className="search-form" onSubmit={props.onSubmit} noValidate>

            <Row>
                <div className="container">

                    <Row gutter={12} type="flex">
                            
                        <Col {...{ xs: 24, md: 6 }}>

                            <FormItem {...formItemLayout} rules={[{ required: true }]}>
                                <Select
                                    name="media"
                                    value={props.media}
                                    placeholder="Title"
                                    options={mediaOptions}
                                    onChange={selectChange}
                                ></Select>
                            </FormItem>

                        </Col>
                                    
                        <Col {...{ xs: 24, md: 14 }}>
            
                            <FormItem {...formItemLayout} rules={[{ required: true }]}>
                                <Input
                                    name="term"
                                    value={props.term}
                                    placeholder="Search Text"
                                    onChange={e => onChange(e.target.value, 'term')}
                                />
                            </FormItem>

                        </Col>
                                    
                        <Col {...{ xs: 24, md: 4 }}>

                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="submit-button"
                                    onClick={props.onSubmit}
                                >Search</Button>
                            </FormItem>

                        </Col>

                    </Row>

                </div>
            </Row>

        </Form>

    )
};

export default ( SearchForm )