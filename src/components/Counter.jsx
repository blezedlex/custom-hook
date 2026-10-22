import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(20);

  return (
    <div>
      <h2 className="text-color">{count}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
