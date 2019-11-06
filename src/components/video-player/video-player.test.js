import React from 'react';
import renderer from 'react-test-renderer';
import films from '../../mocks/films';
import VideoPlayer from './video-player';

it(`renders start screen correctly`, () => {
  const video = films[0];
  const tree = renderer.create(
      <VideoPlayer
        isPlaying={false}
        src={video.trailer}
        img={video.img}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
