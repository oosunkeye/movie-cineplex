import "./Home.css";
import React from "react";
import useMovies from "../../hooks/useMovies";
import Movie from "../../components/movie/Movie";

const Home = () => {
  const movies = useMovies();
  // console.log(movies);
  return (
    <div className="movies">
      {movies === null || movies === undefined ? (
        <i class="fa-solid fa-loader" />
      ) : (
        movies.map((movie) => {
          return movie !== null ? (
            <div className="moviecard">
              <Movie movie={movie} key={movie.id} isLikeShown={true} />
            </div>
          ) : (
            ""
          );
        })
      )}
    </div>
  );
};

export default Home;
