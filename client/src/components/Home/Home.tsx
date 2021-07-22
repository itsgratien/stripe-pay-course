import React from 'react';
import './Home.scss';
import { Layout } from '../Layout';
import { ProductItem } from './ProductItem';

const Home = () => {
  return (
    <Layout>
      <div className='home relative w-full'>
        <div className='homeContainer mx-auto'>
          <div className='flex justify-center products'>
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
