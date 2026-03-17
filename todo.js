const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑';
  deleteBtn.classList.add('delete-btn');

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  todoInput.value = '';
});



