const express =require('express')
const cors=require('cors')
const min = require( './routes/routers.js');



const app=express();
app.use(express.json())

app.use(cors());

const port=5000;
app.use('/',min.miniapp)






app.listen(port,()=>{console.log(`listening at port ${port}`)})