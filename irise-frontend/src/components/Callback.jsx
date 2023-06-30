import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
const Callback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    //   const addTodo = useCallback(() => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   }, [todos]);
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New todo"])
    }, [todos])
    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default Callback;