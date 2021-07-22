import React from 'react';
import './PageNotFound.scss';
import { Footer } from '../Layout';

const PageNotFound = () => {
  return (
    <div className='w-full h-screen relative pageNotFound overflow-hidden'>
      <div className='pageNotFoundContainer relative w-full flex items-center justify-center'>
        <h1 className='text-white font-normal'>Oops! Page not found</h1>
      </div>
      <Footer />
    </div>
  );
};
export default PageNotFound;
