const run=require('../Runners/RunnerManager.js')
module.exports={ postCode(req,res)
{
    const file=req.body;
    res.send(file)
    run(file.lang,file.code,res)


}
}