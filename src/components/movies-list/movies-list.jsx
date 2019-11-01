import React from 'react';
import PropTypes from 'prop-types';
import MovieCard, {MoviePropType} from '../movie-card/movie-card.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {selectedMovie: null};
  }

  handleMouseEnter(movie) {
    this.setState({selectedMovie: movie});
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.movies.map((movie, i) => (
          <MovieCard
            key={`${movie}_${i}`}
            movie={movie}
            onMouseEnter={() => this.handleMouseEnter(movie)}
          />
        ))}
      </div>
    );
  }

}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MoviePropType))
};

export default MoviesList;
