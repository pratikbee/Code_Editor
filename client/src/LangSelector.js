import React, { useState} from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';


const LangSelector = ({ langs,selectedIndex,onChange}) => {
    
     console.log(selectedIndex)
    return (
      <ButtonToolbar>
        <select
          id="langs"
          value={selectedIndex.selectedLang}
          onChange={onChange}
          className="selectpicker"
        >
          <option key="-1" value={"none"}>
            Select language
          </option>

          <option key="0" value={langs[0]}>
            Python
          </option>
          <option key="1" value={langs[1]}>
            C++
          </option>
          <option key="2" value={langs[2]}>
            C
          </option>
          <option key="3" value={langs[3]}>
            JavaScript
          </option>
        </select>
      </ButtonToolbar>
    );
}



export default LangSelector;

