import React, { useRef, useEffect } from 'react';
import './Loading.scss';
import loadingAnimation from '../../assets/videos/loadingAnimation.mp4';

const Loading: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.blur();
    }
  }, []);

  return (
    <div className="loading-container">
      <video
        ref={videoRef}
        className="loading-video"
        src={loadingAnimation}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        tabIndex={-1}
      />
    </div>
  );
};

export default Loading;

