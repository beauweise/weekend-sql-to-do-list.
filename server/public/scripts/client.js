const { put } = require("../../routes/tasks_router");

console.log('JS');
$(document).ready(function () {
    console.log('JQ');
    $('#submitBtn').on('click', addTask);
    $('#viewAllTasks').on('click', '.deleteBtn', deleteTask);
    getTask();
});

// function addTask() {
//     let task = $('#task').val();
//     let completed = $('#completed').val();

//     let tasks = {
//         task: task,
//         completed: completed
//     };
//     console.log(tasks);
//     $.ajax({
//         method: 'POST',
//         url: `/tasks`,
//         data: tasks
//     }).then((response) => {
//         console.log(response);
//         getTask();
//     }).catch((error) => {
//         console.log(error);
//     });
// }


// function getTask() {
//     console.log('in getTask');

//     $.ajax({
//         method: 'GET',
//         url: `/tasks`
//     }).then(function (response) {
//         tasksToDom(response);
//     }).catch(function(error){
//         console.log(error);
        
//     });
// }//end get tasks

// function deleteTask() {
//     let taskId = $(this).closest('tr').data('id');
//     console.log(taskId);
//     $.ajax({
//         method: `DELETE`,
//         url: `/tasks/${taskid}`
//     }).then(function(response){
//         console.log(response);
//         getTask();
//     }).catch(function(error){
//         console.log(error);
//     });
// }

// function putTask() {
//     let taskData = $(this).closest('tr').data('id');
//     $.ajax({
//         method: 'PUT',
//         url: `/tasks/${taskId}`,
//         data:{taskStatus:true}
//     }).then(function(response){
//         console.log(response);
//         getTask();
//     }).catch(function(error){
//         console.log(error);
//     });
// }
function tasksToDom(array){
    $('#viewAllTasks').empty();
    console.log('cool stuff',array);
    for (let i = 0; i < array.length; i++){
        let taco ='';
        if(array[i].tasksDone === false){
            taco = 'You need to finish this task'
        } else {
            taco = '<button class="taskDone">I just finished this!</button>'

        }
    }
}
// for (let i = 0; i < response.length; i++)
//             $('#viewAllTasks').append(`
//             <tr>
//                 <td> ${response[i].task}</td>
//                 <td>${response[i].taskDone}</td>
//                 <td><button data-id = '${response[i].id}' 
//                 class = "${response[i].taskDone}">Done?</button></td>
//                 <td><button data-id = '${response[i].id}'class = 'deleteBtn'>Delete</button></td>
//             </tr>    
//             `)
