import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

var ace = require('brace');
import 'brace/mode/javascript';
import 'brace/mode/java'
import 'brace/theme/github';
import "brace/theme/monokai";
import 'brace/mode/python';
import 'brace/mode/c_cpp'


const Acing = ({ newstate, settingState }) => {
 
  
  function settingVal(val) {settingState({
    selectedLang: newstate.selectedLang, 
    task: {
      lang: newstate.selectedLang,
      code: val,
    },
    response: {
      status: "0",
      message: "",
    },
  });
    
  
  }
  
  const editorStyle = {
    border: '1px solid lightgray',
  };
  var mode="python"
  if (newstate.selectedLang === '.py') {
    mode = "python";
  }
  else if (newstate.selectedLang ==='.js') { 
    mode="javascript"
  }
  else if (newstate.selectedLang === '.c' || newstate.selectedLang=== '.cpp') {
    mode='c_cpp'
  }
    return (
      <AceEditor
        style={editorStyle}
        readOnly={false}
        onChange={(val) => {
          settingVal(val);
        }}
        value={newstate.task.code}
        width="100%"
        height="200px"
        mode={ mode}
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