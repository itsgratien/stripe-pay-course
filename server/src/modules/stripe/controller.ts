import Stripe, { Stripe as StripeType } from 'stripe';
import { environment } from '../../config';

class StripeController {
  private stripe: StripeType;

  constructor() {
    this.stripe = new Stripe(environment.stripeApiKey, {
      typescript: true,
      apiVersion: '2020-08-27',
    });
  }
  createProductOnStripe = async (value: StripeType.ProductCreateParams) => {
    const newProduct = await this.stripe.products.create(value);

    const newPrice = await this.stripe.prices.create({
      product: newProduct.id,
      unit_amount: 1000,
      currency: 'USD',
    });
  };
}

const stripeController = new StripeController();

export { stripeController };
