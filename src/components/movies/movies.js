import { useEffect, useState } from 'react';
import movieData from '../../data/movies.json';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      setMovies(movieData);
    }, []);

    const movieRows = movies.map(movie => (
        <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.genre}</td>
            <td>{movie.description}</td>
        </tr>
    ));

    console.log('movies', movies);

    return movies && (
        <table border="true">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {movieRows}
            </tbody>
        </table>
    );
}

export default Movies;