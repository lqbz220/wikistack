const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require ('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    res.send(console.log('hello world'))});

const PORT=1337;
app.listen(PORT, () =>{console.log('Server is running!')});