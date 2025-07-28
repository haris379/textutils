import React, { useState } from "react";

export default function AppCounter() {
  const [count, setCount] = useState(0);

  const IncrementOnClick = () => {
    setCount(count + 1);
  };

  const DecrementOnClick = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button className="btn btn-primary mx-3" onClick={IncrementOnClick}>
        Increment
      </button>
      <p>{count}</p>
      <button className="btn btn-primary mx-3" onClick={DecrementOnClick}>
        Decrement
      </button>
    </>
  );
}
