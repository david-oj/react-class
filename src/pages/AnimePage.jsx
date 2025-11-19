import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const AnimePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [animeData, setAnimeData] = useState([]);
  const limit = 30;

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/animes?page=${page}&limit=${limit}&order=popularity`
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
  }, [page]);

  return (
    <div className="bg-black p-10 min-h-screen flex flex-col px-8 ">
      <div className="flex flex-col h-full flex-1">
        <h2 className="text-2xl text-white font-bold text-center uppercase">
          Latest Anime Movies
        </h2>
        <p className="mt-4  mb-8 text-white mx-auto">
          Total Movies: {animeData.length}
        </p>
        {loading ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="size-10 rounded-full border-t-2  border-b-2 border-amber-400 mx-auto animate-spin" />
          </div>
        ) : error ? (
          <p className="mt-10 text-red-400 text-lg flex-1 mx-auto">{error}</p>
        ) : (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[repeat(autofit,minmax(250px,1fr))]">
            {animeData.length > 0 ? (
              animeData.map((anime, id) => <AnimeCard anime={anime} key={id} />)
            ) : (
              <p className="mt-8">No anime found</p>
            )}
          </div>
        )}
        grid-cols-[repeat(autofit,minmax(250px,1fr))]
        <div className="flex gap-8 justify-center mt-8">
          <button
            onClick={() => setPage(page - 1)}
            className="px-3 py-2 rounded-xl bg-white text-black"
            disabled={page < 1}
          >
            previous page {Math.max(page - 1, 1)}{" "}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="px-3 py-2 rounded-xl bg-white text-black"
          >
            Next page {page + 1}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
