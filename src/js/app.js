// app.js

async function renderTodos() {
  const results = await fetchData();
  const tableBody = document.getElementById('todosBody');

  results.forEach(todo => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${todo.title}</td>
      <td>${todo.priority}</td>
      <td>${todo.isDone ? 'Sí' : 'No'}</td>
    `;
    tableBody.appendChild(row);
  });
}

renderTodos();
