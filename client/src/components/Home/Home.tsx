import React, { useEffect, useState } from 'react';
import './Home.scss';
import { MoonLoader } from 'react-spinners';
import { Layout } from '../Layout';
import { ProductItem } from './ProductItem';
import { axios, ApiEndPoint } from '../../utils';

export interface ProductType {
  _id: string;
  name: string;
  price: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const Home = () => {
  const [data, setData] = useState<ProductType[]>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleGetProduct = () => {
    setLoading(true);

    return axios(
      { url: ApiEndPoint.GetProduct, method: 'GET' },
      (res) => {
        setLoading(false);

        setData(res.data);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <Layout>
      <div className='home relative w-full'>
        <div className='homeContainer mx-auto'>
          <div
            className={`flex justify-center products ${
              loading ? 'items-center h65vh' : ''
            }`}
            style={{ height: loading ? '58vh' : 'auto' }}
          >
            {loading && <MoonLoader color='white' />}
            {!loading && (
              <>
                {data && data.length >= 0 && (
                  <>
                    {data.map((item) => (
                      <ProductItem key={item._id} product={item} />
                    ))}
                  </>
                )}
                {data && data.length <= 0 && (
                  <span className='text-white'>no result found.</span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
