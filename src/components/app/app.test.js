import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";
import films from '../../mocks/films';

it(`renders start screen correctly`, () => {
  const tree = renderer.create(
      <App
        movies={films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
