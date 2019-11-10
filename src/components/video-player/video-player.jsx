import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {src, img} = this.props;

    return (
      <video
        muted
        width="280"
        height="175"
        poster={img}
        ref={this._videoRef}
      >
        <source
          src={src}
        />
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  img: PropTypes.string,
  isPlaying: PropTypes.bool
};

export default VideoPlayer;
