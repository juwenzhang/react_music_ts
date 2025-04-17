import styled from 'styled-components';
import React from 'react';

const AsideHeaderWrapper = styled.div<{
  children: React.ReactNode;
}>`
  width: 100%;
  margin-top: 5px;
  background-color: #f3f0f0;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;

  .aside-header {
    padding: 5px;
    display: flex;
    justify-content: space-between;

    .left-desc,
    .right-desc {
      font-size: 12px;
    }

    .left-desc {
      font-weight: 600;
    }

    .right-desc {
      font-weight: 200;

      &:hover {
        cursor: pointer;

        span {
          text-decoration-line: underline;
        }
      }
    }
  }
`;

export default AsideHeaderWrapper;
