import { useState } from "react";
import { Child } from "./Child";

export function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child user={{ name: "Frank" }} />
    </>
  );
}