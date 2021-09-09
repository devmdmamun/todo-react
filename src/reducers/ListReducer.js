import { v4 as uuidv4 } from "uuid";

export const ListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          title: action.list.title,
          id: uuidv4(),
        },
      ];
    case "REMOVE_LIST":
      return state.filter((list) => list.id !== action.id);
    default:
      return state;
  }
};
