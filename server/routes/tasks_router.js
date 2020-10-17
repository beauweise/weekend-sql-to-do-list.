const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool');





//GET
tasksRouter.get('/', (req, res) => {
    console.log('hello from /tasks get');
    let queryText = `SELECT * FROM "tasks";`;
    pool.query(queryText).then(result => {
        console.log('result from /tasks GET', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('error in /tasks GET', error);
        res.sendStatus(500);
    });
});

//POST
tasksRouter.post('/', (req, res) => {
    console.log('hello from /tasks POST');
    let queryText = `INSERT INTO "tasks"("task","taskDone")
    VALUES($1,$2);`;

    let paramArray = [req.body.task, req.body.taskDone];

    pool.query(queryText, paramArray).then(result => {
        console.log('result from/tasks POST', result);
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in /POST', error);
        res.sendStatus(500);
    });
});

//PUT
tasksRouter.put('/:id', (req, res) => {
    console.log('hello from /tasks PUT');

    let queryText = `UPDATE "tasks" SET "tasksDone" = 'Y' WHERE "id" =$1;`;
    let paramArray = [req.params.id];

    pool.query(queryText, paramArray).then(result => {
        console.log('result from /tasks PUT', result.rows);
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in /tasks PUT', error);
        res.sendStatus(500);
    });
});

//DELETE
tasksRouter.delete('/:id', (req, res) => {
    console.log('hello from /tasks DELETE', req.params.id);
    let queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
    let paramArray = [req.params.id];

    pool.query(queryText, paramArray).then(result => {
        console.log('result from /tasks DELETE');
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in /tasks DELETE');
        res.sendStatus(500);
    });
});

module.exports = tasksRouter;
