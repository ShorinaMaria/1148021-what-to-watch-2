import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';
import films from '../../mocks/films';

Enzyme.configure({adapter: new Adapter()});

it(`todo: add something there later`, () => {
  const titleClickHandler = jest.fn();
  const app = shallow(
      <App
        movies={films}
      />
  );

  app.find(`.small-movie-card__title`).forEach((title) => title.simulate(`click`));
  expect(titleClickHandler).toHaveBeenCalledTimes(0);

});
