import React, { useEffect, useState } from 'react';
import './Checkout.scss';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { Layout } from '../Layout';
import { ProductDetail } from './ProductDetail';
import { CheckoutForm } from './CheckoutForm';
import { axios, ApiEndPoint } from '../../utils';
import { ProductType } from '../Home';

const Checkout = () => {
  const [product, setProduct] = useState<ProductType>();

  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams<{ id: string }>();

  const handleGetProductDetail = (value: string) => {
    setLoading(true);
    return axios(
      { method: 'GET', url: ApiEndPoint.GetProductDetail(value) },
      (res) => {
        setLoading(false);

        setProduct(res.data);
      },
      (e) => {
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    if (params && params.id) {
      handleGetProductDetail(params.id);
    }
  }, [params]);

  return (
    <Layout>
      <div className='checkout relative mx-auto'>
        {loading && (
          <div className='flex items-center justify-center h-full w-full' style={{height: '60vh'}}>
            <MoonLoader color='white' />
          </div>
        )}
        {!loading && product && (
          <>
            <ProductDetail product={product} />
            <CheckoutForm productId={product._id} />
          </>
        )}
      </div>
    </Layout>
  );
};
export default Checkout;
