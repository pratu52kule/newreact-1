import React, { useReducer } from "react";
// Reducer function
const reducer = (state, action) => {     // STEP -2
    console.log(state, "- state", action, "- action")
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        case "DOBLEINCREMENT":
            return { count: state.count + 2 };
        default:
            return state;
    }
};
const Counter = () => {
    // Initial state
    const initialState = { count: 0, age: 230 }; // STEP -1
    // useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState); // STEP 3
    // Event handlers  STEP - 5
    const increment = () => {
        dispatch({ type: "INCREMENT"});
    };

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    const doubleINcrement = () => {
        dispatch({ type: "DOBLEINCREMENT" })
    }

    return (  // STEP 4
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={doubleINcrement}>+ 2</button>
        </div>
    );
};
export default Counter;