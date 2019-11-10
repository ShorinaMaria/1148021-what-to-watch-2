import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
    this._timeoutId = null;
  }

  handleMouseEnter() {
    this.props.onMouseEnter(this.props.movie);

    this._timeoutId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);
  }

  handleMouseLeave() {
    clearTimeout(this._timeoutId);
    this.setState({isPlaying: false});
  }

  componentWillUnmount() {
    clearTimeout(this._timeoutId);
  }

  render() {
    const {title, img, trailer} = this.props.movie;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={trailer}
            img={`img/${img}`}
            isPlaying={this.state.isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }

}

export const MoviePropType = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    trailer: PropTypes.string
  })
};

MovieCard.propTypes = {
  ...MoviePropType,
  onMouseEnter: PropTypes.func
};

export default MovieCard;
