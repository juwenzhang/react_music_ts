import styled from 'styled-components';
import React from 'react';

const BannerWrapper = styled.div<{ children?: React.ReactNode }>`
  position: relative;
  z-index: 1;

  // todo: use before to settle banner display blur stylus
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #935a5a;
    filter: blur(20px);
    z-index: 0;
  }
`;

const BannerCenterWrapper = styled.div<{
  children?: React.ReactNode;
  $BannerImageWidth?: number;
  $BannerImageHeight?: number;
  $BannerRightImage?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $BannerImageHeight }) => `${$BannerImageHeight}px`};
  width: 980px;
  margin: 0 auto;
  position: relative;
  z-index: 9;

  .banner-items {
    margin: 0 auto;
    width: ${({ $BannerImageWidth }) => `${$BannerImageWidth}px`};
    position: relative;
    filter: blur(1px);

    .banner-item {
      overflow: hidden;
      height: 100%;

      .banner-item-img {
        width: ${({ $BannerImageWidth }) => `${$BannerImageWidth}px`};
        height: 100%;
      }
    }

    .banner-item-dots {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      z-index: 11;
      margin: 0 auto;
      display: flex;
      justify-content: center;

      > li {
        margin: 0 10px;
        cursor: pointer;

        .item {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: rgba(227, 209, 209, 0.5);

          &:hover,
          &.is-active {
            background-color: rgba(238, 117, 117, 0.5);
          }
        }
      }
    }
  }

  .banner-right-img {
    width: 250px;
    height: 100%;
    background: #1c1919 url(${(props) => props.$BannerRightImage}) 0 60px/250px 100% no-repeat;
  }
`;

const BannerControlWrapper = styled.div<{
  children?: React.ReactNode;
}>`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;

  div {
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    color: black;
    font-size: 50px;
    transform: translateY(-50%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .btn-left {
    left: -68px;
  }
  .btn-right {
    right: -68px;
  }
`;

export { BannerWrapper, BannerCenterWrapper, BannerControlWrapper };
