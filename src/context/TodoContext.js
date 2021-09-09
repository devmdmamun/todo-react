import { createContext, useReducer, useEffect } from "react";
import { ListReducer } from "../reducers/ListReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [lists, dispatch] = useReducer(ListReducer, [], () => {
    const localData = localStorage.getItem("lists");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <TodoContext.Provider value={{ lists, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
