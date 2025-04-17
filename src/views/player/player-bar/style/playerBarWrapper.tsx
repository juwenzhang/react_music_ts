import styled from 'styled-components';
import React from 'react';

const PlayerBarWrapper = styled.div<{
  children: React.ReactNode;
}>`
  position: fixed;
  bottom: 0;
`;

export default PlayerBarWrapper;
