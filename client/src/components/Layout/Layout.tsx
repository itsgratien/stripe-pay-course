import React, { FC } from 'react';
import './Layout.scss';
import { Footer } from '.';

const Layout: FC = (props) => {
  return (
    <div className='appLayout'>
      <div className='children'>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
