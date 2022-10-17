import { useEffect, useState } from "react";

const Counter = () => {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log(cnt);
  }, [cnt]);

  return (
    <>
      <div>current cnt: {cnt}</div>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        increase counter
      </button>
    </>
  );
};

export default Counter;
