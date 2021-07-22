import React from 'react';
import './ProductItem.scss';
import { useHistory } from 'react-router-dom';

interface Props {}

const ProductItem = (props: Props) => {
  const history = useHistory();

  return (
    <div
      className='productItem relative cursor-pointer'
      onClick={() => history.push('/product/354')}
    >
      <div className='image'>
        <img
          src='https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg'
          alt=''
        />
      </div>
      <div className='detail flex flex-col'>
        <span className='font-bold text-white'>Javascript for beginner</span>
        <span className='text-white mt-3'>$ 150</span>
      </div>
    </div>
  );
};

export default ProductItem;
