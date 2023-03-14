import { getMoviesUpcomming } from "../api/tmdb-api";
import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateUpcomming";

const Upcomming = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) => (m.id === movieId ? { ...m, favorite: true } : m));
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getMoviesUpcomming().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return <PageTemplate title="Discover Upcoming Movies" movies={movies} selectFavorite={addToFavorites} />;
};
export default Upcomming;
