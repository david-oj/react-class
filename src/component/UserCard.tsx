import { useState } from "react";
import { flower } from "../assets";

const UserCard = ({name, title, age, image, hobbies}) => {
    const [count, setCount] = useState();
  return (
    <div className="p-8 bg-[#f5f5f5] mt-10 min-w-[220px] w-fit rounded-2xl flex flex-col items-center gap-3 justify-center">
      <div className="size-[120px] rounded-full ">
        <img
          src={image}
          alt="user image"
          className="rounded-full size-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-xl mb-2"> {name} </h2>
        <p className="font-semibold">{title}</p>
        <p className="font-semibold">{age} years old</p>
        <h3 className="font-semibold mt-2">Hobbies:</h3>
        <ul className="flex flex-col items-center">
        { 
           ( hobbies || []).map((hobbie, index) => (
                <li key={index} >{hobbie}</li>
            ) )
        }
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
