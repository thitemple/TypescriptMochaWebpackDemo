import * as $ from 'jquery';
import { expect } from 'chai';

import { movieDataService, Movie } from '../src/MovieDataService';

describe('movieDataService', () => {
  const expectedMovies = [{ title: 'The Matrix', year: 1998, rating: 5 }];

  describe('loadMovies', () => {
    it('should return movies from api', () => {
      sinon.stub($, 'getJSON').returns({ then: function(cb) { cb(expectedMovies); } });
      expect(movieDataService.loadMovies().length).to.be.equal(1);
      sinon.restore($.getJSON);
    });
  });

  describe('save', function() {
    const postSpy = sinon.spy($, 'post');
    const movie = new Movie('The Matrix', 1999, 5);

    it('should post the movie to the movies api', () => {
      movieDataService.save(movie);
      expect(postSpy.called).to.be.true;
    });

    it('should post the movie in json format', () => {
      const stringifySpy = sinon.spy(JSON, 'stringify');
      movieDataService.save(movie);
      expect(stringifySpy.calledWith(movie)).to.be.true;
    });

    it('should post the movie to the right url', () => {
      movieDataService.save(movie);
      expect(postSpy.calledWithMatch(/\/movies/)).to.be.true;
    });
  });
});