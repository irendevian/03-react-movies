import axios from "axios";
import type { Movie } from "../types/movie";

const myToken = import.meta.env.VITE_API_TOKEN;

// interface SearchMovieParams {
//     query: string,
//     include_adult?: boolean,
//     language?: string,
//     page?: number,
// }


interface SearchMovieResponse {
    hits: Movie[],
    nbPage?: number
}

async function fetchMovies(searchValue: string) {
    try {
        const res = await axios.get<SearchMovieResponse>("https://api.themoviedb.org/3/search/movie/popular"
       , {
            params: {
               query: searchValue,
            //    include_adult: false,
            //    language: "en-US",
            //    page: 1,

            },
            headers: {
                Authorization: `Bearer ${myToken}`,
            }
        });
        // console.log(res.data.hits);
        return res.data.hits;
        
} catch (error) {
        console.error(error);       
}
}

export default fetchMovies;