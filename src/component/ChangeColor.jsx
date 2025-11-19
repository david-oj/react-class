import React, { useEffect, useState } from "react";

const ChangeColor = () => {
  const [changeColor, setChageColor] = useState(true);

  useEffect(() => {
    console.log(`The color has changes hence he value is now ${changeColor}`);
  }, [changeColor]);

  return (
    <div className="w-full p-10 my-10 px-8 ">
      <div className="flex flex-col justify-center items-center">
        <div
          className={`${
            changeColor ? "bg-green-400" : "bg-red-600"
          } size-[300px] rounded-2xl transition-colors duration-200`}
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

export default ChangeColor;
