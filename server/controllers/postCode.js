const RunnerManager=require('../Runners/RunnerManager.js')
module.exports={ postCode(req,res)
{
    const file=req.body;
    res.send(file)
    RunnerManager.run(file.lang,file.code,res)


}
}