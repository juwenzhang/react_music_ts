import styled from 'styled-components';
import React from 'react';

const SectionCardWrapper = styled.div<{ children: React.ReactNode }>`
  width: 160px;
  height: 180px;
  margin: 20px 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  box-sizing: border-box;

  .card-top {
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .card-top-cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(229, 221, 221, 0.3);
      z-index: 2;

      .card-play-info {
        position: relative;
        top: 100px;
        display: block;
        width: 100%;
        height: 40px;
        background-color: rgba(124, 121, 121, 0.7);

        .card-play-icon {
          float: left;
          margin-left: 5px;
          margin-top: 8px;
          height: 100%;

          svg {
            line-height: 40px;
            font-size: 20px;
            color: #1f1e1e;
          }
        }

        .play-icon {
          margin-right: 5px;
          font-size: 20px;
          color: #333333;
          float: right;
          line-height: 40px;
        }
      }
    }
  }

  .card-bottom {
    width: 140px;
    height: 35px;
    box-sizing: border-box;
    transition: all 500ms ease;
    // 实现文本溢出的解决方案吧
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: absolute;
    bottom: 0;

    &:hover {
      text-decoration-line: underline;
    }
  }
`;

export default SectionCardWrapper;
