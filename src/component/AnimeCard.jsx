import { useState } from "react";
import Star from "./icon/Star";
import Video from "./icon/Video";
import { Link, useNavigate } from "react-router-dom";

const AnimeCard = ({ anime: { name, kind, episodes, score, image, id } }) => {
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  const handleRoute = (id) => {
    navigate(`/anime/${id}`);
  };

  return (
    <div className="mb-4 text-white">
      <div className=" h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
        {/* <Link to={`/anime/${id}`}> */}
        <img
          src={`https://shikimori.one${image.original}`}
          alt={name}
          onClick={() => handleRoute(id)}
          className={`h-full w-full object-cover hover:scale-105 hover:cursor-pointer transform transition-all duration-500 ${
            loaded ? "opacity-100" : "opacity-o"
          } `}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
        {/* </Link> */}
      </div>
      <div className="mt-2 space-y-1">
        <div className="flex justify-between">
          <h3 className="font-semibold line-clamp-1">{name}</h3>
          <span>{kind}</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <Video className=" stroke-1 fill-transparent stroke-pink-400 shadow-[-3px_3px_8px_rgba(251,100,182,0.6)]" />

            <span>{episodes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star />
            {score}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
