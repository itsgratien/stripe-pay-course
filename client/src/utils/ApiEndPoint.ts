export const ApiEndPoint = {
  GetProduct: '/product',

  GetProductDetail: (productId: string) => `/product/${productId}`,
};
