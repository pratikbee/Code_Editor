const {spawn}=require('child_process');

const Runner=require('./Runner.js')


class PythonRunner extends Runner {
  constructor() {
    super();
    this.defaultfile = 'Hello.py';
  }
    defaultFile() {
      return this.defaultfile;
    }
  
   
  
    run(file, directory, filename, extension, callback) {
      if (extension.toLowerCase() !== '.py') {
        console.log(`${file} is not a python file.`);
      }
      this.execute(file, directory, callback);
    }
  
    execute(file, directory, callback) {
      // set working directory for child_process
      const options = { cwd: directory };
      const argsRun = [];
      argsRun[0] = file;
      console.log(`options: ${options}`);
      console.log(`argsRun: ${argsRun}`);
      const executor = spawn('python', argsRun, options);
      executor.stdout.on('data', (output) => {
        var data=output.toString()
        console.log(data);
        callback('0', String(output)); // 0, no error
      });
      executor.stderr.on('data', (output) => {
        
        console.log(`stderr: ${String(output)}`);
        callback('2', String(output)); // 2, execution failure
      });
      executor.on('close', (output) => {
        this.log(`stdout: ${output}`);
      });
    }
  
    log(message) {
      console.log(message);
    }
  }
  
  module.exports = PythonRunner;
  