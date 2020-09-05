import React from 'react';
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import '../App.css';
import '../index.css';
import nurse from '../images/2n.jpg';

class patientLogin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false
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
           div  =  <div className="bodyy"> 
           
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={nurse} />
                            <Card.Body>
                                <Card.Title>Welcome {this.input.value}!</Card.Title>
                                <Card.Text>
                                Today is {date}. We hope you're having a good day!
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
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