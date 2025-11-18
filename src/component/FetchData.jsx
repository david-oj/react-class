import React, { useState } from 'react'

const FetchData = () => {false

    const [changeColor, setChageColor] = useState(false)
  return (
    <div className='w-full p-10 my-10 px-8 '>
        <div className={`${changeColor ? "bg-red-600" : "bg-green-400"} size-[300px] `}></div>
    </div>
  )
}

export default FetchData