import React,{useState} from "react";
import "./App.scss";
import CompilerApi from "./api/CompilerApi";
import Acing from "./Acing";







const App = () => {
  const [state,setState] = useState({
    selectedLang: 0, // JavaScript
    task: {
      lang: 'python',
      code: '',
    },
    response: {
      status: '0',
      message: '',
    },
  })

  function handleCodeChange(code) {
    const { task } = state;
    task.code = code;
    
    return setState({ task });
  }

  function handleRun(event) {
    event.preventDefault();
    const { task } = state;
    ;
    fetch("http://localhost:5000/code", {
     
   
    method: "POST",
     
    
    body: JSON.stringify({
        lang:".py",
        code:state.task.code
    }),
     
    
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
.then(response => response.json())
 

.then(res=>{const {response}=state;
response.message=res.message
return setState({response})
});
  }
  return (
    <>
   <> <Acing state={state} setState={setState}/></>
    <>
    <h1>{state.response.message===""?"hehe":state.response.message}</h1>
    <button  onClick={handleRun}>Press Me</button>
    </>
    {/* <br/>
    <br/>
    <br/>

    <input   type={'text'} onChange={(code)=>{handleCodeChange(code);console.log(state.task.code)}}>

    </input>
    <br/>
    <br/>
    <br/>
    <h1>{state.response.message===""?"hehe":state.response.message}</h1>

    <input value={"press me"} type={"button"} onClick={handleRun}></input> */}
    </>
  );
};

export default App;
