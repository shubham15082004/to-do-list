document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);

        const taskDescription = document.createElement('span');
        taskDescription.textContent = taskText;
        taskDescription.className = 'task-text';
        taskDescription.contentEditable = true; // Makes the text editable on click

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => taskDescription.focus());

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => taskItem.remove());

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskDescription);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}

function toggleTaskCompletion(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
}
