const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    console.log('hello from /tasks get');
    let queryText = `SELECT * FROM "tasks";`;
    pool.query(queryText).then((result) => {
        console.log('result from /tasks GET', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in /tasks GET', error);
        res.sendStatus(500);
    });
});

// POST
router.post('/', (req, res) => {
    console.log('hello from /tasks POST');
    let task = req.body.task;
    let queryText = `INSERT INTO "tasks"("task") VALUES ($1);`;

    pool.query(queryText, [task]).then((result) => {
        console.log('result from/tasks POST', result);
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in /POST', error);
        res.sendStatus(500);
    });
});

// PUT
router.put('/:id', (req, res) => {
    console.log('hello from /tasks PUT');
    let taskId = req.params.id;
    let tasksDone = req.body.taskStatus;

    let queryText = `UPDATE "tasks" SET "tasksDone" = '$1' WHERE "id" =$2;`;
    pool.query(queryText, [taskId,tasksDone]).then((result) => {
        console.log('result from /tasks PUT', result.rows);
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in /tasks PUT', error);
        res.sendStatus(500);
    });
});

//DELETE
router.delete('/:id', (req, res) => {
    console.log('hello from /tasks DELETE', req.params.id);
    let taskId = [req.params.id];
    let queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
    

    pool.query(queryText, [taskId]).then((result) => {
        console.log('result from /tasks DELETE');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in /tasks DELETE', error);
        res.sendStatus(500);
    });
});

module.exports = router;
