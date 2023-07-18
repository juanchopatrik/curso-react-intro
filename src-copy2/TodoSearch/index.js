import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  todos, setTodos
}
) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={todos}
      onChange={(event) => {
        setTodos(event.target.value);
      }}
    />
  );
}

export { TodoSearch };