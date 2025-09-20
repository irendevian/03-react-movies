import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css'
import type { Movie } from '../../types/movie';
import fetchMovies from '../../services/movieService';
// import MovieGrid from '../MovieGrid/MovieGrid';
  


function App() {
  const [, setMovies] = useState<Movie[]>([]);
  
  const handleSearch = async (searchValue: string) => {
    // console.log(searchValue);
    const newMovie = await fetchMovies(searchValue) as Movie[] ;
    setMovies(newMovie);
  };

    return (
      <SearchBar onSearch={handleSearch} />
      // <MovieGrid />
    )
};

export default App;
