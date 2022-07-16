import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';


const LangSelector=()=>{
    return(
    <ButtonToolbar>
        <select 
            id="langs"
            value="string0"
            onChange={(Event)=>{console.log(`you clicked ${Event.target.value}`)}}
            className="selectpicker">
            <option key="1" value="string1">string1</option>
            <option key="2" value="string2">string2</option>
            <option key="3" value="string3">string3</option>
            <option key="4" value="string4">string4</option>
            <option key="5" value="string5">string5</option>
        </select>
    </ButtonToolbar>)
}

// LangSelector.PropTypes={

// }


export default LangSelector;