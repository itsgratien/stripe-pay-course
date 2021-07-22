import React, { useEffect, useState } from 'react';
import './Checkout.scss';
import { useParams, useHistory } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { ChevronBackOutline } from 'react-ionicons';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Layout } from '../Layout';
import { ProductDetail } from './ProductDetail';
import { CheckoutForm } from './CheckoutForm';
import { axios, ApiEndPoint, environment } from '../../utils';
import { ProductType } from '../Home';

const Checkout = () => {
  const [product, setProduct] = useState<ProductType>();

  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams<{ id: string }>();

  const history = useHistory();

  const stripePromise = loadStripe(environment.StripePublicKey);

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
        <div className='relative mb-5'>
          <button
            type='button'
            className='flex items-center'
            onClick={() => history.goBack()}
            style={{
              color: 'yellow',
              borderBottom: '1px dashed yellow',
              paddingRight: '8px',
            }}
          >
            <ChevronBackOutline color='yellow' />
            <span className='ml-1'>go back</span>
          </button>
        </div>
        {loading && (
          <div
            className='flex items-center justify-center h-full w-full'
            style={{ height: '60vh' }}
          >
            <MoonLoader color='white' />
          </div>
        )}
        {!loading && product && (
          <>
            <ProductDetail product={product} />
            <Elements stripe={stripePromise}>
              <CheckoutForm productId={product._id} />
            </Elements>
          </>
        )}
      </div>
    </Layout>
  );
};
export default Checkout;
