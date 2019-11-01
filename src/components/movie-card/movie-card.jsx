import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({movie, onMouseEnter}) => {
  const {title, img} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter({title, img})}>
      <div className="small-movie-card__image">
        <img src={`img/${img}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );

};

export const MoviePropType = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string
  })
};

MovieCard.propTypes = {
  ...MoviePropType,
  onMouseEnter: PropTypes.func
};

export default MovieCard;
