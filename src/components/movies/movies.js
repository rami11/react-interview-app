import { useEffect, useState } from 'react';
import movieData from '../../data/movies.json';
import TextFilter from '../text-filter/TextFilter';
import './Movies.css';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [moviesFiltered, setMoviesFiltered] = useState([]);
    const [titleFilter, setTitleFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [descriptionFilter, setDescriptionFilter] = useState('');

    useEffect(() => {
        setMovies(movieData);
        setMoviesFiltered(movieData);
    }, [movies]);

    useEffect(() => {
        filterMovies();
    }, [titleFilter, yearFilter, descriptionFilter]);

    const movieRows = moviesFiltered.map(movie => (
        <tr key={movie.id} className={movie.year < 1995 ? 'bg-yellow' : ''}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.genre.join(', ')}</td>
            <td>{movie.description}</td>
        </tr>
    ));

    const filterMovies = () => {
        const filtered = titleFilter.length === 0 && yearFilter.length === 0 && descriptionFilter.length === 0
            ? movies
            : movies.filter(movie => (
                    movie.title.toLowerCase().includes(titleFilter.trim().toLowerCase()) &&
                    `${movie.year}`.includes(yearFilter.trim()) &&
                    movie.description.toLowerCase().includes(descriptionFilter.trim().toLowerCase())
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
                    <td><TextFilter onTextChanged={setTitleFilter} onResetClicked={setTitleFilter} /></td>
                    <td><TextFilter onTextChanged={setYearFilter} onResetClicked={setYearFilter} /></td>
                    <td></td>
                    <td><TextFilter onTextChanged={setDescriptionFilter} onResetClicked={setDescriptionFilter} /></td>
                </tr>
            </thead>
            <tbody>
                {movieRows}
            </tbody>
        </table>
    );
}

export default Movies;