import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Edit.scss";

export default function EditTodo() {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/edit/${id}`);
        setTodo(response.data);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, [id]);

  const updateTodo = async () => {
    try {
      await axios.patch(`http://localhost:3000/edit/${id}`, todo);
      navigate("/");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  const goBack = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <div className="EditTodo">
      <h1>Edit Todo</h1>
      <input
        type="text"
        value={todo.title}
        onChange={handleInputChange}
        placeholder="Todo title"
        className="EditTodo__input"
      />
      <div>
        <button onClick={updateTodo} className="EditTodo__update-button">
          Update
        </button>
        <button onClick={goBack} className="EditTodo__goBack-button">
          Go Back
        </button>
      </div>
    </div>
  );
}
