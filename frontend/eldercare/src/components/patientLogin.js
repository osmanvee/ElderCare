import React from 'react';
import { Button, InputGroup, FormControl, Card, Accordion, Form } from 'react-bootstrap';
import '../App.css';
import '../index.css';
import nurse from '../images/2n.jpg';
import sleep from '../images/sleep.png';
import tired from '../images/tired1.png';
import med from '../images/med1.png';
import food from '../images/food.png';

class patientLogin extends React.Component{

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
    handleSubmit2 = event => {
        event.preventDefault();
        
        this.setState({isSubmitted: true});
        
         
      };
   
    render() {
        let div = '';
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        
        if(this.state.isSubmitted) {
            //MAIN HANDLING
           div  =
           <div> 
            <div className="bodyy"> 

                        <span id="card1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sleep} />
                            <Card.Body>
                                <Card.Title> {this.input.value}, how was your sleep last night?</Card.Title>
                                <Card.Text>
                                
                                <Form >
                                    <Form.Group controlId="formBasicRange">
                                        <Form.Control type="range" />
                                        
                                    </Form.Group>
                                    <Button variant="primary" size="lg" disabled>
                                            Submit
                                        </Button>{' '}
                                </Form>
                                
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </span>

                        <span id="card1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nurse} />
                            <Card.Body>
                                <Card.Title> <h4> Welcome {this.input.value}! </h4> </Card.Title>
                                <Card.Text>
                                <h5> Today is {date}. </h5>  We hope you're having a good day!
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </span>
                        
                        <Accordion>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                   <h5>  Joke of the Day! </h5>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <h5> Hear about the new restaurant called Karma? </h5> 

                                There’s no menu: You get what you deserve.
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <h5>  Video of the Day! </h5>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <iframe width="250" height="auto" src="https://www.youtube.com/embed/rkZl2gsLUp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                               
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>

                    <div className="bodyy"> 

                        <span id="card1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={tired} />
                            <Card.Body>
                                <Card.Title>  {this.input.value}, Did you find any task slightly more difficult than usual? </Card.Title>
                                <Card.Text>
                                <p>e.g: Walking to the loo, finding groceries, operating TV? </p>
                                <Form >
                                    <div> 
                                    <Button variant="success" size="lg" disabled>
                                            Yes
                                        </Button>{' '}
                                        <Button variant="danger" size="lg" disabled>
                                            No
                                        </Button>{' '}
                                        </div>
                                </Form>
                                
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </span>

                        <span id="card1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={med} />
                            <Card.Body>
                                <Card.Title>  {this.input.value}, Did you take all your medications today? </Card.Title>
                                <Card.Text>
                                <p>Medicine 1, 2, 3</p>
                                <Form >
                                    <div> 
                                    <Button variant="success" size="lg" disabled>
                                            Yes
                                        </Button>{' '}
                                        <Button variant="danger" size="lg" disabled>
                                            No
                                        </Button>{' '}
                                        </div>
                                </Form>
                                
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </span>
                        <span id="card1">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food} />
                            <Card.Body>
                                <Card.Title>  What did you eat today? </Card.Title>
                                <Card.Text>
                                
                                <Form >
                                   <input type="text" />
                                    <Button variant="success" size="lg" disabled>
                                            Submit
                                        </Button>{' '}
                    
                                        
                                </Form>
                                
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        </span>
                        </div>
                    </div>
                    
        } else {
            div = <div>
                <h1>Welcome Patient!</h1>
                 <form onSubmit={this.handleSubmit}>
                    <label htmlFor="favcolor"> </label>
                    <input
                        type="text"
                        ref={(input) => this.input = input}
                    />
                    
                    <input className="input2" type="submit" value="Sign up" />
          
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
  



export default patientLogin;