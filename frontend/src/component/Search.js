import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({word,setWord,handleSubmit}) => {
   return (
    <Container className="m-5">
         <Form onSubmit={handleSubmit}>
        <Row >   
        <Col className="justify-content-center d-flex">  
        <Col md={3}></Col>  
          <Col md={6} xs={12}>
            <Form.Control 
            type="text" 
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Search For New Image ...."          
            />
            </Col>
            <Col md={3} xs={12} className="ms-3">
            <Button type="submit">Search</Button>
            </Col>  
         
        </Col>                   
        </Row>
        </Form>
    </Container>
   )
}

export default Search;