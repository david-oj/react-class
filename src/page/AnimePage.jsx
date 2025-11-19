import React, { useEffect, useState } from "react";
import AnimeCard from "../component/AnimeCard";

const AnimePage = () => {
  const [pageCOunt, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [animeData, setAnimeData] = useState([]);
  const limit = 30;

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/animes?page=${pageCOunt}&limit=${limit}&order=popularity`
        );

        if (!res.ok) throw new Error("failed to fetch data");

        const data = await res.json();
        setAnimeData(data);
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnime();
  }, [pageCOunt, limit]);

  return (
    <main className="bg-black min-h-screen flex">
      <div className="p-8 text-white w-full flex-1 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold uppercase">
          Get The Latest Anime Movies
        </h1>
        <p className="text-sm mt-4 mb-8">Total Movies: {animeData.length} </p>

        {isLoading ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="size-10 border-t-2 border-b-2 rounded-full border-pink-600 animate-spin" />
          </div>
        ) : errorMsg ? (
          <div className="flex-1 flex justify-center items-center">
            <p className="text-red-400">{errorMsg}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 w-full gap-8 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
            {animeData.length > 0 ? (
              animeData.map((animeData, index) => (
                <AnimeCard anime={animeData} key={index} />
              ))
            ) : (
              <p className="capitalize">No amine movies was found</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default AnimePage;
