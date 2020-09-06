import React from 'react';

import '../App.css';
import '../index.css';


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
       div  = <h1>OK</h1>
      }else {
                div = <div>
                <h1>Welcome Care Taker!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="favcolor"> </label>
                   
                    <input
                        type="text"
                        ref={(input) => this.input = input}
                    />
                     <input 
                    type="password"
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