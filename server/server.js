const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

let tasksRouter = require('./routes/tasks_router')  
app.use('/tasks',tasksRouter);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('listing on port',PORT);
}); 