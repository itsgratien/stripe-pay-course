export const ApiEndPoint = {
  GetProduct: '/product',

  GetProductDetail: (productId: string) => `/product/${productId}`,

  PayProduct: (productId: string) => `/product/pay/${productId}`,
};
