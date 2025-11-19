import React, { useEffect, useState } from "react";

const AutoCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="w-full p-10 my-10 px-8 ">
      <div className="flex flex-col gap-2 justify-center items-center"> 
        <h2 className="text-xl font-semibold">AutoCount:</h2>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default AutoCount;
