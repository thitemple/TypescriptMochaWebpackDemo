import * as $ from 'jquery';
import { expect } from 'chai';

import { movieDataService, Movie } from '../src/MovieDataService';

describe('movieDataService', () => {
    const expectedMovies = [{ title: 'The Matrix', year: 1998, rating: 5 }];
    
    describe('loadMovies', () => {
        sinon.stub($, 'getJSON').returns({ then: function(cb){ cb(expectedMovies); } });
        expect(movieDataService.loadMovies().length).to.be.equal(1);
        sinon.restore($.getJSON);
    });
});