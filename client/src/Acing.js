import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";


function onChange(newValue) {
  console.log("change", newValue);
}



render(
  <AceEditor
    mode="java"
    theme="github"
    onChange={onChange}
    name="ace"
    editorProps={{ $blockScrolling: true }}
  />,
  document.getElementById("ace")
);

export default Acing;