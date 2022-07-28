import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

var ace = require('brace');
import 'brace/mode/javascript';
import 'brace/theme/github';
import "brace/theme/monokai";
import 'brace/mode/python';


const Acing=(props)=>{
  
  function setVal(val){
    
    
        
      console.log(props.state)
      props.setState(
        {
          selectedLang: 0, // JavaScript
          task: {
            lang: 'python',
            code: val,
          },
          response: {
            status: '0',
            message: '',
          },
        }
      )
  }
  
  const editorStyle = {
    border: '1px solid lightgray',
  };
return(
  <AceEditor
  style={editorStyle}
  readOnly={false}
  onChange={(val)=>setVal(val)}
  value={props.code}
  width="100%"
  height="200px"
  mode="python"
  theme="github"
  name="aceCodeEditor"
  // onLoad={this.onLoad}
  fontSize={14}
  showPrintMargin
  showGutter
  highlightActiveLine
  
  editorProps={{
    $blockScrolling: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
  }}
  setOptions={{
    showLineNumbers: true,
    tabSize: 2,
  }}
/>
);
}

export default Acing;