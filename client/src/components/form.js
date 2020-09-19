import React  from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import "../App.css";

import { Select, Input, Form, Button, Row, Col } from 'antd';

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
    labelCol: { span: 24, md: 24 },
    wrapperCol: { span: 24, md: 24 }
}

function SearchForm(props){

    const onChange = ( event ) => {
        let data = {}

        // data[event.target.name] = event.target.value

        // onChange(data)
    }

    const selectChange = ( event, value ) => {
        let data = {}
        data[event] = value

        onChange(data)
    }
  
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
                                    onChange={selectChange('media')}
                                >
                                    <Option value="" disabled>Select a category...</Option>
                                    <Option value="movie">Movie</Option>
                                    <Option value="podcast">Podcast</Option>
                                    <Option value="music">Music</Option>
                                    <Option value="musicVideo">Music Video</Option>
                                    <Option value="audioBook">Audio Book</Option>
                                    <Option value="shortFilm">Short Film</Option>
                                    <Option value="tvShow">TV Show</Option>
                                    <Option value="software">Software</Option>
                                    <Option value="all">All</Option>
                                </Select>
                            </FormItem>

                        </Col>
                                    
                        <Col {...{ xs: 24, md: 14 }}>
            
                            <FormItem {...formItemLayout} rules={[{ required: true }]}>

                                <Input
                                    name="term"
                                    value={props.term}
                                    placeholder="Search Text"
                                    onChange={onChange()}
                                />

                            </FormItem>

                        </Col>
                                    
                        <Col {...{ xs: 24, md: 4 }}>

                            <FormItem>
                            
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="submit-button"
                                    onClick={props.onSubmit()}
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