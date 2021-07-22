import React, { useState, ChangeEvent } from 'react';
import './CheckoutForm.scss';
import { CheckoutInput } from './CheckoutInput';

interface Props {}

const CheckoutForm = (props: Props) => {
  const [cardHolderName, setCardHolderName] = useState<string>('');

  const [cardNumber, setCardNumber] = useState<string>('');

  const [address, setAddress] = useState<string>('');

  const handleCardHolder = (e: ChangeEvent<HTMLInputElement>) =>
    setCardHolderName(e.target.value);

  const handleCardNumber = (e: ChangeEvent<HTMLInputElement>) =>
    setCardNumber(e.target.value);

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value);

  return (
    <div className='checkoutForm relative w-full'>
      <form autoComplete='off'>
        <div className='flex inputGroup'>
          <CheckoutInput
            placeholder='card holder name'
            name='cardHolderName'
            value={cardHolderName}
            onChange={handleCardHolder}
          />
          <CheckoutInput
            placeholder='address'
            name='address'
            value={address}
            onChange={handleAddress}
          />
          <CheckoutInput
            placeholder='card number'
            name='cardNumber'
            value={cardNumber}
            onChange={handleCardNumber}
          />
        </div>
        <div className="inputButton">
          <button type='button' className="text-white text-center">submit</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
