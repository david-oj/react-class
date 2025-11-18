import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full p-10 my-10 px-8 '>
      <div className="rounded-2xl botder flex flex-col  justify-center items-center ">
        <h2 className='text-2xl font-bold'>Counter</h2>
        <p className='text-xl mt-4'>Count: {Math.max(0, count)}</p>

        <div className="space-x-4 mt-4">
          <button className='border rounded-lg bg-black text-white px-3 py-2 cursor-pointer ' onClick={() => setCount(count + 1)}>Increment</button>
          <button className='border rounded-lg bg-black text-white px-3 py-2 cursor-pointer ' onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter