import styled from 'styled-components';
import React from 'react';
import { type ThemeTypeOne } from '@/assets/theme/theme';

const DiscoverWrapper = styled.div<{
  children: React.ReactNode;
  theme: ThemeTypeOne;
}>`
  a {
    color: white;
  }

  .discover-nav {
    background-color: ${(props: { theme: ThemeTypeOne }) =>
      props.theme?.color.primary};
    height: 40px;
    font-size: 14px;

    .discover-nav-items {
      width: 1300px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;

      .discover-nav-item {
        padding: 5px;
        border: 1px solid #333333;
        border-radius: 15px;
        transition: all 0.3s ease;
        margin: 0 40px;
      }

      .discover-nav-item:hover {
        border: 1px solid white;
      }

      .discover-nav-item.isActive {
        border: 1px solid white;
        background-color: ${(props: { theme: ThemeTypeOne }) =>
          props.theme.color.secondary};

        a {
          color: black;
        }
      }
    }
  }

  .discover-article {
    border-bottom: 1px solid #a4a3a3;
  }
`;

export default DiscoverWrapper;
