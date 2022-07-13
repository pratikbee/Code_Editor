import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';


const AlertDismissable=(props)=>{
    const [state,setState]=useState(props.show);
    console.log(state)
    function handleDismiss(){
        setState(false)
    }
    function handleAlertShow(){
        setState(true)
    }
    return(
        
            state?<Alert variant="danger" onClose={()=>
                {handleDismiss()}}
                dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p style={{whiteSpace:"pre-wrap"}}>{props.message}</p>
            </Alert>:
            <div><p>Alert</p></div>
        
    )
}

AlertDismissable.propTypes={
    show:PropTypes.bool.isRequired,
    message:PropTypes.string.isRequired
};

export default AlertDismissable;