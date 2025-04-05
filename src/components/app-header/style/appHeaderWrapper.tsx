import styled from 'styled-components';
import React from 'react';
import { type ThemeTypeOne } from '@/assets/theme/theme';

const AppHeaderWrapper = styled.div<{
  children: React.ReactNode;
  theme: ThemeTypeOne;
}>`
  width: 100%;
  height: 75px;
  background-color: var(--background-color-header);
  color: white;
  cursor: pointer;
  border-bottom: ${(props: { theme: ThemeTypeOne }) =>
      props.theme?.color.secondary}
    5px solid;
  .app-header-container {
    margin: 0 auto;
    width: 1300px;
    display: flex;
    justify-content: center;
    align-content: center;
    gap: var(--container-gap);
    line-height: 75px;

    .app-left-container {
      background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?644eb90b50c36812b6960361173990ac)
        no-repeat 0 2px;
      .app-left-container-content {
        font-size: var(--big-font-size);
        opacity: 0;
      }
    }

    .app-nav-container {
      display: flex;
      gap: 15px;
      a {
        color: white;
      }
      .app-route-link,
      .app-link {
        text-decoration: none;
        transition: all 0.3s ease;
      }
      .app-route-link.isActive,
      :hover {
        background-color: black;
      }
      .app-link:hover {
        background-color: black;
      }
    }
    .app-right-container {
      display: flex;
      gap: 15px;
      align-items: center;
      .app-right-input {
        line-height: 100%;
        .search {
          border-radius: 20px;
          .search-prefix {
            width: 20px;
            height: 30px;
          }
        }
      }
      .app-right-content {
        color: white;
        border: 1px solid white;
        padding: 5px 10px;
        border-radius: 15px;
        background-color: black;
        transition: all 0.3s ease;
      }
      .app-right-content:hover {
        color: black;
        border: 1px white solid;
        background-color: white;
        font-weight: 600;
      }
      .app-right-login {
      }
    }
  }
`;

export default AppHeaderWrapper;
