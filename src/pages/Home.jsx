import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import Product from './Product'; 

const Home = () => {
  const { products } = useContext(ProductContext);

  console.log(products);

  const filteredProducts = products.filter((item) =>
    item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <section className="container">
      <h2>Products:</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Product Product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
