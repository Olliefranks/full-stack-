import { useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const fetchHandler = async () => {
    let response = await fetch("http://localhost:4000/todos/items");
    let data = await response.json();
    setTodos(data.todos);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  if (!todos) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <h1>home page</h1>
      {todos.map((item, index) => {
        return <h2>{item.text}</h2>;
      })}
    </div>
  );
};

export default Home;
