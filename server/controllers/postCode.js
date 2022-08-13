const RunnerManager=require('../Runners/RunnerManager.js')
module.exports = {
    postCode(req, res) {
        const file = req.body;
        console.log(file)
        RunnerManager.run(file.lang, file.code, res)


    }
}