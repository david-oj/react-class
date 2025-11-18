import React, { useState } from "react";

const FetchData = () => {
  const [changeColor, setChageColor] = useState(true);

  return (
    <div className="w-full p-10 my-10 px-8 ">
      <div className="flex flex-col justify-center items-center">
        <div
          className={`${
            changeColor ? "bg-green-400" : "bg-red-600"
          } size-[300px] rounded-2xl`}
        ></div>
        <button
          className="border rounded-lg bg-black text-white px-3 py-2 cursor-pointer mt-4 w-fit mx-auto"
          onClick={() => setChageColor((prev) => !prev)}
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default FetchData;
