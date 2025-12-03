import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimePage = () => {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/animes/${id}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch animes");

        setAnimeData(data);
      } catch (error) {
        setError(error.message || "failed to fetch animes");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  // console.log("Anime Id:", id);

  return (
    <div className=" px-6 md:px-10 py-6 flex flex-col">
      {loading ? (
        <div className="flex-1 flex justify-center items-center min-h-screen">
          <div className="size-10 rounded-full border-t-2  border-b-2 border-amber-400 mx-auto animate-spin" />
        </div>
      ) : error ? (
        <p className="mt-10 text-red-400 text-lg flex-1 mx-auto">{error}</p>
      ) : (
        <div className="">
          <div className="h-[50vh] rounded-2xl overflow-hidden">
            <img
              src={`https://shikimori.one${animeData.image.original}`}
              alt={animeData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 mt-8 md:mt-16  gap-4 md:gap-8">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl lg:text-3xl">Anime Name</h3>
              <p className="font-semibold text-lg">{animeData.name}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl lg:text-3xl">Anime Kind</h3>
              <p className="font-semibold text-lg">{animeData.kind}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl lg:text-3xl">Anime Status</h3>
              <p className="font-semibold text-lg">{animeData.status}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl lg:text-3xl">Anime Episodes</h3>
              <p className="font-semibold text-lg">{animeData.episodes}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-2xl lg:text-3xl">Anime Score</h3>
              <p className="font-semibold text-lg">{animeData.score}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimePage;
