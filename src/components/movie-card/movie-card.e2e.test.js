import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import films from '../../mocks/films';
import MovieCard from './movie-card';

Enzyme.configure({adapter: new Adapter()});

it(`todo: add something there later`, () => {
  const mouseEnterHandler = jest.fn();
  const film = films[0];

  const movieCard = shallow(
      <MovieCard
        movie={film}
        onMouseEnter={mouseEnterHandler}
      />
  );

  movieCard.find(`.small-movie-card`).simulate(`mouseenter`);
  expect(mouseEnterHandler).toHaveBeenCalledWith(film);

});
