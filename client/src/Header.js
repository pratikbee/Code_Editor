import React from 'react';
import { Button ,ButtonToolbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header=()=>{
    return (
      <div>
        <div className="container">
          <h2>React App - Online Code Editor</h2>
          <ButtonToolbar>
            <Link to="/">
              <Button bsStyle="info">Home</Button>
            </Link>
            <Link to="/editor">
              
              <Button style={{marginLeft:20}} bsStyle="info" href="/editor">
                Code Editor
              </Button>
            </Link>
          </ButtonToolbar>
        </div>
        <hr />
      </div>
    );
}
export default Header;