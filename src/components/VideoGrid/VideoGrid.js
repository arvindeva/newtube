import React from 'react';
import { Divider } from 'semantic-ui-react';

import './VideoGrid.scss';

import VideoGridHeader from './VideoGridHeader/VideoGridHeader';
import VideoPreview from '../VideoPreview/VideoPreview';

const VideoGrid = props => {
  const divider = props.hideDivider ? null : <Divider />;

  return (
    <React.Fragment>
      <VideoGridHeader title='Trending'/>
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </React.Fragment>
  );
};

export default VideoGrid;
