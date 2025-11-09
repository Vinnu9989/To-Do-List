function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = function() { this.classList.toggle('done'); };
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = function() { li.remove(); };
  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
