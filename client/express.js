const express = require('express');
const app2 = express();

const PORT = 3001;
const cors = require('cors');
app2.use(cors());

app2.get('/route',(req,res)=>{
    res.status(200);
    res.send({message:"Hi From Server"});
})
app2.listen(PORT,error=>{
    if(!error)console.log('Server running at',PORT);
    else console.log(error);
})
