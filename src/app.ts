import MoviesViewModel from './MoviesViewModel';

new MoviesViewModel().movies.forEach(movie => console.log(movie.title));