import React, { FC } from 'react';
import './Layout.scss';

const Layout: FC = (props) => {
  return (
    <div className='appLayout'>
      <div className='children'>{props.children}</div>
    </div>
  );
};

export default Layout;
