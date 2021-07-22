import React, { useState, ChangeEvent, FormEvent } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import './CheckoutForm.scss';
import { CheckoutInput } from './CheckoutInput';

interface Props {
  productId: string;
}

const CheckoutForm = (props: Props) => {
  const [cardHolderName, setCardHolderName] = useState<string>('');

  const [cardError, setCardError] = useState<string>();

  const [cardComplete, setCardComplete] = useState<boolean>(false);

  const [address, setAddress] = useState<string>('');

  const { productId } = props;

  const stripe = useStripe();

  const element = useElements();

  const handleCardHolder = (e: ChangeEvent<HTMLInputElement>) =>
    setCardHolderName(e.target.value);

  const handleCardNumber = (e: StripeCardElementChangeEvent) => {
    if (e.error) {
      setCardError(e.error.message);
    }

    if (e.complete) {
      setCardComplete(e.complete);

      setCardError(undefined);
    }

    return undefined;
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value);

  const handleChargeUser = (id: string) => {
    alert(id);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !element) {
      return undefined;
    }

    const cardElement = element.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: cardHolderName,
        address: {
          city: address,
        },
      },
    });

    if (error) {
      setCardError(error.message || 'something went wrong');
    }

    if (paymentMethod && cardComplete) {
      handleChargeUser(paymentMethod.id);
    }

    return;
  };

  return (
    <div className='checkoutForm relative w-full'>
      <form autoComplete='off' onSubmit={handleSubmit}>
        {cardError && (
          <div className='formError'>
            <span className='text-red-600 font-bold'>{cardError}</span>
          </div>
        )}
        <div className='flex inputGroup'>
          <CheckoutInput
            placeholder='card holder name'
            name='cardHolderName'
            value={cardHolderName}
            onChange={handleCardHolder}
          />
          <CheckoutInput
            placeholder='country - city or location'
            name='address'
            value={address}
            onChange={handleAddress}
          />
          <div className='checkoutInput cardNumber'>
            <CardElement
              options={{
                iconStyle: 'solid',
                style: {
                  base: {
                    iconColor: '#ffffff',
                    backgroundColor: 'none',
                    fontFamily: 'Quicksand, sans-serif',
                    fontSize: '14px',
                    color: '#ffffff',
                    '::placeholder': {
                      color: '#413D3D',
                    },
                    lineHeight: '40px',
                  },
                },
              }}
              onChange={handleCardNumber}
            />
          </div>
        </div>
        <div className='inputButton'>
          <button
            type='submit'
            className='text-white text-center'
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
