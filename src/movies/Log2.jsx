import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "../movies/MovieCard";

function Log2() {
  const [Movies, setMovie] = useState([]);
  console.log(Movies);
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI",
        },
      };
      try {
        const resp = await axios.get(url, options);
        setMovie(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {Movies.map((movie, index) => {
        return (
          <div className="flex  items-center pt-4 w-[200px]" key={index}>
            <Link to={`/details/${movie.id}`}>
              <MovieCard
                key={index}
                image={movie.backdrop_path}
                name={movie.original_title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Log2;
