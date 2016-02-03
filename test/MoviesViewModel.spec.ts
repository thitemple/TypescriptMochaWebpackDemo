import MoviesViewModel from '../src/MoviesViewModel';
import { movieDataService, Movie } from '../src/MovieDataService'
import { expect } from 'chai';

describe('MoviesViewModel', () => {
  let viewModel: MoviesViewModel;
  let movieDataServiceStub: Sinon.SinonSpy;
  beforeEach(() => {
    sinon.stub(movieDataService, 'loadMovies').returns([new Movie('The Matrix', 1998, 5)]);
    movieDataServiceStub = sinon.spy(movieDataService, 'save');
    viewModel = new MoviesViewModel();
  });

  afterEach(() => {
    sinon.restore(movieDataService.loadMovies);
    sinon.restore(movieDataService.save);
  });

  it('should load movies', () => {
    expect(viewModel.movies.length).to.be.equal(1);
  })

  it('should be able to select a movie', () => {
    viewModel.select(viewModel.movies[0]);
    expect(viewModel.selectedMovie).to.be.equal(viewModel.movies[0]);
  });

  it('should save rated movie', () => {
    viewModel.select(viewModel.movies[0]);
    viewModel.rate(4);
    expect(movieDataServiceStub.called).to.be.true;
  });

});