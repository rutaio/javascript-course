const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value;

  if (taskText === '') {
    alert('Nieko neivedei! IVESK UZDUOTI. :)');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    taskList.removeChild(taskItem);
  };

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = '';
  taskInput.fpcus();
}

addTaskButton.addEventListener('click', addTask); // klausyk kada tave paspaus
