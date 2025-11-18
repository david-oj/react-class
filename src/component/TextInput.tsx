import React, { useState } from "react";

const TextInput = () => {
  const [input, setInput] = useState("");
  return (
    <div className="w-full p-10 my-10 px-8 ">
      <input className="border rounded-lg px-3 py-2" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
     {/* {input.trim() && <p className="mt-3">You typed: {input} </p>} */}
     {input.trim() ? <p className="mt-3">You typed: {input} </p> : <p className="mt-3">Please type something</p>}
    </div>
  );
};

export default TextInput;

// A && B  {do something}
// A || B  {do something}