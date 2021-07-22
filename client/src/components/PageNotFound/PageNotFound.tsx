import React from 'react';
import './PageNotFound.scss';
import { Footer } from '../Layout';

const PageNotFound = () => {
  return (
    <div className='w-screen h-screen relative pageNotFound'>
      <div className='pageNotFoundContainer relative w-full flex items-center justify-center'>
        <h1 className='text-white font-normal'>Oops! Page not found</h1>
      </div>
      <Footer />
    </div>
  );
};
export default PageNotFound;
