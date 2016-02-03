import { Movie, movieDataService } from './MovieDataService'

export default class MoviesViewModel {
  movies: Array<Movie>;
  selectedMovie: Movie;

  constructor() {
    this.movies = movieDataService.loadMovies();
  }

  select(movie: Movie) {
    this.selectedMovie = movie;
  }

  rate(rating: number) {
    this.selectedMovie.rating = rating;
    movieDataService.save(this.selectedMovie);
  }
}