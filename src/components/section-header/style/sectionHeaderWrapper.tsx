import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div<{ children: React.ReactNode }>`
  background-color: #d3d3d3;
  border-bottom: 2px solid #c10d0c;
  height: 40px;
  padding: 0 10px 4px 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .section-header-left {
    display: flex;
    align-items: center;

    .section-header-title {
      font-size: 20px;
      margin-right: 20px;
    }

    .section-header-keywords {
      display: flex;
      align-items: center;

      .section-header-keyword {
        .section-header-keyword-text {
          font-size: 12px;
          padding: 0 20px;
          border-right: 1px solid #7e7777;
          &:hover {
            text-decoration-line: underline;
          }
        }
      }
      .section-header-keyword:last-child {
        .section-header-keyword-text {
          border-right: none;
        }
      }
      .section-header-keyword:first-child {
        .section-header-keyword-text {
          padding-left: 0;
        }
      }
    }
  }

  .section-header-right {
    display: flex;
    cursor: pointer;
    margin-right: 10px;

    .section-header-right-more,
    .section-header-right-icon {
      font-size: 12px;
    }

    .section-header-right-icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
    }

    &:hover {
      text-decoration-line: underline;
      .section-header-right-more {
        color: skyblue;
      }
      .section-header-right-icon {
        color: darkred;
      }
    }
  }
`;

export default SectionHeaderWrapper;
