import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css'
import type { Movie } from '../../types/movie';
import fetchMovies from '../../services/movieService';
import toast, { Toaster } from 'react-hot-toast';
import MovieGrid from '../MovieGrid/MovieGrid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
  


function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearch = async (searchValue: string) => {
    try {
      setError(false);
      setIsLoading(true);
      setMovies([]);
      const newMovie = await fetchMovies(searchValue);

      if (newMovie.length === 0) {
        toast.error("No movies found for your request.");
      }
      setMovies(newMovie);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
    
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader /> }
      {error && <ErrorMessage /> }
      {movies.length > 0 ? <MovieGrid movies={movies} /> : null}
      <Toaster position='top-center' />
          </>
  );
}

export default App;
