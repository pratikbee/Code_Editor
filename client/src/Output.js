import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';


const Output=(props)=>{
    
        if (props.show){
            return(
                <FormControl
                    name='code'
                    type="textarea"
        
                    rows="10"
        
                    readOnly
                    value={props.message}>


                </FormControl>
            )
        }
        return(
                <FormControl
                    name='code'
                    type="textarea"
        
                    rows="10"
        
                    readOnly
                    value=''>


                </FormControl>
        )
        
    
}

export default Output;