import { useEffect, useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "wrong") {
      alert("wrong input!");
      setValue("now it's right");
    }
  }, [value]);

  return (
    <>
      <div>type the word wrong to see an alert</div>
      <label>
        input:
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
    </>
  );
};

export default ControlledInput;
