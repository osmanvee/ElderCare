import React from 'react';
import { Button, InputGroup, FormControl, Card, Accordion, Form, Table } from 'react-bootstrap';
import '../App.css';
import '../index.css';
import nurse from '../images/2n.jpg';

function Home() {

    return(
        <div className="bodyy"> 
            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nurse} />
                            <Card.Body>
                                <Card.Title> <h4> elderCare provides remote treatment for elderly patients</h4> </Card.Title>
                                <Card.Text>
                               
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
        </div>
    );
}


export default Home;