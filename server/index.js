import express from 'express';
import cors from 'cors';
import miniapp from './routes/routers.js';



const app=express();
app.use(express.json())

app.use(cors());

const port=5000;
app.use('/',miniapp)






app.listen(port,()=>{console.log(`listening at port ${port}`)})