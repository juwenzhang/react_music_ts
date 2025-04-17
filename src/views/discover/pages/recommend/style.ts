import styled from 'styled-components';
import React from 'react';

const RecommendContentWrapper = styled.div<{ children?: React.ReactNode }>`
  border: 1px solid #d3d3d3;
  width: 980px;
  display: flex;
  margin: 0 auto;

  .recommend-left,
  .recommend-right {
    background-color: #f3f0f0;
    box-sizing: border-box;
  }

  .recommend-left {
    width: 729px;
    padding: 20px;
  }

  .recommend-right {
    margin-left: 1px;
    width: 250px;
  }
`;

export default RecommendContentWrapper;
