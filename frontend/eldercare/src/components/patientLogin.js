import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import '../App.css';
import '../index.css';


function patientLogin() {

    return(
        <div>
            <h1>Welcome Patient!</h1>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <Button variant="outline-secondary">Button</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
        </div>
    );
}


export default patientLogin;