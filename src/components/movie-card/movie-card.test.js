import React from 'react';
import renderer from 'react-test-renderer';
import films from '../../mocks/films';
import MovieCard from './movie-card';

it(`renders movie card correctly`, () => {
  const film = films[0];

  const tree = renderer.create(
      <MovieCard
        movie={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
