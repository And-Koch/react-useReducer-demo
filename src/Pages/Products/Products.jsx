import "./products.css"

export const Products = ({ products, isLoading, dispatch }) => {
    return (
      <div className="container">
        <h2>Products</h2>
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          <div className="productsBox">
            {products.map((product) => (
              <div key={product.id} className="singleProductBox">
                <img src={product.thumbnail} alt={product.title} width="100px" />
                <h1>{product.title}</h1>
                <h2>Price: {product.price}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };