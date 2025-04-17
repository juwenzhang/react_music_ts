import styled from 'styled-components';
import React from 'react';

const UserLoginWrapper = styled.div<{
  children?: React.ReactNode;
}>`
  width: 100%;
  height: 200px;
  background-color: #f5f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px #b2b0b0 solid;
  box-sizing: border-box;

  .user-login-img {
    height: auto;

    img {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .user-login-desc {
    text-align: center;
    font-size: 12px;
    padding: 0 5px;
  }

  .user-login-btn {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: aliceblue;
    font-size: 12px;
    background-color: red;
    margin: 0 auto;
    border: 1px #8c8b8b solid;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default UserLoginWrapper;
