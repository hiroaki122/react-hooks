import React, { useState } from "react";

const App = () => {
  const initialStates = {
    name: "",
    price: 1000,
  };
  const [state, setState] = useState(initialStates);

  const reset = () => {
    setState(initialStates);
  };
  return (
    <>
      <p>
        現在の{state.name}は、{state.price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: state.price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 1 })}>
        -1
      </button>
      <button onClick={reset}>reset</button>
      <input
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

export default App;
