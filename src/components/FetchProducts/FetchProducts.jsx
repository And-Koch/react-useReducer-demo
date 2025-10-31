
export const FetchProducts = async () => {
      const productsFetch = await fetch('https://dummyjson.com/products');
      const productsRes = await productsFetch.json();
      return productsRes.products;
  };