import { useState, useEffect } from "react";

const Fetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const _res = await fetch("https://test-api.free.beeceptor.com");
      setData(await _res.json());
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((transaction, index) => {
        return (
          <div key={index}>
            <p>transaction id: {index}</p>
            <p>{transaction.arrangementId}</p>
            <p>{transaction.availableBalance}</p>
            <p>{transaction.bookedBalance}</p>
            <p>{transaction.creditLimit}</p>
            <p>{transaction.currentInvestmentValue}</p>
            <p>{transaction.outstandingPrincipalAmount}</p>
          </div>
        );
      })}
    </>
  );
};

export default Fetching;
