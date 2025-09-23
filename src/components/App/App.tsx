import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css'
import type { Movie } from '../../types/movie';
import fetchMovies from '../../services/movieService';
import toast, { Toaster } from 'react-hot-toast';
// import MovieGrid from '../MovieGrid/MovieGrid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
  


function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState(false);
  
  const handleSearch = async (searchValue: string) => {
    try {
      setError(false);
      const newMovie = await fetchMovies(searchValue);

      if (!newMovie || newMovie.length === 0) {
        toast.error("No movies found for your request.");
      }
      setMovies(newMovie);
    } catch (error) {
      console.error(error);
      setError(true);
      
    }
    
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage />) : movies.length > 0 ? (
          // <MovieGrid movies={movies} />
          <ul>
              {movies.map (movie => (
                <li key={movie.id}>{movie.title}</li>
              ))}
          </ul>
      ) : null}
      <Toaster position='top-center' />
          </>
  );
}

export default App;
