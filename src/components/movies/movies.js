import { useEffect, useState } from 'react';
import movieData from '../../data/movies.json';
import TextFilter from '../text-filter/TextFilter';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [moviesFiltered, setMoviesFilered] = useState([]);

    useEffect(() => {
      setMovies(movieData);
      setMoviesFilered(movieData);
    }, []);

    const movieRows = moviesFiltered.map(movie => (
        <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.genre}</td>
            <td>{movie.description}</td>
        </tr>
    ));

    const onTitleFilterChange = (text) => {
        const filtered = text.length === 0
            ? movies
            : movies.filter(movie => movie.title.toLowerCase().includes(text.trim().toLowerCase()));

        setMoviesFilered(filtered);
    }

    return (
        <table border="true">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><TextFilter onTextChange={text => onTitleFilterChange(text)} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {movieRows}
            </tbody>
        </table>
    );
}

export default Movies;