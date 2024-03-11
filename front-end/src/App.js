import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./pages/AddTodo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
