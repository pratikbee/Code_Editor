import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import ok from './ok.png';
import error from './error.png';


const StatusImage=(props)=>{
    
        if(props.message==="error"){
            return(<Image src={error} rounded></Image>)
        }
        else{
            return(<Image src={ok} rounded></Image>)
        }
    
}

export default StatusImage;