import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app.jsx';
import films from './mocks/films.js';

ReactDOM.render(
    <App
      movies={films}
    />,
    document.querySelector(`#root`)
);
