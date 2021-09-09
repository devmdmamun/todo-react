import TodoContextProvider from "./context/TodoContext";
import Navbar from "./component/Navbar";
import List from "./component/List";
import ListForm from "./component/ListForm";
function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <List />
        <ListForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
