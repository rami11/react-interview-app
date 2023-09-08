import { useEffect, useState } from 'react';
import movieData from '../../data/movies.json';
import TextFilter from '../text-filter/TextFilter';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [moviesFiltered, setMoviesFiltered] = useState([]);
    const [titleFilter, setTitleFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');

    useEffect(() => {
        setMovies(movieData);
        setMoviesFiltered(movieData);
    }, [movies]);

    useEffect(() => {
        filterMovies();
    }, [titleFilter, yearFilter]);

    const movieRows = moviesFiltered.map(movie => (
        <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.genre}</td>
            <td>{movie.description}</td>
        </tr>
    ));

    const filterMovies = () => {
        const filtered = titleFilter.length === 0 && yearFilter.length === 0
            ? movies
            : movies.filter(movie => (
                    movie.title.toLowerCase().includes(titleFilter.trim().toLowerCase()) &&
                    `${movie.year}`.includes(yearFilter.trim())
                ));

        setMoviesFiltered(filtered);
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
                    <td><TextFilter onTextChange={setTitleFilter} /></td>
                    <td><TextFilter onTextChange={setYearFilter} /></td>
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