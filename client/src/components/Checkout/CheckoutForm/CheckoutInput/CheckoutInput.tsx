import React, { ChangeEvent } from 'react';
import './CheckoutInput.scss';

interface Props {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const CheckoutInput = (props: Props) => {
  const { name, value, placeholder, onChange } = props;

  return (
    <div className='checkoutInput'>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
export default CheckoutInput;
