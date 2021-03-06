import { Request, Response } from 'express';
import { StatusCode } from '../../config';
import { productModel } from '../../database';
import { stripeController } from '../stripe/controller';
class ProductController {
  createProduct = async (req: Request, res: Response) => {
    try {
      const newProd = await stripeController.createProductOnStripe({
        name: req.body.name,
        active: true,
      });

      const newPrice = await stripeController.createPriceOnStripe({
        product: newProd.id,
        unit_amount: stripeController.convertUnitAmount(req.body.price),
        currency: 'usd',
      });

      const add = await productModel.create({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        stripe: {
          productId: newProd.id,
          price: newPrice.id,
        },
      });

      return res
        .status(StatusCode.Created)
        .json({ data: add, message: 'product created successfully' });
    } catch (error) {
      return res
        .status(StatusCode.ServerError)
        .json({ message: 'Unable to add product due internal server error' });
    }
  };

  getProductDetail = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;

      const findProduct = await productModel.findById(productId);

      if (!findProduct) {
        return res
          .status(StatusCode.NotFound)
          .json({ message: 'product not found' });
      }

      return res.json({ data: findProduct });
    } catch (error) {
      return res
        .status(StatusCode.ServerError)
        .json({ message: 'Unable to fetch product due internal server error' });
    }
  };

  getAllProduct = async (req: Request, res: Response) => {
    try {
      const findProduct = await productModel.find({});

      return res.json({ data: findProduct });
    } catch (error) {
      return res
        .status(StatusCode.ServerError)
        .json({ message: 'Unable to fetch product due internal server error' });
    }
  };

  payProduct = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;

      const checkProduct = await productModel.findById(productId);

      if (!checkProduct) {
        return res
          .status(StatusCode.NotFound)
          .json({ message: 'Product not found' });
      }
      const amount = stripeController.convertUnitAmount(
        Number(checkProduct.price)
      );

      await stripeController.createPaymentIntent({
        amount,
        confirm: true,
        metadata: {
          address: req.body.address,
          name: req.body.name,
        },
        currency: 'usd',
        payment_method: req.body.paymentMethodId,
      });

      return res
        .status(StatusCode.Created)
        .json({ message: 'Payment was done successfully' });
    } catch (error) {
      return res
        .status(StatusCode.ServerError)
        .json({ message: 'Unable to pay product due internal server error' });
    }
  };
}

const productController = new ProductController();

export { productController };
