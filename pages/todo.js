import { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div>current todos:</div>
      {todos.map((todo) => {
        return <div key={todo}>{todo}</div>;
      })}

      <label>
        todo:
        <input ref={inputRef} />
      </label>
      <button
        onClick={() => {
          setTodos([...todos, inputRef.current.value]);
        }}
      >
        add todo
      </button>
    </>
  );
};

export default Todo;
