import React, { Suspense } from 'react';
import './ProductDetail.scss';
import { ProductType } from '../../Home';
import { ImageLoading } from '../../ImageLoading';

interface Props {
  product: ProductType;
}

const ProductDetail = (props: Props) => {
  const { product } = props;

  return (
    <div className='relative productDetail w-full'>
      <div className='productImage w-full relative'>
        <Suspense fallback={<></>}>
          <ImageLoading src={product.image} />
        </Suspense>
      </div>
      <div className='detail flex flex-col'>
        <span className='text-white font-bold'>Javascript for beginner's</span>
        <span className='text-white font-normal'>$ 150</span>
      </div>
    </div>
  );
};

export default ProductDetail;
