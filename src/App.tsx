import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./Counter";
import Todo from "./Todo";

function App() {

  return (
    <>
      <div>learn react</div>
      <Link to="/counter">Counter App</Link>
      <Link to="/todo">Todo App</Link>
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
