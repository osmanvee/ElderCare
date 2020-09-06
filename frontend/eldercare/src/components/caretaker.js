import React from 'react';
import { Button, InputGroup, FormControl, Card, Accordion, Form, Table } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../App.css';
import '../index.css';
import nurse from '../images/2n.jpg';
import sleep from '../images/sleep.png';
import tired from '../images/tired1.png';
import med from '../images/med1.png';
import food from '../images/food.png';


class Caretaker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            isSubmitted2: false

        }
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({isSubmitted: true});
        
         
      };

      render() {
        let div = '';
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      
      if(this.state.isSubmitted) {
        //MAIN HANDLING
       div  = <div>
                    <div className="bodyy">
                    <span id="card1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nurse} />
                            <Card.Body>
                                <Card.Title> <h4> Welcome {this.input.value}! </h4> </Card.Title>
                                <Card.Text>
                                <h5> Today is {date}. </h5>  We hope your loved ones are doing well!
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </span>

                        <span id="card1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title> <h4> Current Patient(s): 3 </h4> </Card.Title>
                                <Card.Text>
                                <Button variant="success" size="lg" disabled>
                                            Add Patient
                                </Button>{' '}
                                <Button variant="danger" size="lg" disabled>
                                            Delete Patient
                                </Button>{' '}
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </span>
                    </div>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Patient 1: John Sam, Age: 56
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <h5>Upcoming Doctor Appointments</h5>
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Doctor Name</th>
                                <th>Attented (Y/N)</th>
                                <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Dr. Mark Otto</td>
                                <td>N</td>
                                <td>December 6</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Dr. Osman Warsi</td>
                                <td>N</td>
                                <td>November 15</td>
                                </tr>

                                
                                
                            </tbody>
                            </Table>
                                <h5>Daily log of: {date}</h5>
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Sleep Rating</th>
                                <th>Medication (Y/N)</th>
                                <th>Tiredness (Y/N)</th>
                                <th>Food</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>5/10</td>
                                <td>Y</td>
                                <td>N</td>
                                <td>Chicken Spinach, Fries, Yoghurt.</td>
                                </tr>
                            </tbody>
                            </Table> 
                            <h5>Medication Records</h5>   
                            <Table striped bordered hover size="sm" variant="dark">
                            <thead>
                                <tr>
                                <th>Medicine</th>
                                <th>Doze per day</th>
                                <th>Valid till</th>
                               <th><Button variant="success" size="sm" disabled>
                                            Add Medicine
                                </Button>{' '}<Button variant="danger" size="sm" disabled>
                                            Delete Medicine
                                </Button>{' '}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Panadol</td>
                                <td>2 Tablets</td>
                                <td>December 15, 2020</td>
                                
                                </tr>
                                <tr>
                                <td>Crestor (rosuvastatin)</td>
                                <td>1 Tablets</td>
                                <td>January 19, 2021</td>
                                
                                </tr>
                            </tbody>
                            </Table>

                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Patient 2: John Wick, Age: 71
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            <h5>Upcoming Doctor Appointments</h5>
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Doctor Name</th>
                                <th>Attented (Y/N)</th>
                                <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Dr. Pheonix</td>
                                <td>N</td>
                                <td>December 1</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Dr. Sam Lorne</td>
                                <td>N</td>
                                <td>November 28</td>
                                </tr>

                                
                                
                            </tbody>
                            </Table>
                                <h5>Daily log of: {date}</h5>
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Sleep Rating</th>
                                <th>Medication (Y/N)</th>
                                <th>Tiredness (Y/N)</th>
                                <th>Food</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>5/10</td>
                                <td>Y</td>
                                <td>Y</td>
                                <td>Pasta, Fries, Baked Chicken 1/2.</td>
                                </tr>
                            </tbody>
                            </Table> 
                            <h5>Medication Records</h5>   
                            <Table striped bordered hover size="sm" variant="dark">
                            <thead>
                                <tr>
                                <th>Medicine</th>
                                <th>Doze per day</th>
                                <th>Valid till</th>
                               <th><Button variant="success" size="sm" disabled>
                                            Add Medicine
                                </Button>{' '}<Button variant="danger" size="sm" disabled>
                                            Delete Medicine
                                </Button>{' '}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Proziac</td>
                                <td>2 Tablets</td>
                                <td>July 15, 2022</td>
                                
                                </tr>
                                <tr>
                                <td>Crestor (rosuvastatin)</td>
                                <td>1 Tablets</td>
                                <td>January 19, 2021</td>
                                
                                </tr>
                            </tbody>
                            </Table>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Patient 2: Mary Jones, Age: 67
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            <h5>Upcoming Doctor Appointments</h5>
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Doctor Name</th>
                                <th>Attented (Y/N)</th>
                                <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Dr. Peter Mark</td>
                                <td>N</td>
                                <td>December 11</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Dr. Joe Ornas</td>
                                <td>N</td>
                                <td>October 16</td>
                                </tr>

                                
                                
                            </tbody>
                            </Table>
                                <h5>Daily log of: {date}</h5>
                            <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Sleep Rating</th>
                                <th>Medication (Y/N)</th>
                                <th>Tiredness (Y/N)</th>
                                <th>Food</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>5/10</td>
                                <td>Y</td>
                                <td>N</td>
                                <td>Rice with Chicken, Almonds and Nuts</td>
                                </tr>
                            </tbody>
                            </Table> 
                            <h5>Medication Records</h5>   
                            <Table striped bordered hover size="sm" variant="dark">
                            <thead>
                                <tr>
                                <th>Medicine</th>
                                <th>Doze per day</th>
                                <th>Valid till</th>
                               <th><Button variant="success" size="sm" disabled>
                                            Add Medicine
                                </Button>{' '}<Button variant="danger" size="sm" disabled>
                                            Delete Medicine
                                </Button>{' '}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Panadol</td>
                                <td>2 Tablets</td>
                                <td>December 15, 2020</td>
                                
                                </tr>
                                <tr>
                                <td>Crestor (rosuvastatin)</td>
                                <td>1 Tablets</td>
                                <td>January 19, 2021</td>
                                
                                </tr>
                            </tbody>
                            </Table>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        
            </div>
      }else {
                div = <div>
                <h1>Welcome Care Taker!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="favcolor"> </label>
                   
                    <input
                        type="text"
                        placeholder="username"
                        ref={(input) => this.input = input}
                    />
                     <input 
                    type="password"
                    placeholder="password"
                    />
                    
                    <input className="input2" type="submit" value="Login" />
        
                </form>
            </div>
       }
       return (
        <div>
      
      {div}
      
      </div>
    );
 }
}
export default Caretaker;