import React, { memo } from 'react';
import UserLoginWrapper from '@/views/discover/pages/recommend/components/user-login/style/userLoginWrapper';
const UserLogin: React.FC = () => {
  return (
    <UserLoginWrapper>
      <div className={'user-login-img'}>
        <img
          src="https://music.163.com/style/web2/img/dis_vip_card.png"
          alt=""
        />
      </div>
      <p className={'user-login-desc'}>
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <article className={'user-login-btn'}>用户登录</article>
    </UserLoginWrapper>
  );
};

export default memo(UserLogin);
