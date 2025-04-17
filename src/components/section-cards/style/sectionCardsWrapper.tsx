import styled from 'styled-components';
import React from 'react';

const SectionCardsWrapper = styled.div<{ children?: React.ReactNode }>`
  margin-bottom: 20px;
  width: auto;
  position: relative;

  .hot-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .hot-scroll {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: auto;
    padding-left: 4px;
    border: 1px solid #d5d0d0;
    background-color: #eee7e7;
    position: relative;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .hot-scroll-iterator {
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    .hot-scroll-icon-left,
    .hot-scroll-icon-right {
      font-size: 20px;
      position: absolute;
      top: 60%;
      transform: translateY(-50%);
      transition: all 0.3s ease;
      cursor: pointer;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
      border-radius: 50%;
      z-index: 11;
    }

    .hot-scroll-icon-left {
      left: -20px;
    }

    .hot-scroll-icon-right {
      right: -20px;
    }
  }
`;
export default SectionCardsWrapper;
