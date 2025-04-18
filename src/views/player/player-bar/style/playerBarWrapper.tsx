import styled from 'styled-components';
import React from 'react';

const PlayerBarWrapper = styled.div<{
  children: React.ReactNode;
}>`
  position: fixed;
  bottom: 0;
  width: 100%;
  .player-bar {
    height: 52px;
    background-color: rgba(14, 13, 13, 0.5);
    width: 100%;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  .player-bar.hidden {
    opacity: 0;
  }
`;

export default PlayerBarWrapper;
