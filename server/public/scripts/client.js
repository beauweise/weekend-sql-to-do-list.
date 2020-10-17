console.log('JS');
$(document).ready(function(){
    console.log('JQ');
    $('#submitBtn').on('click',addTask)
    
});

function addTask(){
    let task = $('#task').val();
    let completed = $('#completed').val();

    let tasks ={
        task: task,
        completed:completed
    };
    console.log(tasks);
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: tasks
    }).then((response)=>{
        console.log(response);
        //getTasks();
    }).catch((error)=>{
        console.log(error);
    });
}
