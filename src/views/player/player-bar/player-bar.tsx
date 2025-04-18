import React, { memo, useEffect, useState } from 'react';
import PlayerBarWrapper from '@/views/player/player-bar/style/playerBarWrapper';

const PlayerBar: React.FC = () => {
  const [isNearBottom, setIsNearBottom] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowHeight = window.innerHeight;
      const mouseY = event.clientY;
      const threshold = 100; // 定义你的阈值
      if (windowHeight - mouseY <= threshold) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    const handleScroll = () => {
      const windowScroll = window.scrollY;
      if (windowScroll === 0) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const PlayBar = () => {
    return (
      <footer className={`player-bar ${!isNearBottom ? 'hidden' : ''}`}>
        <article>player</article>
      </footer>
    );
  };

  return <PlayerBarWrapper>{<PlayBar />}</PlayerBarWrapper>;
};

export default memo(PlayerBar);
