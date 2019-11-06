import React from 'react';
import Enzyme, {mount} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import films from '../../mocks/films';
import MovieCard from './movie-card';

Enzyme.configure({adapter: new Adapter()});

it(`MovieCard works`, (done) => {
  const mouseEnterHandler = jest.fn();
  const film = films[0];

  const movieCard = mount(
      <MovieCard
        movie={film}
        onMouseEnter={mouseEnterHandler}
      />
  );
  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});
  const loadStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});

  expect(movieCard.state(`isPlaying`)).toBe(false);

  movieCard.find(`.small-movie-card`).simulate(`mouseenter`);
  expect(mouseEnterHandler).toHaveBeenCalledWith(film);

  setTimeout(() => {
    done();

    expect(playStub).toHaveBeenCalled();
    playStub.mockRestore(); // todo: what for ?
    expect(movieCard.state(`isPlaying`)).toBe(true);

    movieCard.find(`.small-movie-card`).simulate(`mouseleave`);

    expect(loadStub).toHaveBeenCalled();
    loadStub.mockRestore(); // todo: what for ?
    expect(movieCard.state(`isPlaying`)).toBe(false);

  }, 1001);

});
