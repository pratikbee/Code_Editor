

import { Router } from 'express';
import getLang from '../controllers/getLang.js';
import postCode from '../controllers/postCode.js';

const miniapp=Router();


miniapp.get('/',getLang)
miniapp.get('/code',postCode)


export default miniapp;