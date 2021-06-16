import { Stripe } from 'stripe';
export interface CreateProductType extends Stripe.ProductCreateParams {
  price: number;
}
