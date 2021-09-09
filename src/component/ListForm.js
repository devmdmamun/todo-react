import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const ListForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_LIST",
      list: {
        title,
      },
    });
    setTitle("");
  };
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoFocus
        />
        <button type="submit">
          <i className="far fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default ListForm;
