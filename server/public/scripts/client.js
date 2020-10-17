const { response } = require("express");

console.log('JS');
$(document).ready(function () {
    console.log('JQ');
    $('#submitBtn').on('click', addTask)

});

function addTask() {
    let task = $('#task').val();
    let completed = $('#completed').val();

    let tasks = {
        task: task,
        completed: completed
    };
    console.log(tasks);
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: tasks
    }).then((response) => {
        console.log(response);
        getTask();
    }).catch((error) => {
        console.log(error);
    });
}


function getTask() {
    console.log('in getTask');

    $.ajax({
        method: 'GET',
        url: `/tasks`
    }).then(function (response) {
        console.log('get response', response);
        for (let i = 0; i < response.length; i++)
            $('#viewAllTasks').append(`
            <tr>
                <td> ${response[i].task}</td>
                <td>${response[i].taskDone}</td>
                <td><button data-id = '${response[i].id}' 
                class = "${response[i].taskDone}">Done?</button></td>
                <td><button data-id = '${response[i].id}'class = 'deleteBtn'>Delete</button></td>
            </tr>    
            `)

    })
}//end get tasks

function deleteTask() {
    let taskId = $(this).data('id');
    console.log('hello from deletetask() id:', taskid);
    $.ajax({
        method: `DELETE`,
        url: `/tasks/${taskid}`
    }).then((response) => {
        console.log(response);
        $('#viewAllTasks').empty();
        getTask();
    }).catch((error) => {
        console.log(error);

    });
}

function putTask(){
    let taskData = $(this).data('id');
    $.ajax({
        method: 'PUT',
        url:`/tasks/${taskid}`
    }).then(function (erro) {
        alert('error in putTask',error)
    });
}