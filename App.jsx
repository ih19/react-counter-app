import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // GET - Fetch all todos on load
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // POST - Add a new todo
  const addTodo = () => {
    if (!task.trim()) return;
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, completed: false })
    })
      .then(res => res.json())
      .then(newTodo => {
        setTodos([...todos, newTodo]);
        setTask('');
      });
  };

  // DELETE - Remove a todo
  const deleteTodo = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => setTodos(todos.filter(t => t.id !== id)));
  };

  // PATCH - Toggle completed status
  const toggleComplete = (todo) => {
    fetch(`${API_URL}/${todo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed })
    })
      .then(res => res.json())
      .then(updated => {
        setTodos(todos.map(t => t.id === updated.id ? updated : t));
      });
  };

  // Start editing a todo
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.task);
  };

  // PUT - Save edited todo name
  const saveEdit = (id) => {
    if (!editText.trim()) return;
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task: editText,
        completed: todos.find(t => t.id === id).completed
      })
    })
      .then(res => res.json())
      .then(updated => {
        setTodos(todos.map(t => t.id === updated.id ? updated : t));
        setEditingId(null);
        setEditText('');
      });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="app-wrapper px-3">

      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="app-title">📝 Todo List</h1>
        <p className="app-subtitle">Stay organized. Get things done.</p>
        <div className="d-flex justify-content-center gap-2 mt-2">
          <span className="badge bg-primary badge-count">{todos.length} Total</span>
          <span className="badge bg-success badge-count">{completedCount} Done</span>
          <span className="badge bg-warning text-dark badge-count">{todos.length - completedCount} Remaining</span>
        </div>
      </div>

      {/* Add Todo Card */}
      <div className="card add-card mb-4 p-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            + Add
          </button>
        </div>
      </div>

      {/* Todo List Card */}
      <div className="card todo-card p-3">
        {todos.length === 0 ? (
          <div className="text-center py-4 empty-state">
            <div style={{ fontSize: '2.5rem' }}>🎉</div>
            <p className="mt-2">No todos yet! Add one above.</p>
          </div>
        ) : (
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`todo-item p-3 d-flex align-items-center gap-2 ${todo.completed ? 'completed-item' : ''}`}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  className="form-check-input mt-0 flex-shrink-0"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />

                {/* Text or Edit Input */}
                {editingId === todo.id ? (
                  <input
                    type="text"
                    className="edit-input flex-grow-1"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveEdit(todo.id);
                      if (e.key === 'Escape') cancelEdit();
                    }}
                    autoFocus
                  />
                ) : (
                  <span className={`todo-text flex-grow-1 ${todo.completed ? 'completed' : ''}`}>
                    {todo.task}
                  </span>
                )}

                {/* Action Buttons */}
                <div className="d-flex gap-1 flex-shrink-0">
                  {editingId === todo.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm btn-action"
                        onClick={() => saveEdit(todo.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm btn-action"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-outline-primary btn-sm btn-action"
                        onClick={() => startEdit(todo)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm btn-action"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        🗑️ Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default App;
