import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

var ace = require('brace');
import 'brace/mode/javascript';
import 'brace/theme/github';
import "brace/theme/monokai"

function onChange(newValue) {
  console.log("change", newValue);
}

const editorStyle = {
  border: '1px solid lightgray',
};

render(
  <AceEditor
  style={editorStyle}
  readOnly={false}
  
  width="100%"
  height="200px"
  mode="javascript"
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
/>,
  document.getElementById("ace")
);

export default Acing;