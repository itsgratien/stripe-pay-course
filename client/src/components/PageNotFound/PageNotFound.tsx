import React from 'react';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className='w-screen h-screen relative flex items-center justify-center pageNotFound'>
      <div className='rect'>
        <h1 className="text-white">Page not found</h1>
      </div>
    </div>
  );
};
export default PageNotFound;
