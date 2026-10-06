import { useReducer } from "react";

type State = {
  count: number;
};

type Action = | { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  // your code
}


function Test() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      
    </div>
  )
}

export default Test
