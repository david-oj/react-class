import React, { useState } from 'react'

const FetchData = () => {false

    const [changeColor, setChageColor] = useState(true)
  return (
    <div className='w-full p-10 my-10 px-8 '>
        <div className={`${changeColor ? "bg-green-400" : "bg-red-600"} size-[300px] rounded-2xl`}></div>
          <button className='border rounded-lg bg-black text-white px-3 py-2 cursor-pointer ' onClick={() => setChageColor((prev)=> !prev)}>Decrement</button>
    </div>
  )
}

export default FetchData