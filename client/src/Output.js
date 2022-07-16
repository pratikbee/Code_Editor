import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';


const Output=()=>{
    return(
        <FormControl
        name='code'
        type="textarea"
        
        rows="10"
        
        readOnly
        value='output \n'>


        </FormControl>
    )
}

export default Output;