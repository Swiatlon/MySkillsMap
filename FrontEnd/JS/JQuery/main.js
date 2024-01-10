$(document).ready(function () {
  $('#add-task-btn').click(function () {
    const inputValue = $('#new-task').val();
    $("#task-list").append(
        `<div><p>Task: ${inputValue}</p> <button>DELETE</button> <button>COMPLETED</button></div>`
        )
  });
});
