import React from 'react';
import renderer from 'react-test-renderer';
import films from '../../mocks/films';
import MoviesList from './movies-list';

it(`renders movies list correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
