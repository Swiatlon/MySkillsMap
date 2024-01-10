$(document).ready(function () {
  // Function to add a new task
  function addTask() {
    var taskText = $('#new-task').val();
    if (taskText.trim() === '') {
      return; // Do not add empty tasks
    }

    var newTask = $('<li><span class="task-text"></span><div class="task-buttons"><button class="delete-btn">Delete</button> <button class="complete-btn">Complete</button></div></li>');
    newTask.find('.task-text').text(taskText);

    // Event handler for the delete button
    newTask.find('.delete-btn').on('click', function () {
      $(this).closest('li').fadeOut(function () {
        $(this).remove();
      });
    });

    // Event handler for the completion button
    newTask.find('.complete-btn').on('click', function () {
      $(this).closest('li').addClass("completed");
    });

    // Add the new task to the task list
    $('#task-list').append(newTask.hide().slideDown('slow'));
    $('#new-task').val(''); // Clear the input field
  }

  // Event handler for adding a task
  $('#add-task-btn').on('click', function () {
    addTask();
  });

  // Event handler for pressing Enter in the input field
  $('#new-task').on('keypress', function (e) {
    if (e.which === 13) {
      addTask();
    }
  });

  // Event handler for filtering tasks
  $('input[name="filter"]').on('change', function () {
    var filterValue = $(this).val();
    if (filterValue === 'all') {
      $('#task-list li').show();
    } else if (filterValue === 'active') {
      $('#task-list li.completed').hide();
      $('#task-list li:not(.completed)').show();
    } else if (filterValue === 'completed') {
      $('#task-list li:not(.completed)').hide();
      $('#task-list li.completed').show();
    }
  });

  // Event handler for clearing completed tasks
  $('#clear-completed-btn').on('click', function () {
    $('#task-list li.completed').remove();
  });
});