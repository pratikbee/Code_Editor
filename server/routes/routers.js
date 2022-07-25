

const Router=require('express')
const min= require('../controllers/getLang.js');
const max= require( '../controllers/postCode.js');

const miniapp=Router();


miniapp.get('/',min.getLang)
miniapp.post('/code',max.postCode)


module.exports={miniapp};