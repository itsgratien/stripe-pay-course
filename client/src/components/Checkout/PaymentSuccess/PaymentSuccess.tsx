import React from 'react';
import './PaymentSuccess.scss';
import { ShieldCheckmark } from 'react-ionicons';

interface Props {
  message: string;
  amount: string;
}

const PaymentSuccess = (props: Props) => {
  const { message, amount } = props;

  return (
    <div className='paymentSuccess relative w-full'>
      <div className='messageAndIcon flex items-center relative'>
        <div className='icon'>
          <ShieldCheckmark color='yellow' height={'100px'} width={'100px'} />
        </div>
        <div className='message'>{message}</div>
      </div>
      <div className='amount mt-3 ml-3 flex items-center'>
        <span className='text-sm'>Amount</span>
        <span className='font-bold ml-2'>$ {amount}</span>
      </div>
      <div className='relative mt-10 ml-3'>
        <span className='text-white text-sm'>Thank you</span>
      </div>
    </div>
  );
};
export default PaymentSuccess;
