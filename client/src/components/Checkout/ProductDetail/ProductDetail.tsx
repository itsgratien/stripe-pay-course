import React from 'react';
import './ProductDetail.scss';

interface Props {}

const ProductDetail = (props: Props) => {
  return (
    <div className='relative productDetail w-full'>
      <div className='productImage w-full relative'>
        <img
          src='https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg'
          alt=''
          className="object-cover"
        />
      </div>
      <div className="detail flex flex-col">
          <span className="text-white font-bold">Javascript for beginner's</span>
          <span className="text-white font-normal">$ 150</span>
      </div>
    </div>
  );
};

export default ProductDetail;
