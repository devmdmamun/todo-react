import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ListDetails = ({ item }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li
      onClick={() => {
        dispatch({ type: "REMOVE_LIST", id: item.id });
      }}
    >
      <div>{item.title}</div>
    </li>
  );
};

export default ListDetails;
