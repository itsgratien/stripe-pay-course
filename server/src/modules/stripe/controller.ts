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

    return newProduct;
  };

  getProductDetail = async (value: string) => {
    const findProduct = await this.stripe.products.retrieve(value);

    return findProduct;
  };

  convertUnitAmount = (value: number) => {
    const convert = Math.ceil(value * 100);

    return convert;
  };

  createPriceOnStripe = async (value: StripeType.PriceCreateParams) => {
    const newPrice = await this.stripe.prices.create(value);

    return newPrice;
  };

  getPriceDetail = async (value: string) => {
    const findPrice = await this.stripe.prices.retrieve(value);

    return findPrice;
  };

  createCharge = async (value: StripeType.ChargeCreateParams) => {
    const add = await this.stripe.charges.create({ ...value, currency: 'usd' });

    return add;
  };

  createPaymentIntent = async (value: StripeType.PaymentIntentCreateParams) => {
    const add = await this.stripe.paymentIntents.create(value);

    return add;
  };
}

const stripeController = new StripeController();

export { stripeController };
