console.log('JS');
$(document).ready(function () {
    console.log('JQ');
    getTask();
    $('#submitBtn').on('click', addTask);
    $('#viewAllTasks').on('click', '.deleteBtn', deleteTask);
    $('#viewAllTasks').on('click', '.upDateTasks', upDateTasks);
});



function addTask() {
    let task = $('#task').val();
    let completed = $('#completed').val();
    if(task == '' ){// not allowing for empty inputs
        alert('Please enter all info');
            return;
    }
    let tasks = {
        task: task,
        completed: completed
    };
    console.log(tasks);
    $.ajax({
        method: 'POST',
        url: `/tasks`,
        data: tasks
    }).then((response) => {
        console.log(response);
        getTask();
        $('#task').val('');
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
        tasksToDom(response);
    }).catch(function (error) {
        console.log(error);

    });
}//end get tasks

function deleteTask() {
    let taskId = $(this).closest('tr').data('id');
    console.log(taskId);
    $.ajax({
        method: `DELETE`,
        url: `/tasks/${taskId}`
    }).then(function (response) {
        console.log(response);
        getTask();
    }).catch(function (error) {
        console.log(error);
    });
}

function upDateTasks() {
    let taskId = $(this).closest('tr').data('id');
    $.ajax({
        method: 'PUT',
        url: `/tasks/doneYet/${taskId}`,
        data: { taskStatus: true }
    }).then(function (response) {
        console.log(response);
        getTask();
    }).catch(function (error) {
        console.log(error);
    });
}
function tasksToDom(array) {
    $('#viewAllTasks').empty();
    console.log('cool stuff', array);
    for (let i = 0; i < array.length; i++) {
        let taco = '';
        if (array[i].taskDone === true) {
            taco = 'YOU DID IT!!'
        } else {
            taco = '<button class="upDateTasks">I just finished this!</button>'

        }
        $('#viewAllTasks').append(`
            <tr class = 'color' data-id = ${array[i].id}>
                <td> ${array[i].task}</td>
                <td class = 'red'>${taco}<td>
                <button data-id = '${taco}' class = 'deleteBtn'>Delete</button>
            </tr> 
        `);
    }
}

