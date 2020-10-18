const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

const tasksRouter = require('./routes/tasks_router');  

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/tasks', tasksRouter);

app.listen(PORT,()=>{
    console.log('listing on port',PORT);
}); 
