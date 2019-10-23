import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({adapter: new Adapter()});

it(`title click works`, () => {
  const movies = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `The Irishman`,
    `Motherless Brooklyn`,
    `The Good Liar`
  ];
  const titleClickHandler = jest.fn();
  const app = shallow(
      <App
        movies={movies}
        onTitleClick={titleClickHandler}
      />
  );

  app.find(`.small-movie-card__title`).forEach((title) => title.simulate(`click`));

  expect(titleClickHandler).toHaveBeenCalledTimes(movies.length);

});
