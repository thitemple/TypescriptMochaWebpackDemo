import * as $ from 'jquery';

export class Movie {
  constructor(public title: string,
    public year: number,
    public rating: number) {
  }
}

interface IMovieDataService {
  loadMovies(): Array<Movie>;
  save(movie: Movie): void;
}

class MovieDataService implements IMovieDataService {
  loadMovies(): Array<Movie> {
    let movies: Array<Movie> = [];
    $.getJSON('/movies').then(data => {
      data.forEach(movie => movies.push(new Movie(movie.title, movie.year, movie.rating)));
    })
    return movies;
  }

  save(movie: Movie) {
    return $.post('/movies', JSON.stringify(movie));
  }
}

export const movieDataService = new MovieDataService();