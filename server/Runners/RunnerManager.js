const path=require('path')


const FileApi=require( '../api/FileApi.js');
const Pyrunner = require("./PyRunner.js");
const Cpprunner = require("./CppRunner.js");




class Factory {
  constructor(lang)
  {
    this.lang=lang
  } 
   createRunner(lang){
        let runner;
        if (lang==".py"){
            runner=new Pyrunner();
     }
     else if (lang == ".cpp") { 
       runner = new Cpprunner();
     }
     
        return runner;
    }
}

module.exports=
{       run(lang,code,res)
      {
      
      
      
        const factory=new Factory();
        const runner=factory.createRunner(lang.toLowerCase());
        
        const Directory=path.join(__dirname,'templates');
        const File=path.join(Directory,runner.defaultFile());
        const filename=path.parse(File).main;
        const extension=path.parse(File).ext;


        FileApi.saveFile(File, code, () => {
            runner.run(File, Directory, filename, extension, (status, message) => {
              const result = {
                status,
                message,
              };
              return res.send(JSON.stringify(result))
              
            });
          });

    }
  }