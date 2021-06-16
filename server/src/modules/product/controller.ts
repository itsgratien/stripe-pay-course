import { Request, Response } from 'express';
import { StatusCode } from '../../config';
import { productModel } from '../../database';

class ProductController {
  createProduct = async (req: Request, res: Response) => {
    try {
    } catch (error) {
      return res
        .status(StatusCode.ServerError)
        .json({ message: 'Unable to add product due internal server error' });
    }
  };
}

const productController = new ProductController();

export { productController };
