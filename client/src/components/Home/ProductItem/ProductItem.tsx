import React, { Suspense } from 'react';
import './ProductItem.scss';
import { useHistory } from 'react-router-dom';
import { ProductType } from '..';
import { ImageLoading } from '../../ImageLoading';

interface Props {
  product: ProductType;
}

const ProductItem = (props: Props) => {
  const { product } = props;

  const history = useHistory();

  return (
    <div
      className='productItem relative cursor-pointer'
      onClick={() => history.push(`/product/${product._id}`)}
    >
      <div className='image'>
        <Suspense fallback={<></>}>
          <ImageLoading src={product.image} />
        </Suspense>
      </div>
      <div className='detail flex flex-col'>
        <span className='font-bold text-white'>{product.name}</span>
        <span className='text-white mt-3'>$ {product.price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
