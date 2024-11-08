document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const taskList = document.getElementById('taskList');

        // Create new task item
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${taskValue}</span>
            <span class="delete">✖</span>
        `;

        // Add event listener to delete task
        li.querySelector('.delete').addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.addEventListener('click', function(event) {
            li.classList.toggle('done');
        })

        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
    }
});