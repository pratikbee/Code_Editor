import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import 'react-bootstrap/Button';


const AlertDismissable = ({newstate,setnewState}) => {
    
    
    
    
    
    
    function handleDismiss() {
        return setnewState({
          selectedLang: newstate.selectedLang,
          task: {
            lang: newstate.selectedLang,
            code: newstate.task.code,
          },
            response: {
                status: "0",
                message:""
          },
        });
        
    }
    
    return newstate.response.status === "0" ? (
      <div>
        <p></p>
      </div>
    ) : (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Holy Oh snap! You got an error!</strong>
        {newstate.response.message}
        <button
          onClick={() => {
            handleDismiss();
          }}
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          Click to dismiss
        </button>
      </div>
      // <Alert
      //     variant="danger"

      //   onClose={() => {
      //     handleDismiss();
      //   }}
      //   dismissible
      // >
      //   <Alert.Heading>Oh snap! You got an error!</Alert.Heading>

      //   <p style={{ whiteSpace: "pre-wrap" }}>{newstate.response.message}</p>
      // </Alert>
    );
}



export default AlertDismissable;