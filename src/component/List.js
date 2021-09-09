import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import ListDetails from "./LIstDetails";

const List = () => {
  const { lists } = useContext(TodoContext);
  return lists.length ? (
    <div className="list">
      <ul>
        {lists.map((item) => {
          return <ListDetails item={item} key={item.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> You have no item in the list</div>
  );
};

export default List;
