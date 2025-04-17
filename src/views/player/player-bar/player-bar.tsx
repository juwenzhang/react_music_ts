import React, { memo, useEffect, useState } from 'react';
import PlayerBarWrapper from '@/views/player/player-bar/style/playerBarWrapper';

const PlayerBar: React.FC = () => {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowHeight = window.innerHeight;
      const mouseY = event.clientY;
      const threshold = 100;
      if (windowHeight - mouseY <= threshold) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const PlayBar = () => {
    return (
      <div>
        <div>playerbar</div>
      </div>
    );
  };

  return <PlayerBarWrapper>{isNearBottom && <PlayBar />}</PlayerBarWrapper>;
};

export default memo(PlayerBar);
