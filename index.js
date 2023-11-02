document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.querySelector('.todo-list');
    const newTodoInput = document.querySelector('.new-todo');
    const clearCompletedBtn = document.querySelector('.clear-completed');
  
    newTodoInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter' && this.value.trim() !== '') {
        addTodoItem(this.value.trim());
        this.value = '';
      }
    });
  
    todoList.addEventListener('change', function(event) {
      const checkbox = event.target;
      if (checkbox.type === 'checkbox') {
        const todoItem = checkbox.parentElement;
        todoItem.classList.toggle('completed');
      }
    });
  
    clearCompletedBtn.addEventListener('click', function() {
      const completedItems = document.querySelectorAll('.todo-item.completed');
      completedItems.forEach(item => item.remove());
    });
  
    function addTodoItem(todoText) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
  
      const todoLabel = document.createElement('label');
      todoLabel.textContent = todoText;
  
      const todoCheckbox = document.createElement('input');
      todoCheckbox.type = 'checkbox';
  
      todoItem.appendChild(todoCheckbox);
      todoItem.appendChild(todoLabel);
      todoList.appendChild(todoItem);
    }
  });
  