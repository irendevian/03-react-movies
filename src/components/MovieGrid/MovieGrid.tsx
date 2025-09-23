import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css"

const MovieGrid = ({movies}: {movies: Movie[]}) => {
    return (
        <ul className={css.grid}>
        {movies.map(movie => (
          <li key={movie.id}>
            <div className={css.card}>
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie poster"
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        ))}
</ul>
    );
}

export default MovieGrid;