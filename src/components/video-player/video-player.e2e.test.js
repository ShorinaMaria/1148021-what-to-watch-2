import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';
import films from '../../mocks/films';

Enzyme.configure({adapter: new Adapter()});

it(`VideoPlayer works`, () => {
  const video = films[0];

  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});
  const loadStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `load`)
    .mockImplementation(() => {});

  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={true}
        src={video.trailer}
        img={video.img}
      />
  );

  videoPlayer.setProps({isPlaying: false});
  expect(playStub).toHaveBeenCalled();
  expect(loadStub).toHaveBeenCalled();

  playStub.mockRestore();
  loadStub.mockRestore();
});
