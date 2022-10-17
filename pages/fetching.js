import { useState, useEffect } from "react";

const Fetching = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const _res = await fetch(
        "https://www.pbinfo.ro/ajx-module/probleme/json-categorii-concursuri.php"
      );
      const data = await _res.text();
      console.log(data);
      setText(data);
    };

    fetchData();
  }, []);

  return <div>{text}</div>;
};

export default Fetching;
