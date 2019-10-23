import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app.jsx';

ReactDOM.render(
    <App
      movies={[
        `Fantastic Beasts: The Crimes of Grindelwald`,
        `The Irishman`,
        `Motherless Brooklyn`,
        `The Good Liar`
      ]}
    />,
    document.querySelector(`#root`)
);
