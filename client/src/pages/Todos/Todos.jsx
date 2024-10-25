import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Todos.scss";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios("http://localhost:3000/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTodo = async () => {
    try {
      const response = await axios.post("http://localhost:3000/", {
        title: newTodo,
      });

      setTodos([...todos, response.data]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  const updateTodoStatus = async (id, isDone) => {
    try {
      await fetch(`http://localhost:3000/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isDone: !isDone }),
      });

      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, isDone: !isDone } : todo
        )
      );
    } catch (error) {
      console.error("Error changing todo status", error);
    }
  };

  return (
    <div className="Todos">
      <h1>Todos</h1>

      <div className="Todos__input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos.map((todo) => (
        <div className="Todos__item" key={todo._id}>
          <p className={todo.isDone ? "done" : ""}>{todo.title}</p>
          <div className="buttons">
            <Link to={`/edit/${todo._id}`} className="edit-button">
              Edit
            </Link>{" "}
            {/* Use Link here */}
            <button
              onClick={() => deleteTodo(todo._id)}
              className="delete-button"
            >
              Delete
            </button>
            <input
              checked={todo.isDone}
              type={"checkbox"}
              onClick={() => updateTodoStatus(todo._id, todo.isDone)}
              className="toggle-checkbox"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
