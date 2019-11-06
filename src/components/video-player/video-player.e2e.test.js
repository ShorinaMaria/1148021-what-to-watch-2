import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';
import films from '../../mocks/films';

Enzyme.configure({adapter: new Adapter()});

it(`VideoPlayer works`, () => {
  const video = films[0];

  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={true}
        src={video.trailer}
        img={video.img}
      />
  );

  expect(videoPlayer.prop(`isPlaying`)).toBe(true);

});
