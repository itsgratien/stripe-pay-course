import React from 'react';
import './Checkout.scss';
import { Layout } from '../Layout';
import { ProductDetail } from './ProductDetail';
import { CheckoutForm } from './CheckoutForm';

const Checkout = () => {
  return (
    <Layout>
      <div className='checkout relative mx-auto'>
        <ProductDetail />
        <CheckoutForm />
      </div>
    </Layout>
  );
};
export default Checkout;
