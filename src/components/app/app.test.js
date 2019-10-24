import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";

it(`renders start screen correctly`, () => {
  const tree = renderer.create(
      <App
        movies={[`Harry Potter`]}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
